window.onload=function(){
    var wrap = document.querySelector("#wrap");//获取父级容器wrap
    var box = document.querySelectorAll(".box");//获取所有的box
    var isLoad = true;
    //获取最后一张图片距离文档顶部的距离
    //$(".box:last").offset().top
   $(window).scroll(function(){
       setTimeout(function(){
       if(!isLoad) return;
           //console.log(isLoad)193453
       isLoad=false;
       var clientH = $(window).height();//获取窗口的高度
       var lastTop = $(".box:last").offset().top;//获取最后一个元素到顶部的距离
       var topH = $(this).scrollTop();
        //console.log("滚动距离:"+topH)
        //console.log("窗口的高度："+clientH);
        //console.log("最后一个box的距离："+lastTop);
        if(topH+clientH>lastTop+100){
            //console.log("可以加载数据。。。")
            //通过ajax 请求数据
            $.getJSON("data/data.json",function(data){
                var htmlStr = '';
                for(var i=0;i<data.length;i++){
                    htmlStr+='<div class="box"> <div class="info"> <div class="img"> <img src="'+data[i].src+'" alt=""/> </div> <div class="title">'+data[i].title+'</div> </div> </div>';
                }
                //插入数据
                $("#wrap").append(htmlStr);
                //执行瀑布流样式
                PBL('.box');
            })
        }
           isLoad=true;
       },200)
    })




    /***************************************************************/
    //首次执行，设置数量
    setNum(box,wrap);
    PBL('.box');

    //监听窗口缩放事件
    window.addEventListener("resize",function(){
        setTimeout(function(){
            setNum(box,wrap);//重设置容器宽
            //重新设置瀑布流样式
            PBL('.box');
        },200)
    });
    //console.log(index) // [455, 238, 459, 373]
}

/**********************************************************************/
//   call()  apply() 使用

//定义一个获取最小列高的索引值 everyH = [455, 238, 459, 373]  minH= 238;
function getIndex(everyH,minH){//everyH 存储的列高 ,minH 最小的高度
    for(index in everyH){
        if(everyH[index]==minH) return index;
    }
}
//定义一个函数设置样式
function setStyle(box,top,left){ //box 需要设置样式的元素 ,top ,left
    box.style.position="absolute";
    box.style.left=left+"px";
    box.style.top=top+"px";
}

//定义一个跟随窗口缩放自适应函数
function setNum(box,wrap){
    var clientW = document.documentElement.offsetWidth;//获取文档宽度
    //计算得出当前窗口一行最多可容纳的数量
    var boxW = box[0].offsetWidth;//获取box的宽度
    var num = Math.floor(clientW / boxW); //获取当前窗口一行可容纳的数量
    //给父级容器设置宽度
    wrap.style.width=(boxW*num)+"px";
}

/**
 * 定义瀑布流主函数
 * @constructor
 */
function PBL(box){
    var box = document.querySelectorAll(box);
    var clientW = document.documentElement.offsetWidth;//获取文档宽度
    var boxW = box[0].offsetWidth;//获取box的宽度
    var num = Math.floor(clientW / boxW); //获取当前窗口一行可容纳的数量
    //console.log(num)
    var everyH = []; //定义一个用于存储每列高度的数组
    for(var i=0;i<box.length;i++){
        if(i<num){
            everyH[i]=box[i].offsetHeight;//获取第一行所有box的高度并放入数组
        }else{//从第二行开始，需要去给box设置位置，并累计当前列的高度
            var minH = Math.min.apply(null,everyH);
            var index = getIndex(everyH,minH);
            //console.log(everyH[index])
            //从第5个开始设置样式
            setStyle(box[i],everyH[index],box[index].offsetLeft);
            everyH[index]+=box[i].offsetHeight;//更新当前的列高
        }
    }
}