/**
 * Created by E560KCD on 2017/3/30.
 */



$(function () {
    //top菜单
    $.post("../json/address.json",null,function (data) {
        var _data=data;
        // console.log(_data);
        var _code="";
        for(var i=0;i<_data["address"].length;i++){
            _code+='<li><a href="javascript:;">'+_data["address"][i]+'</a> </li>';
        }
        $("#top-left-address").html(_code);
        //换地址
        $("#top-left-address a").click(function () {
            $("#address").html(this.innerHTML)
            $("#top-left-address").css("display","none");
            $(this).css({
                "background":"none",
                "border-color":"#f9f9f9"
            })
            $(".address-one").css("background","url(\"../images/img.png\")no-repeat right -303px")
        })
    })

    //地址
    $(".top-left").mouseenter(function () {
        $("#top-left-address").css("display","block");
        $(this).css({
            "background":"#fff",
            "border-color":"#e6e6e6"
        })
        $(".address-one").css("background","url(\"../images/img.png\")no-repeat right -321px")
    });
    $(".top-left").mouseleave(function () {
        $("#top-left-address").css("display","none");
        $(this).css({
            "background":"none",
            "border-color":"#f9f9f9"
        })
        $(".address-one").css("background","url(\"../images/img.png\")no-repeat right -303px")
    });

    //我的当当，企业采购，客户服务
    $(".top-right-list-li").mouseenter(function () {
        $(".top-right-list").css("display","none");
        $(this).children("div").css("display","block");

        $(this).css({
            "background":"#fff",
            "border-color":"#e6e6e6"
        })

        $(".my-dd").css({"background":"url(\"../images/img.png\")no-repeat right -307px"})
        $(this).children("a").css({
            "background":"#fff url(\"../images/img.png\")no-repeat right -325px",
            "color":"#ff2832"
        })
    })
    $(".top-right-list-li").mouseleave(function () {
        $(".top-right-list").css("display","none");
        $(this).css({
            "background":"url(\"../images/img.png\") no-repeat left -285px",
            "border-color":"#f9f9f9"
        })
        $(this).children("a").css({
            "background":"url(\"../images/img.png\")no-repeat right -307px",
            "color":"#646464"
        })
    })

    //手机当当
    $(".top-right-list-li-phone").mouseenter(function () {
        $(".top-right-list-phone").css("display","block");
        $(".phone").css("background","url(\"../images/img.png\")no-repeat -51px -70px")
        $(this).css({
            "border-color":"#e6e6e6",
            "background":"#fff"
        })
        $(this).children("a").css({
            "color":"#ff2832"
        })
    })
    $(".top-right-list-li-phone").mouseleave(function () {
        $(".top-right-list-phone").css("display","none");
        $(".phone").css("background","url(\"../images/img.png\")no-repeat -40px -70px")
        $(this).css({
            "border-color":"#f9f9f9",
            "background":"url(\"../images/img.png\") no-repeat left -285px"
        })
        $(this).children("a").css({
            "color":"#646464"
        })
    })


    function createitem() {
        var _cookie=document.cookie;
        var _uname="";
        var _gdg="";

        var _una="";
        var ggg="";
        if(_cookie.indexOf("name")>=0){
            var bbb=_cookie.split(";")[1];
            var ccc=bbb.split(",");
            ggg=ccc[1]
        }
        if(ccc[0].indexOf("name")>=0){
            _una=ccc[0].split("=")[1];

        }

        if(_cookie.indexOf("name")>=0){
            var aaa=_cookie.split(";")[0];
            var _arr=aaa.split(",");

            _gdg=_arr[1]
        }
        if(_arr[0].indexOf("name")>=0){
            _uname=_arr[0].split("=")[1];

        }
        $.post("../json/cart.json",null,function (data){
            var pos="",posl="",txt="",txtl="";
            for(var i in data[_uname]){
                pos="<ul class='shangxin'><li class='shangxin1'><input type='checkbox' class='shangxuan1 shangxuan' /></li><li class='row_img'><a href='javascript:;'><img src='"+data[_uname]["img"]+"'></a> </li><li class='row_name'><div class='name'>"+data[_uname]["name"]+"</div></li><li class='row3 pric'><span>"+data[_uname]["price"]+"</span></li><li class='fn-count-tip row3 '><div class='div4'><span class='div5 fl'><button id='jian' class='jia'>-</button><input class='ipt4' id='ipt' type='text' value='"+_gdg+"' /><button id='jia' class='jia'>+</button></span></div></li><li class='row4'><span class='red'>0</span></li><li class='row5'><a href='javascript:;' class='shanchu'>删除</a> </li></ul>"

            }

            for(var q in data[_una]){
                posl="<ul class='shangxin'><li class='shangxin1'><input type='checkbox' class='shangxuan1 shangxuan' /></li><li class='row_img'><a href='javascript:;'><img src='"+data[_una]["img"]+"'></a> </li><li class='row_name'><div class='name'>"+data[_una]["name"]+"</div></li><li class='row3 pric'><span>"+data[_una]["price"]+"</span></li><li class='fn-count-tip row3 '><div class='div4'><span class='div5 fl'><button id='jian1' class='jia'>-</button><input class='ipt4' id='ipt1' type='text' value='"+ggg+"' /><button id='jia1' class='jia'>+</button></span></div></li><li class='row4'><span class='red'>0</span></li><li class='row5'><a href='javascript:;' class='shanchu'>删除</a> </li></ul>"
            }
            txt=posl+pos

            $(".shang1").append(txt)
            jiajianyunsuan();

            var _spans = document.getElementsByClassName("shanchu");
            for(var t = 0; t < _spans.length; t++) {
                _spans[t].onclick = function() {
                    console.log(1)
                    if(window.confirm("是否删除？")) {
                        // Cookie.deleteCookie(this.Name, "/");
                        // createitem();
                        $(this).parents(".shangxin").remove()
                    }
                }
            }

            function jiajianyunsuan() {
                var oIpt = document.getElementById("ipt");
                var oJia = document.getElementById("jia");
                var oJian = document.getElementById("jian");

                oJia.onclick = function() {
                    if(oIpt.value >= 1 && oIpt.value < 20) {
                        oIpt.value++;
                    } else if(oIpt.value > 20) {
                        oIpt.value = 20;
                    } else if(oIpt.value < 1) {
                        oIpt.value = 1;
                    }
                };
                oJian.onclick = function() {
                    if(oIpt.value > 1 && oIpt.value < 20) {
                        oIpt.value--;
                    } else if(oIpt.value > 20) {
                        oIpt.value = 20;
                    } else if(oIpt.value < 1) {
                        oIpt.value = 1;
                    }
                }
                var oIpt1 = document.getElementById("ipt1");
                var oJia1 = document.getElementById("jia1");
                var oJian1 = document.getElementById("jian1");

                oJia1.onclick = function() {
                    if(oIpt1.value >= 1 && oIpt1.value < 20) {
                        oIpt1.value++;
                    } else if(oIpt1.value > 20) {
                        oIpt1.value = 20;
                    } else if(oIpt1.value < 1) {
                        oIpt1.value = 1;
                    }

                };
                oJian1.onclick = function() {
                    if(oIpt1.value > 1 && oIpt1.value < 20) {
                        oIpt1.value--;
                    } else if(oIpt1.value > 20) {
                        oIpt1.value = 20;
                    } else if(oIpt1.value < 1) {
                        oIpt1.value = 1;
                    }
                }
            }



            function eventHandle() {
                var _all = document.getElementById("all");
                var _all1 = document.getElementById("all1");
                var _boxes = document.getElementsByClassName("shangxuan");

                _all.onclick = function() {
                    for(var i = 0; i < _boxes.length; i++) {
                        if(this.checked) {
                            _boxes[i]["checked"] = true;
                            _all1["checked"] = true;

                        } else {
                            _boxes[i]["checked"] = false;
                            _all1["checked"] = false;
                        }
                    }
                }
                _all1.onclick = function() {
                    for(var j = 0; j < _boxes.length; j++) {
                        if(this.checked) {
                            _boxes[j]["checked"] = true;
                            _all["checked"] = true;
                        } else {
                            _boxes[j]["checked"] = false;
                            _all["checked"] = false;
                        }
                    }
                };
                var money="";
                for(var n = 0; n < _boxes.length; n++) {
                    _boxes[n].onclick = function() {

                        if(this.checked) {
                            var _flag = 0;
                            for(var m = 0; m < _boxes.length; m++) {
                                if(!_boxes[m].checked) {
                                    _flag = 1;
                                }
                            }
                            if(_flag == 0) {
                                _all.checked = true;
                                _all1.checked = true;
                            }
                        } else {
                            _all.checked = false;
                            _all1.checked = false;
                        }

                        if(this["checked"]){

                            $(this).parent().siblings(".row4").children(".red").html((($(this).parent().siblings(".pric").children("span").text())*($(this).parent().siblings(".fn-count-tip").children(".div4").children(".div5").children(".ipt4").val())))
                            $(".jia").click(function () {
                                $(this).parents(".fn-count-tip").siblings(".row4").children(".red").html((($(this).parents(".fn-count-tip").siblings(".pric").children("span").text())*($(this).siblings(".ipt4").val())))

                            })
                        }else {
                            $(this).parent().siblings(".row4").children(".red").html("0")
                        }
                        money=Number($(".red").text());
                        console.log(money)
                        money="";
                        // $(".zongjia").html()
                    };



                }

            }



            eventHandle()


        })
    }
    createitem();













})