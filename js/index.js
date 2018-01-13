/**
 * Created by Administrator on 2017/10/30.
 */
    /***********清空搜索框里面的字体*******************/
var seek = document.querySelector(".seek");
var submit = document.querySelector(".submit");
seek.onfocus=function(){    //获得焦点
    if(this.placeholder=="请输入商家名称"){
        this.placeholder="";
        submit.style="background-position:-57px 0";
    }
};
seek.onblur=function(){   //失去焦点
    if(this.placeholder==""){
        this.placeholder="请输入商家名称";
        submit.style="background-position:-42px 0";
    }
};
/*************二级菜单*******************/
    $(".list li").hover(function(){
        $(this).find(".menu").show().siblings().find(".menu").hide();
        $(this).addClass("hover").siblings().removeClass("hover");
        var top = $(".aside-left").offset().top+$(".aside-left").outerHeight();  //总容器的顶部的距离加自身高度的距离包括marginhr padding
        //子菜单离顶部的距离加自身的高度包括内外边距
        var litop = $(this).find(".menu").offset().top + $(this).find(".menu").outerHeight();
        if(litop>top){   //如果子菜单离顶部的距离大于容器离顶部的距离的时候
            $(this).find(".menu").css("top","-"+(litop-top)+"px");  //就把子菜单超出的距离减去容器的距离
        }
    },function(){
        $(this).find(".menu").hide();
    });

/**
 * @图片轮播
 */
var page = -1;//设置开始轮播第一个图片
var len = 4;//设定图片数量
var stop = false;//设置轮播是否停止

/**定义轮播函数**/
function slide(){
        $(".silde").animate({"left":"-"+page*666+"px"},300);
        $(".silde-page li").eq(page).addClass("on").siblings().removeClass("on");
    if(!stop){
        page++;//当前轮播加1（下一个图片显示）
        page%=len; // = > page = page % len
    }
    setTimeout(slide,2000);
}
slide();     //调用
/**悬浮到轮播图  **/
$(".focus").mouseover(function(){
    stop = true;//停止轮播
}).mouseout(function(){
    stop = false;//鼠标离开 开始轮播
});
/**按钮悬浮**/
$(".silde-page li").mouseover(function(){
    page = $(this).index();//将page 设置成当前点击按钮的 下标值
    $(".silde").stop(true,true).animate({"left":"-"+page*666+"px"},300);
    $(".silde-page li").eq(page).addClass("on").siblings().removeClass("on");
});


/************右侧高级搜索点击事件***************************/
$(".search-all a").click(function(){
    if($(this).find(".btm").is(":hidden")){   //当前的子元素是否隐藏的
        $(".search-all .btm:visible").hide();    //将显示的隐藏
        $(this).find(".btm").show("fast");    //btm显示
        $(this).css("zIndex","2").siblings().css("zIndex","1");//当前的 z-index为2其他的兄弟节点为1
    }else {
        $(this).find(".btm").hide("fast") //再次点击就隐藏
    }
});
/****************右侧搜索悬浮样式**********************/
$(".grabble-top").hover(
    function(){
        $(".search-all").css("overflow","visible");
        $(this).find(".search-all").stop().animate({"height":"140px","opacity":"1"},500)
    },function(){
        $(".search-all").css("overflow","hidden");
        $(this).find(".search-all").stop().animate({"height":"0","opacity":"0"},500);
        $(".search-all .btm:visible").hide();    //鼠标离开父容器时将显示的菜单未关闭的隐藏
});

/****************右侧小箭头******************************/
$(document).ready(function(){
    $("arrows").click(function(){
        var top = $(".plug-in").scrollTop();
        setInterval(function(){
            top+=100;
            $(".plug-in").scrollTop(top)
        },10);
    });

    $(window).scroll(function(){
        if($(this).scrollTop() >=200){//当位置在200像素的时候返回事件才会显示
            $(".ad").hide();
            $(".plug-in").animate({"opacity":"1","bottom":"50px"},500);
        }else{
            $(".ad").show();
            $(".plug-in").stop(true,true,true).css({"opacity":"0","bottom":"-150px"});
        }
    });
    $(".arrows").click(function(){  // 点击返回顶部
        $("html,body").animate({scrollTop:0})
    });
});

$(".plug-in").hover(function(){
    $(".shell").css("display","block");
},function(){
    $(".shell").css("display","none");
});

$(".shell").hover(function(){
    $(this).css("display","block");
},function(){
    $(this).css("display","none");
});



