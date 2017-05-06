/**
 * Created by 89418 on 2017/5/4.
 */
var login_button = document.getElementById("login_1");
var login_cancel = document.getElementById("close");
var login = document.getElementById("login");
var mask = document.querySelector(".login");
login_button.onclick = function () {
    mask.style.display = "block";
}
login_cancel.onclick = function () {
    mask.style.display = "none";
}
login.onclick = function () {

    var userName = document.querySelector("#username").value;
    var password = document.querySelector("#password").value;
    var isRight = false;
    if(!localStorage.getItem("username1")){
        localStorage.setItem("username1","lin");
        localStorage.setItem("password1","5812");
        localStorage.setItem("userNum",1);
    }
    var userNum = localStorage.getItem("userNum");
    for(var i = 1;i <= parseInt(userNum) ;i++){
        if(userName == localStorage.getItem("username"+i)&&password==localStorage.getItem("password"+i)){
            document.querySelector(".navbar-right").innerHTML = "欢迎"+userName;
            alert("登录成功");
            mask.style.display = "none";
            localStorage.setItem("nowUser","username"+i);
            isRight = true;
        }
    }
    if(!isRight){
        alert("请输入正确的账号和密码");
    }

};
