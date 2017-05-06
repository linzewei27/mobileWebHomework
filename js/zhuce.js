/**
 * Created by 89418 on 2017/5/5.
 */
window.onload = function () {
    function zhuce() {
        var submit = document.querySelector(".btn_zhuce");

        submit.addEventListener("click",function () {
            var userNameInput = document.getElementById("tel");
            var passwordInput = document.getElementById("password");
            var userNum = parseInt(localStorage.getItem("userNum"));
            var isCurrent = false;
            var userName = userNameInput.value;
            var password = passwordInput.value;
                if(!userName){
                        localStorage.setItem("username1",userName);
                        localStorage.setItem("password1",password);
                        localStorage.setItem("userNum",1);
                }else {

                    userNum++;
                    for (var i = 1; i < userNum; i++) {
                        if (localStorage.getItem("username" + i) === userName) {
                            alert("此用户已经存在了，请直接登录");
                            window.location.href = "./index.html";
                            isCurrent = true;
                            break;
                        }
                    }
                    if (!isCurrent) {
                        localStorage.setItem("username" + userNum, userName);
                        localStorage.setItem("password" + userNum, password);
                        localStorage.setItem("userNum", userNum);
                        // window.location.href = "./index.html";
                        alert("创建用户成功！");
                        window.history.back(-1);

                    } else {
                        alert("创建用户失败！");
                    }
                }
        })
    };
    zhuce();
}
