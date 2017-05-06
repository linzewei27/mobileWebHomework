/**
 * Created by 89418 on 2017/5/3.
 */
(function () {
    window.onload = function () {
        var tabs_html = document.getElementById("html");
        var tabs_css = document.getElementById("css");
        var tabs_js = document.getElementById("js");
        var content_box = document.getElementById("tab_content");
        var date= document.getElementById("date");
        var num = document.getElementById("num");
        init();
        if(!localStorage.getItem("num")){
            var num1 = 1;
            localStorage.setItem("num",num1);
        }else{
            var num1 = localStorage.getItem("num");
            num1++;
            localStorage.setItem("num",num1);
        }
        num.innerHTML = num1;
        num.style.color = "red";
        var nowData = new Date();
        var year = nowData.getFullYear();
        var month = nowData.getMonth()+1<10? "0"+(nowData.getMonth()+1):nowData.getMonth()+1;
        var day = nowData.getDate()<10? "0"+nowData.getDate():nowData.getDate();
        var tabs_content = ["超文本标记语言，标准通用标记语言下的一个应用。 “超文本”就是指页面内可以包含图片、链接，甚至音乐、程序等非文字元素。 超文本标记语言的结构包括“头”部分（英语：Head）、和“主体”部分（英语：Body），其中“头”部提供关于网页的信息，“主体”部分提供网页的具体内容。","css是英文Cascading Style Sheets的缩写。它是一种用来表现HTML（标准通用标记语言的一个应用）或XML（标准通用标记语言的一个子集）等文件样式的计算机语言。"," JavaScript一种直译式脚本语言，是一种动态类型、弱类型、基于原型的语言，内置支持类型。它的解释器被称为JavaScript引擎，为浏览器的一部分，广泛用于客户端的脚本语言，最早是在HTML（标准通用标记语言下的一个应用）网页上使用，用来给HTML网页增加动态功能。"]
        tabs_html.onclick = function () {
            content_box.innerHTML = tabs_content[0];
            tabs_html.className = "active";
            tabs_css.className = "";
            tabs_js.className = "";
        }
        tabs_css.onclick = function () {
            content_box.innerHTML = tabs_content[1];
            tabs_css.className = "active";
            tabs_html.className = "";
            tabs_js.className = "";
        }
        tabs_js.onclick = function () {
            content_box.innerHTML = tabs_content[2];
            tabs_js.className = "active";
            tabs_css.className = "";
            tabs_html.className = "";
        }

            date.value = year+"-"+month+"-"+day;
    }

})();