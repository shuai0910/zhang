/**
 * Created by E560KCD on 2017/3/27.
 */
$(function () {
    function regist() {
        var phone="";
        var pwd="";
        var repwd="";
        var flag1=false,flag2=false,flag3=false,flag4=false,flag5=false;
        var _me=this;
        var array=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
        this.phoexe=function () {
            $("#txt_username").focus(function () {
                $("#J_tipUsername").html("邮箱/手机号可用于登录、找回密码、接收订单通知等服务");
                $("#J_tipUsername").addClass("warn");
                $("#txt_username").removeClass("wrong");
                $("#nameok").removeClass("icon-wrong");
                $("#nameok").removeClass("icon-yes");
            });
            $("#txt_username").blur(function () {
                phone=$("#txt_username").val();
                if(/^1[3,5,7,8,9]\d{9}$/g.test(phone)) {
                    flag1 = true;
                    $("#nameok").addClass("icon-yes");
                    $("#J_tipUsername").html("");
                }else {
                    flag1=false;
                    $("#nameok").addClass("icon-wrong");
                    $("#txt_username").addClass("wrong");
                    $("#J_tipUsername").removeClass("warn");
                    $("#J_tipUsername").html("邮箱/手机格式不正确，请重新输入");
                }
            })
        }
        this.pwd=function () {
            $("#txt_password").focus(function () {
                $("#J_tippwd").html("密码为6-20个字符，可由英文、数字及符号组成");
                $("#J_tippwd").addClass("warn");
                $("#txt_password").removeClass("wrong");
                $("#pwdok").removeClass("icon-wrong");
                $("#pwdok").removeClass("icon-yes");
            });
            $("#txt_password").blur(function () {
                pwd=$("#txt_password").val();
                if(/\w{6,20}/g.test(pwd)) {
                    flag2 = true;
                    $("#pwdok").addClass("icon-yes");
                    $("#J_tippwd").html("");
                }else {
                    flag2=false;
                    $("#pwdok").addClass("icon-wrong");
                    $("#txt_password").addClass("wrong");
                    $("#J_tippwd").removeClass("warn");
                    $("#J_tippwd").html("密码长度6-20个字符，请重新输入");
                }
            });

            $("#txt_repassword").focus(function () {
                $("#J_tipSurePassword").html("请再次输入密码");
                $("#J_tipSurePassword").addClass("warn");
                $("#txt_repassword").removeClass("wrong");
                $("#spn_repassword_ok").removeClass("icon-wrong");
                $("#spn_repassword_ok").removeClass("icon-yes");
            });
            $("#txt_repassword").blur(function () {
                repwd=$("#txt_repassword").val();
                if(pwd==repwd) {
                    flag3 = true;
                    $("#spn_repassword_ok").addClass("icon-yes");
                    $("#J_tipSurePassword").html("");
                }else {
                    flag3=false;
                    $("#spn_repassword_ok").addClass("icon-wrong");
                    $("#txt_repassword").addClass("wrong");
                    $("#J_tipSurePassword").removeClass("warn");
                    $("#J_tipSurePassword").html("两次输入的密码不一致，请重新输入");
                }
            })
        };
        this.vcode=function () {
            var ycon="";
            for(var i=0;i<4;i++){
                ycon+=array[Math.floor(Math.random()*52)];
            }
            $("#vcodeImgWrap").html(ycon);
        }
        this.vocd=function () {
            $("#txt_vcode").focus(function () {
                $("#J_tipVcode").html("请填写图片中的内容，不区分大小写");
                $("#J_tipVcode").addClass("warn");
                $("#txt_vcode").removeClass("wrong");
                $("#spn_vcode_ok").removeClass("icon-wrong");
                $("#spn_vcode_ok").removeClass("icon-yes");
            });
            $("#txt_vcode").blur(function () {
                if($("#txt_vcode").val()==$("#vcodeImgWrap").html()) {
                    flag4 = true;
                    $("#spn_vcode_ok").addClass("icon-yes");
                    $("#J_tipVcode").html("");
                }else {
                    flag4=false;
                    $("#spn_vcode_ok").addClass("icon-wrong");
                    $("#txt_vcode").addClass("wrong");
                    $("#J_tipVcode").removeClass("warn");
                    $("#J_tipVcode").html("图形验证码输入错误，请重新输入");
                }
            })
            $("#vcodeImgWrap").click(function () {
                _me.vcode();
            })
            $("#vcodeImgBtn").click(function () {
                _me.vcode();
            })
        }
        this.chocke=function () {
            if(document.getElementById("chb_agreemen").checked){
                flag5=true;
                $("#J_tipAgreement").html("");
            }
            $("#chb_agreemen").click(function () {
                if(document.getElementById("chb_agreemen").checked){
                    flag5=true;
                    $("#J_tipAgreement").html("");
                }else {
                    flag5=false;
                    $("#J_tipAgreement").html("您必须同意当当服务条款后，才能提交注册。")
                }
            })
        };
        this.zc=function () {
            $("#J_submitRegister").click(function(){
                ajaxRequest("post", "../javascript/regist.php", true, {
                    "account": $("#txt_username").val(),
                    "secret": $("#txt_password").val(),
                    "mobile": $("#txt_vcode").val()
                }, function (data) {
                    data = data.replace(/\s+/g, "");
                    if (data == "0" || flag1==false || flag3==false || flag4==false|| flag5==false) {
                        alert("注册失败！！!");
                    } else {
                        alert("恭喜！！！成功！！！");
                        window.location.href = "../html/login.html";
                    }
                })
            })
        }



    }
    var _regist=new regist();
    _regist.phoexe();
    _regist.pwd();
    _regist.vcode();
    _regist.vocd();
    _regist.chocke();
    _regist.zc();










})





