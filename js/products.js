/**
 * Created by 89418 on 2017/5/5.
 */
(function(){
    init();
    var can = document.querySelector("canvas");
    can.width = 400;
    can.height = 400;
    var ctx = can.getContext("2d");
    var startAngel = -90*Math.PI/180;
    var endAngel = 0;
    var textX = 0,textY=0;
    var data = [{
        "value": .2,
        "color": "red",
        "title": "CSS"
    },{
        "value": .3,
        "color": "blue",
        "title": "JS"
    },{
        "value": .4,
        "color": "green",
        "title": "JQuery"
    },{
        "value": .1,
        "color": "#147",
        "title": "HTML5"
    }];
    ctx.beginPath();
    ctx.fillText("各种语言使用情况:",20,50);
    for(var i = 0;i < data.length ;i++){
        endAngel = startAngel+data[i].value*360*Math.PI/180;
        textX = Math.cos((endAngel-startAngel)/2+startAngel)*110+200;
        textY = Math.sin((endAngel-startAngel)/2+startAngel)*110+200;
        // console.log(i+"-"+textX+"-"+textY);
        ctx.beginPath();
        ctx.moveTo(200,200);
        ctx.arc(200,200,100,startAngel,endAngel,false);
        ctx.fillStyle = data[i].color;
        ctx.fill();
        ctx.stroke();
        if(textX <= 200 ){
            // console.log(textX+"   "+data[i].color);
            ctx.textAlign = "end";
        }
        ctx.fillText(data[i].title+":"+data[i].value*100+"%",textX,textY);
        startAngel = endAngel;
    }
    var pic = document.querySelector(".pic");
    var icon = document.querySelector(".point").getElementsByTagName("li");
    var pre = document.querySelector(".pre");
    var next = document.querySelector(".next");
    slider(pic,icon,pre,next);
    /*轮播图封装
     * 输入轮播项以及轮播图标项,（左箭头，右箭头，这两个可选）即可
     * */
    function slider(pic,icon,arrowPre,arrowNext) {

        var target = 0,begin = 0,slider_left = 0,index = 0;
        var sliderPic = pic;
        var sliderIcon = icon;
        if(arrowPre&&arrowNext){
            arrowPre.addEventListener("click",function () {
                index--;
                index <=0 ? index = sliderIcon.length: index;
                iconIndex(index);
            });
            arrowNext.addEventListener("click",function () {

                index%=sliderIcon.length;
                index++;
                iconIndex(index);
            })
        }
        var timer = setInterval(
            function () {
                if(Math.floor(begin) === target || Math.floor(begin)+1 === target){
                    index++;
                    if(index>sliderIcon.length){
                        index = 0;
                        begin = 0;
                        sliderPic.style.left = begin + "px";
                    }
                    iconIndex(index);
                }
                target = -(index) * pic.getElementsByTagName("li")[0].offsetWidth;
                begin = begin+(target-begin)/100;
                sliderPic.style.left = begin + "px";
            },5);
        for(var i = 0;i < sliderIcon.length ;i++){
            sliderIcon[i].index = i;
            sliderIcon[i].addEventListener("click",function (e) {
                index = this.index+1;
                iconIndex(index);
            });
        };
        // 图标哪个是ACTIVE
        function iconIndex(index) {
            for(var i = 0;i < sliderIcon.length ;i++){
                sliderIcon[i].className = "";
            }
            // console.log(index-1);
            sliderIcon[index-1<0?0:index-1].className = "active";
        }
    };
    $(function () {
        $('[data-toggle="popover"]').popover();
    })
})();