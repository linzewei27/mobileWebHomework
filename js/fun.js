/**
 * Created by 89418 on 2017/5/4.
 */
function init() {
    if(localStorage.getItem("nowUser")){
        document.querySelector(".navbar-right").innerHTML = "欢迎"+localStorage.getItem(localStorage.getItem("nowUser"));
    }
}