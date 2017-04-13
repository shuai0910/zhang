/**
 * Created by E560KCD on 2017/3/19.
 */
$(function () {
    //导入头部文档html
    $(".top-header").load("public.html", function () {
        $("#all").mouseenter(function () {
            $("#nav-1").css("display", "block")
        });
        $("#all").mouseleave(function () {
            $("#nav-1").css("display", "none")
        });
    });
    $.post("../json/huodong.json",function (data) {
        var span="";
        for(var i=0;i<data["pinpai"].length;i++){
            span+="<span><a href='javascript:;'>"+data["pinpai"][i]+"</a></span> "
        }
        $(".clearfix1").append(span);

        var span2="";
        for(var q=0;q<data["fenlei"].length;q++){
            span2+="<span><a href='javascript:;'>"+data["fenlei"][q]+"</a></span> "
        }
        $(".clearfix2").append(span2);


        // var li="";
        // var li1="";




        // function fenye() {
        //     for(var w in data["list"]){
        //         for(var e=0;e<data["list"][w]["lunbo"].length;e++){
        //             li1+="<li><a href='javascript:;'><img src='"+data["list"][w]["lunbo"][e]+"'></a> </li>"
        //         }
        //         li+="<li class='lun'><a href='javascript:;' class='pic'><img class='datu' src='"+data["list"][w]["pic"]+"'></a><div class='pic-list-show'><a class='btn-a btn-l'></a><a class='btn-a btn-r'></a><div class='pic-list-lunbo'><ul>"+li1+"</ul></div></div><p class='price'><span class='price-n'>"+data["list"][w]["price"]+"</span></p><p class='name'><a href='javascript:;'>"+data["list"][w]["title"]+"</a></p><p class='search-hot-word'>"+data["list"][w]["hot-word"]+"</p><p class='star'><span class='level'><span></span></span><a href='javascript:;'>"+data["list"][w]["star"]+"</a></p><p class='link'><a>"+data["list"][w]["link"]+"</a></p> </li>"
        //         li1=""
        //     }
        //     $(".bigimg").append(li);
        //     $(".pic-list-lunbo ul").each(function(){
        //         $(this).css("width",$(this)[0].children.length*45+"px");
        //         if($(this).width()<150){
        //             $(this).parent().siblings().css("display","none")
        //         }
        //     });
        //     $(".pic-list-lunbo ul li a").click(function () {
        //         // $(this).parent().parent().parent().parent().parent()
        //         $(this).parents(".lun").children(".pic").children(".datu").attr("src",$(this).children("img").attr("src"))
        //     })
        //     $(".btn-l").click(function () {
        //         $(this).siblings(".pic-list-lunbo").children("ul").css("margin-left","0px")
        //     })
        //     $(".btn-r").click(function () {
        //         $(this).siblings(".pic-list-lunbo").children("ul").css("margin-left","-180px")
        //     })
        // }
        // fenye();

        //右侧推广
        var li2="";
        for(var r in data["tui"]){
            li2+="<li><a href='javascript:;' class='pic'><img src='"+data["tui"][r]["pic"]+"'></a><p class='dat'><a href='javascript:;'>"+data["tui"][r]["title"]+"</a> </p><p class='red'>"+data["tui"][r]["red"]+"</p><p class='price-p'><span class='d-price'>"+data["tui"][r]["price"]+"</span></p> </li>"
        }
        $(".list3").append(li2);
        //下边推广
        var li3="";
        for(var t in data["shang"]){
            li3+="<li><a href='javascript:;' class='pic'><img src='"+data["shang"][t]["pic"]+"'></a><a href='javascript:;' class='name'>"+data["shang"][t]["title"]+"</a> <p class='red'>"+data["shang"][t]["hot-word"]+"</p><p class='price-p'><span class='d-price'>"+data["tui"][r]["price"]+"</span></p> </li>"
        }

        $(".hot-con-over ul").append(li3)

    });
    //分页
    function page() {
        var pos="",pos1="",txt="",txt1="";
        var _s=0,_e=60;
        var me=this;
        var _num="";
        var li="";
        var li1="";
        this.bianli=function (_x,_y,dd) {
            li="";
            $.post("../json/huodong.json",function (data) {
            for(var d=_x;d<_y;d++){
                for(var w in data["list"][d]){
                    for(var e=0;e<data["list"][d][w]["lunbo"].length;e++){
                        li1+="<li><a href='javascript:;'><img src='"+data["list"][d][w]["lunbo"][e]+"'></a> </li>"
                    }
                    li+="<li class='lun'><a href='javascript:;' class='pic'><img class='datu' src='"+data["list"][d][w]["pic"]+"'></a><div class='pic-list-show'><a class='btn-a btn-l'></a><a class='btn-a btn-r'></a><div class='pic-list-lunbo'><ul>"+li1+"</ul></div></div><p class='price'><span class='price-n'>"+data["list"][d][w]["price"]+"</span></p><p class='name'><a href='javascript:;'>"+data["list"][d][w]["title"]+"</a></p><p class='search-hot-word'>"+data["list"][d][w]["hot-word"]+"</p><p class='star'><span class='level'><span></span></span><a href='javascript:;'>"+data["list"][d][w]["star"]+"</a></p><p class='link'><a>"+data["list"][d][w]["link"]+"</a></p> </li>"
                    li1=""
                }
            }
            $(".bigimg").html(li);
            $(".pic-list-lunbo ul").each(function(){
                $(this).css("width",$(this)[0].children.length*45+"px");
                if($(this).width()<150){
                    $(this).parent().siblings().css("display","none")
                }
                });
            $(".pic-list-lunbo ul li a").click(function () {
                // $(this).parent().parent().parent().parent().parent()
                $(this).parents(".lun").children(".pic").children(".datu").attr("src",$(this).children("img").attr("src"))
            });
            $(".btn-l").click(function () {
                $(this).siblings(".pic-list-lunbo").children("ul").css("margin-left","0px")
            });
            $(".btn-r").click(function () {
                $(this).siblings(".pic-list-lunbo").children("ul").css("margin-left","-180px")
            });
            if($(dd).index()==1 && parseInt($(dd).html())-2>0){
                for(var y=0;y<$(".fenyema").length;y++){
                    $(".fenyema").eq(y).html(parseInt($(".fenyema").eq(y).html())-2)
                }
                $(".fenyema").eq(3).css({
                    "background":"red",
                    "color":"#fff"
                }).siblings().css({
                    "background":"#fff",
                    "color":"#000"
                })
            }else {
            }
            if($(dd).index()==$(".fenyema").length){

                for(var i=0;i<$(".fenyema").length;i++){
                    $(".fenyema").eq(i).html(parseInt($(".fenyema").eq(i).html())+2)
                    if(parseInt($(".fenyema").eq(i).html())>data["list"].length/60){
                        $(".fenyema").eq(i).css("display","none")
                    }
                }
            }else {
            }
            });
        };
        me.bianli(_s,_e);
        this.click=function () {
            $(".fenyema").click(function () {
                var dd=this;
                _s=parseInt($(this).html());
                me.bianli((_s-1)*60,_s*60,dd);
                $(".number").html($(this).html());
                $(".or").html($(this).html());
            })
        }
        this.prev=function () {
            $(".prev").click(function () {
                _s-=1;
                if(_s>=1&&$(".fenyema").eq(0).html()>1){
                    me.bianli((_s-1)*60,_s*60);
                    $(".number").html($(this).html());
                    $(".or").html($(this).html());
                    for (var i=0;i<$(".fenyema").length;i++){
                        $(".fenyema").eq(i).html(parseInt($(".fenyema").eq(i).html())-1)
                    }
                }else {
                    _s=1;
                }
            })
        }
        this.next=function () {
            $(".next").click(function () {
                _s+=1;
                if(_s<15 && $(".fenyema").last().html()<15){
                    me.bianli((_s-1)*5,_s*5);
                    $(".number").html($(this).html());
                    $(".or").html($(this).html());
                    for (var i=0;i<$(".fenyema").length;i++){
                        $(".fenyema").eq(i).html(parseInt($(".fenyema").eq(i).html())+1)
                    }
                }else {
                    _s=15;
                }
            })
        }
        this.up=function () {
            if($(this).index()==$(".fenyema").length-1){
                for (var i=0;i<$(".fenyema").length;i++){
                    $(".fenyema").eq(i).html(parseInt($(".fenyema").eq(i).html())+1)
                }
            }
        }
    }
    var _page=new page();
    _page.click();
    _page.prev();
    _page.next();


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
});