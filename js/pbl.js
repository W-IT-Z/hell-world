window.onload=function(){

    var isLoad = true;
    //获取最后一张图片距离文档顶部的距离
    //$(".box:last").offset().top
    var data = [
        [
            {'src':'img/pbl/5.jpg','title':'采用顶级的羊皮材料，更时尚，更有格调！搭配秋冬服饰更有独特的韵味！'},
            {'src':'img/pbl/6.jpg','title':'慢跑鞋无疑是整个2014年的时尚宠儿。除却功能性以及对足部的保护之外，选择一双款型时尚，配色亮眼的慢跑鞋绝对是您对自己时尚之道最好的诠释。乔丹时尚功能休闲慢跑鞋以出色的性能，时尚的造型'},
            {'src':'img/pbl/7.jpg','title':'圣迩尼—让你怦然心动，2014最新潮流性感个性款式，穿出不一样的时尚！'},
            {'src':'img/pbl/8.jpg','title':'潮男时尚T台秀'},
            {'src':'img/pbl/9.jpg','title':'潮流荧光色系'},
            {'src':'img/pbl/10.jpg','title':'新款男士商务几何图案修身夹克'},
            {'src':'img/pbl/11.jpg','title':'精梳棉面料，柔软舒适透气。'},
            {'src':'img/pbl/12.jpg','title':'舒适轻薄款，穿着轻薄，无负担感。修身版型，起到了很好的修身的效果，更加塑型。'},
        ],
        [
            {'src':'img/pbl/13.jpg','title':'丝质柔滑面料 干净舒适。衣襟拼色，时尚有型，金属质地纽扣，完美细节品质。'},
            {'src':'img/pbl/14.jpg','title':'运用时兴的对比拼色元素，中袖设计与弹力袖口的组合既显瘦又端庄，散发都市丽人的知性气质。'},
            {'src':'img/pbl/15.jpg','title':'干练利落的尖领融合复古的做旧蓝色，于撞色对比间营造视觉冲击力，展现鲜明的时尚态度。'},
            {'src':'img/pbl/16.jpg','title':'鲜嫩的鹅黄色圆领配以拉链前襟十分吸引眼球，亲肤丝棉材质舒适贴合肌肤，恰到好处的休闲造型极富亲和力。'},
            {'src':'img/pbl/17.jpg','title':'淡雅桃与经典黑色的撞色拼接，展现大气利落气质。'},
            {'src':'img/pbl/18.jpg','title':'清新利落的白色衬衫小翻领设计，平添一份邻家女孩般清爽干净的气质。'},
            {'src':'img/pbl/19.jpg','title':'简约圆领，凸显优雅大方气质。裙身采用有浮雕质感的花型，更添女性柔美浪漫的古典气质。'},
            {'src':'img/pbl/20.jpg','title':'胸前以沙漏式的剪裁以及颇具设计感的隐形开叉设计，轻松衬出姣美丰满的胸型。'},
        ],
        [
            {'src':'img/pbl/21.jpg','title':'甜美的白色波点，加上薄荷绿的清新映衬，简约中透漏女神气质。上班约会都是不错的选择。'},
            {'src':'img/pbl/22.jpg','title':'宽松的H版型连衣裙，腰部可自由调节，轻松藏起身体小赘肉。'},
            {'src':'img/pbl/23.jpg','title':'新款骷髅印花宽松无袖圆领连衣裙，穿出潮流范儿。'},
            {'src':'img/pbl/24.jpg','title':'天丝牛仔连衣裙，比雪纺更柔软透气，比棉更具光泽。'},
            {'src':'img/pbl/25.jpg','title':'独特的露背设计，展现女性妩媚性感的背部线条。'},
            {'src':'img/pbl/26.jpg','title':'职业男人着装导师，让不修边幅SAY GOODBYE。'},
            {'src':'img/pbl/27.jpg','title':'上身宽松有型，下身包臀设计，简洁大方的设计，流露出性感修身的好身材，得体大方。'},
            {'src':'img/pbl/28.jpg','title':'主珠为天然红玛瑙佛珠，加以天然蓝绿松顶珠为配珠，绿松石象征着“信赖和信任”，也给远征的人带来吉祥和好运，被誉为成功幸运之石。'},
        ],
        [
            {'src':'img/pbl/29.jpg','title':'采用吸湿速干面料，穿着舒适，圆领设计，简洁大方；图案独有新疆风貌垂钓活动，彰显Discovery Expedition品牌非凡探索的户外精神。'},
            {'src':'img/pbl/30.jpg','title':'使用仿棉感速干面料，加入吸湿速干整理，含有碳素有除臭抗菌的功能。适合徒步、穿越、露营、日常等环境穿着。'},
            {'src':'img/pbl/31.jpg','title':'行走在野外，再不怕清晨露珠或是突如其来的毛毛雨打湿衣服，时刻保持舒爽。'},
            {'src':'img/pbl/32.jpg','title':'平整的领口，匀密的双车线，在这个短袖衬衫解禁的夏天显得精致而精神。'},
            {'src':'img/pbl/33.jpg','title':'撞色拼接，弹力面料，弹力包边下摆，后背均带有3M反光，增加骑行过程的安全性。'},
            {'src':'img/pbl/34.jpg','title':'面料凉爽顺滑，整体设计特别女人味。'},
            {'src':'img/pbl/35.jpg','title':'你可以穿着它去散步，去骑车，去户外，去郊游，晒着太阳而无需担心晒伤。'},
            {'src':'img/pbl/36.jpg','title':'拼色款式设计，透气轻薄的超轻面料，带给您完美舒适的质感，腋下面料冲孔设计，方便排汗与换气，更有利于户外活动穿着。'},
        ],
        [
            {'src':'img/pbl/37.jpg','title':'王者之气尽显无疑，体现男人魅力。'},
            {'src':'img/pbl/38.jpg','title':'胸针采用的优质合金，经过精湛的电镀和抛光处理，呈现出华丽的光泽，手感顺滑不易生锈。长时间使用依旧持久弥新。'},
            {'src':'img/pbl/39.jpg','title':'造型精美，作为点缀出席各种场合。'},
            {'src':'img/pbl/40.jpg','title':'被用于出席颁奖典礼和参与派对的装扮眼镜。'},
            {'src':'img/pbl/41.jpg','title':'性感的大红在春夏季大放异彩，不再那么闪耀而浓重，转而以一种淡淡的姿态唤醒人们的感官视觉。'},
            {'src':'img/pbl/42.jpg','title':'潮流百搭，遮阳、修脸神奇，适合各种场合佩带。'},
            {'src':'img/pbl/43.jpg','title':'最具代表色彩的眼镜，一如既往的为年轻人增光。商务、休闲、驾车、运动，每一个户外场合都是最佳的搭配宠儿'},
            {'src':'img/pbl/44.jpg','title':'用黑色蕾丝做腰带，有很好的收腰效果，合体修身，简洁中透露随性感。'},
        ],
        [
            {'src':'img/pbl/45.jpg','title':'豪放派展现内涵的首选。'},
            {'src':'img/pbl/46.jpg','title':'而立之年，终因一串友人相赠的佛珠心平气和，离苦得乐。'},
            {'src':'img/pbl/47.jpg','title':'中微喇收紧腰腹线条的同时，宽阔的小腿裤腿遮掩腿型，重塑小腿线条。'},
            {'src':'img/pbl/48.jpg','title':'COACH 蔻驰 女士PVC经典LOGO卡其蓝色手提肩背包'},
            {'src':'img/pbl/49.jpg','title':'2014新品俏皮清新马卡龙拼色色系轻薄大容量长款钱包'},
            {'src':'img/pbl/50.jpg','title':'COACH 女款皮革十字花纹柿红色手提肩背斜挎包'},
            {'src':'img/pbl/51.jpg','title':'每个包包都有其独特的风采，捧在手心里，随意搭配，精致可爱。'},
            {'src':'img/pbl/52.jpg','title':'镜面合成革易于清洁打理，金属后跟时尚潮流，款型简约，适于职场或宴会穿着。'},
        ],
        [
            {'src':'img/pbl/53.jpg','title':'女士精品'},
            {'src':'img/pbl/54.jpg','title':'雀仔飞鸟灵感仿佛来自于法国田园风情的家居用品。艳红、薄荷绿以及暖粉的色彩应用在蓝调针织裙上，热烈之外更具浪漫气息。'},
            {'src':'img/pbl/55.jpg','title':'经典圆领设计，简单大方，宽松袖口，舒适大方。花鸟织锦缎拼接，复古典雅。细腻质地，手感弹滑，光泽柔和均匀，温和亲肤。'},
            {'src':'img/pbl/56.jpg','title':'宽松休闲给人带来自在穿着体验，彰显大方知性的文艺韵味。'},
            {'src':'img/pbl/57.jpg','title':'柔软顺滑，吸湿透气，一如第二层肌肤般，极为适合贴身穿着。'},
            {'src':'img/pbl/58.jpg','title':'至美简约，没有任何多余的装饰，凸显干练气质。'},
            {'src':'img/pbl/59.jpg','title':'永久典型的黑白条纹控，穿出潮男小清新。'},
            {'src':'img/pbl/60.jpg','title':'运动元素是不可替代的“范儿”，摆脱束缚，带着欢快的心情，在街头、户外随心游走。'},
        ],
        [
            {'src':'img/pbl/61.jpg','title':'清甜马卡龙色系，是春夏不可或缺的主打元素。色调鲜活，条纹肌理自然，极具品质感。轻而易举地掠获少女芳心。'},
            {'src':'img/pbl/62.jpg','title':'阿玛尼休闲夏日时尚阿玛尼型男短袖 大经典logo腰带 阳光百搭牛仔裤 过一个轻松阳光夏日'},
            {'src':'img/pbl/63.jpg','title':'拼色连衣裙绝对是今夏的流行款'},
            {'src':'img/pbl/64.jpg','title':'时尚名媛黑色静谧显瘦'},
            {'src':'img/pbl/65.jpg','title':'甜美 休闲 名媛 OL 休闲 经典'},
            {'src':'img/pbl/66.jpg','title':'中微喇收紧腰腹线条的同时，宽阔的小腿裤腿遮掩腿型，重塑小腿线条。'},
            {'src':'img/pbl/67.jpg','title':'职业男人着装导师，让不修边幅SAY GOODBYE。'},
            {'src':'img/pbl/68.jpg','title':'不同色彩的拼接，彰显潮流风尚，无形中增添了几分青春活力。'},
        ]
    ];

    var page=0;
    var isScroll = true;//节流，防抖
    PBL();
    $(window).scroll(function(){
        if(checkLoad()){ //如果已经达到请求的条件
            if(!isScroll) return;//节流
            isScroll = false;
            setTimeout(function(){
                if(page<data.length){
                    var htmlStr = '';
                    for(var i=0;i<data[page].length;i++){
                        htmlStr+='<div class="box"> <div class="info"> <div class="img"> <img src="'+data[page][i].src+'" alt=""/> </div> <div class="title">'+data[page][i].title+'</div> </div> </div>';
                    }
                    //console.log(data.length);
                    //插入数据
                    $("#showpic").append(htmlStr);
                    //执行瀑布流样式
                    PBL();
                    page++;
                    isScroll = true;
                }
            },200);
            //执行瀑布流样式
            PBL();
        }
    })


    function checkLoad() {
        var clientH = $(window).height();//获取窗口的高度
        var lastTop = $(".box:last").offset().top;//获取最后一个元素到顶部的距离
        var topH = $(this).scrollTop();
        if(topH+clientH>=lastTop){
            //console.log("可以加载数据了...");
            return true;
        }else{
            return false;
        }
    }

    /***************************************************************/
    //首次执行，设置数量
    //setNum(box,wrap);
    //PBL('.box');

    //监听窗口缩放事件
    window.addEventListener("resize",function(){
        setTimeout(function(){
            //setNum(box,wrap);//重设置容器宽
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
function PBL(){
    var showPic = $("#showpic");//获取父级容器showPic
    var wrap = document.querySelector("#wrap");//获取父级容器wrap
    var box = document.querySelectorAll(".box");//获取所有的box
    //var box = document.querySelectorAll(box);
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
    var maxH = Math.max.apply(null,everyH);//获得最大值
    showPic.height(maxH);//设置父级容器showPic的高
}