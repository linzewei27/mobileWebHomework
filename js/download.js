/**
 * Created by 89418 on 2017/5/6.
 */
(function () {
    init();
    var  down= document.querySelectorAll(".dl");
    var img = document.querySelectorAll(".img");
    var bigPic = document.querySelector(".bigPic");
    var center = bigPic.querySelector(".center");
    var pic_close = bigPic.querySelector(".close");
    //下载的函数
    for(var i = 0;i < down.length ;i++){
            down[i].getElementsByTagName("button")[0].onclick = function () {
                var dl = this.parentNode;
                var w = 0;
                var timer = setInterval(
                    function () {
                        w++;
                        dl.querySelector(".progress-bar").style.width = w+"px"
                        dl.querySelector(".progress-bar").innerHTML = (w/dl.querySelector(".progress").offsetWidth*100).toFixed(2)+"%";
                        if(w/dl.querySelector(".progress").offsetWidth===1){
                            clearInterval(timer);
                            dl.querySelector(".progress-bar").style.width = "0px"
                            dl.querySelector(".progress-bar").innerHTML = "0%";
                            alert(dl.parentNode.querySelector("h4").innerHTML+"完成");
                        }

                    }

                    ,100
                );

            }
       }
    //图片的点击浏览功能
    for(var i = 0;i < img.length ;i++){
        switch (i){
            case 0:
                img[i].src = "./images/html.jpg";
                break;
            case 1:
                img[i].src = "./images/css.jpg";
                break;
            case 2:
                img[i].src = "./images/js.jpg";
                break;
            case 3:
                img[i].src = "./images/jquery.jpg";
                break;
        }
        img[i].onclick = function () {
            bigPic.style.display = "block";

            /*插入图片*/
            center.innerHTML = "<img src="+this.src+">";
            /*居中显示*/
            var left = -center.offsetWidth/2 + "px";
            var top = -center.offsetHeight/2 + "px";
            center.style.margin = top+" 0 0 "+left;
        }
    }
    /*关闭大图显示*/
    pic_close.onclick = function () {
        bigPic.style.display = "none";
    }
})();