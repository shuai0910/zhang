/**
 * Created by E560KCD on 2017/3/19.
 */
$(function () {
    $(".top-header").load("public.html", function () {
        $("#all").mouseenter(function () {
            $("#nav-1").css("display", "block")
        });
        $("#all").mouseleave(function () {
            $("#nav-1").css("display", "none")
        });
    })

//    放大镜

    $(".luntu").mouseenter(function () {
        $(".img").children("img").attr("src",$(this).children("img").attr("src"))
        $(".big-pic").children("img").attr("src",$(this).children("img").attr("src"))
    })
    function fangda() {
        $(".img").on("mousemove",function (e) {
            $(".zoom-pup").css("display","block");
            $(".big-pic").css("display","block");
            var x=e.pageX;
            var y=e.pageY;
            var zl=x-$(".pic-info").offset().left-($(".zoom-pup").width())/2;
            var zt=y-$(".pic-info").offset().top-($(".zoom-pup").height())/2;
            if(zl<0){
                zl=0
            }
            if(zt<0){
                zt=0
            }
            if(zl>$(".pic").width()-$(".zoom-pup").width()){
                zl=$(".pic").width()-$(".zoom-pup").width();
            }
            if(zt>$(".pic").height()-$(".zoom-pup").height()){
                zt=$(".pic").height()-$(".zoom-pup").height();
            }
            $(".zoom-pup").css({
                "left":zl,
                "top":zt
            });
            var percentX=zl/($(".pic").width()-$(".zoom-pup").width());
            var percentY=zt/($(".pic").height()-$(".zoom-pup").height());
            $(".big-pic img").css({
                "left":percentX*($(".big-pic").width()-$(".big-pic img").width()),
                "top":percentY*($(".big-pic").height()-$(".big-pic img").height())
            })
        })
        $(".img").mouseleave(function () {
            $(".zoom-pup").css("display","none");
            $(".big-pic").css("display","none");
        })


    }
    fangda()

    $(".price-ph").mouseenter(function () {
        $(".price-ph-erwei").css("display","block")
    })
    $(".price-ph").mouseleave(function () {
        $(".price-ph-erwei").css("display","none")
    });

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




    //    返回顶部
    $(".little").mouseenter(function () {
        $(".big").css("display","block")
    })
    $(".little").mouseleave(function () {
        $(".big").css("display","none")
    })

    $(window).scroll(function(){//fixed出现
        if($(this).scrollTop()>400){
            $(".fix_box_back_up").css("display","block");
        }else{
            $(".fix_box_back_up").css("display","none");
        }

    });

    $(".fix_box_back_up").click(function () {
        $("body,html").animate({scrollTop:0},300)
    })



    $.post("../json/xiangqing.json",function (data) {

        var li="";
        for(var i=0;i<data["xiang"].length;i++){
            li+="<li><p class='pic'><a href='javascript:;'><img src='"+data["xiang"][i]["pic"]+"'></a> </p><p class='price'><span class='price-d'>"+data["xiang"][i]["price"]+"</span><a href='javascript:;' class='pinglun'>"+data["xiang"][i]["pinglun"]+"</a> </p></li>"
        }
        $(".list-alsoview").append(li)
    })

//    瀑布流
//     function autolo() {
//         var i=0;
//         var me=this;
//
//         this.getdata=function () {
//             $.post("../json/xiangqing.json",function (data) {
//                 var puimg="";
//                 i++;
//                 for(var i=0;i<data["pubu"].length;i++){
//                     puimg+="<img src='"+data["pubu"][i]+"' />"
//                     $(".descrip").append(puimg);
//                 }
//             })
//         }
//
//         // this.getscrolltop=function () {
//         //     var scrotop=0;
//         //     if($(document).scrollTop()){
//         //         scrotop=$(document).scrollTop()
//         //     }
//         //     return scrotop;
//         // }
//         // this.getclient=function () {
//         //     var clienth=0;
//         //     if($(window).height())
//         // }
//
//
//         this.getscrolltop=function () {
//             var scrotop=0;
//             if (document.documentElement.scrollTop) {
//                 scrotop = document.documentElement.scrollTop;
//             } else if (document.body) {
//                 scrotop = document.body.scrollTop;
//             }
//                 return scrotop;
//         }
//         this.getclient=function () {
//             var clienth=0;
//             if (document.body.clientHeight && document.documentElement.clientHeight) {
//                 clienth = Math.min(document.body.clientHeight, document.documentElement.clientHeight)
//             } else {
//                 clienth = Math.max(document.body.clientHeight, document.documentElement.clientHeight);
//             }
//             return clienth
//         }
//         this.getscroheig=function () {
//             var getscroheig = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
//             return getscroheig;
//         }
//
//         me.getdata();
//     }


//    瀑布流

    function autolo() {
        var i=0;
        function getdata() {
            $.post("../json/xiangqing.json",function (data) {
                var puimg="";
                i++;
                for(var i=0;i<data["pubu"].length;i++){
                    puimg="<img src='"+data["pubu"][i]+"' />";

                    $(".descrip").append(puimg);
                }
                //可以再改一下，传两个参数判断加载的具体图片
            })
        }
        //获取滚动条当前的位置
        function getscrolltop() {
            var scrotop=0;
            if (document.documentElement.scrollTop) {
                scrotop = document.documentElement.scrollTop;
            } else if (document.body) {
                scrotop = document.body.scrollTop;
            }
                return scrotop;
        }
        //获取当前窗口可视范围的高度
       function getclient() {
            var clienth=0;
            if (document.body.clientHeight && document.documentElement.clientHeight) {
                clienth = Math.min(document.body.clientHeight, document.documentElement.clientHeight)
            } else {
                clienth = Math.max(document.body.clientHeight, document.documentElement.clientHeight);
            }
            return clienth
        }
        //获取文档完整高度
        function getscroheig() {
            var getscroheig = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
            return getscroheig;
        }

        getdata();

        window.onscroll=function () {
            if(getscrolltop()+getclient()==getscroheig()){
                var sum=5;
                var timer=null;
                function ajacs() {
                    if(i<5){timer=setTimeout(getdata(),500);}
                    if(i==sum){clearTimeout(timer)}
                }
                ajacs();
            }
        }
    }

    autolo();

    // $.post("../json/cart.json",function (data) {
    //     $(".a11").click(function () {
    //         for(var k in data){
    //             Cookie.setCookie(k,1,"/",new Date(new Date().getTime()+7*24*3600*1000));
    //         }
    //         console.log(Cookie.readCookie())
    //     })
    //
    //
    // })

    $(".a11").click(function () {
        document.cookie="name=dd1,"+$("#ipt").val()+";expires="+new Date(new Date().getTime()+7*24*3600000);
        window.location.href = "../html/shopping.html";
    })


});