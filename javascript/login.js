/**
 * Created by E560KCD on 2017/3/30.
 */

$(function () {
$(".btn").click(function () {

    ajaxRequest("post", "../javascript/login.php", true, {
        "user": $(".user").val(),
        "pwd": $(".pass").val()
    }, function (data) {
        /**
         * {"user":"h51615","pwd":"123456"}
         * 向服务器传递参数，上面的两个key不可改变。
         */
        data=data.replace(/\s+/g,"");
        if(data!="0") {
            alert(1)
            window.location.href="index.html"
        }else{
            alert("用户名或者密码错误！！！请输入正确的用户名或者密码!!!");
        }
    });
})



})