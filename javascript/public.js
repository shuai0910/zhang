/**
 * Created by E560KCD on 2017/3/18.
 */

$(function () {

    //导入导航栏文档HTML
        //导航栏js文件，目前只能放在公共的文档里面才能用，分开成两个js文件就不能用。有待解决

        $.post("../json/nav.json",function (data) {
            var _code = "";//导航栏里面的span和a
            var _cod = "";//导航栏span标签
            var _aa = "";//滑过显示的大详情表的上头一排a标签
            var _top = "";//滑过显示的大详情表的上头要放进div标签
            var _left_top = "";//承载内容的盒子
            var _nav_pop = "";//承载盒子的框架
            var zong = "";//导航栏li标签
            var _left_box = "";//承载详情li标签的ul
            var _h4 = "";//承载小类目标题的标签
            var _aa2 = "";//承载小类目右面的详细的分类的a标签
            var _div2 = "";//承载小类目右面的详细的分类的div
            var _li = "";//承载小类目标题跟分类div的li
            var _li1 = "";//承载小类目标题跟分类div的li的集合
            var _ul = "";//承载小类目标题跟分类div的li的ul
            var _div3 = "";//承载ul的li
            for (var i in data) {
                //左侧导航栏
                for (var n in data[i]["dd-nav"]) {
                    _code += "<a href='javascript:;'>" + data[i]["dd-nav"][n]["dd-name"] + "</a>";
                    _cod = "<span>" + _code + "</span>";
                }
                for (var m in data[i]["dd-top"]) {
                    _aa += "<a href='javascript:;'>" + data[i]["dd-top"][m]["dd-name"] + "</a>";
                    _top = "<div class='new-pop-guan'>" + _aa + "</div>";
                }
                for (var k in data[i]["dd-left"]) {
                    _h4 = "<h4><a href='javascript:;'>" + data[i]["dd-left"][k]["dd-name"] + "</a></h4>"
                    for (var h in data[i]["dd-left"][k]["dd-right"]) {
                        _aa2 += "<a href='javascript:;'>" + data[i]["dd-left"][k]["dd-right"][h]["dd-name"] + "</a>"
                        _div2 = "<div>" + _aa2 + "</div>"
                        _li = "<li>" + _h4 + _div2 + "</li>"
                    }
                    _aa2 = ""
                    _li1 += _li
                }
                _ul = "<ul class='left'>" + _li1 + "</ul>"
                _left_top = "<div class='left-box'>" + _top + _ul + "</div>";
                _nav_pop = "<div class='nav-pop'>" + _left_top + "</div>";
                zong = "<li>" + _cod + _nav_pop + "</li>"
                $(".banner-nav").append(zong);
                _aa = "";
                _top = "";
                _code = "";
                _cod = "";
                _h4="";
                _ul="";
                _div2="";
                _li="";
                _aa2="";
                _li1="";
            }
            // for(var i=0;i<$(".banner-nav>li").length;i++){
            //     (function(i){
            //         $(".banner-nav>li").eq(i).css({
            //             "top":i*30+"px"
            //         })
            //     })(i)
            // }
            $(".banner-nav>li").mouseenter(function () {
                $(".banner-nav>li").children("div").css("display","none");
                $(this).children("div").css("display","block");
                $(this).addClass("on");
            });
            $(".banner-nav>li").mouseleave(function () {
                $(".banner-nav>li").children("div").css("display","none");
                $(this).removeClass("on");
            });
        })
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

    //搜索框
    $.post("../json/hotword.json",function (data) {
        var _data=data;
        var _code="";
        for(var i=0;i<_data["hotword"].length;i++){
            _code+='<a href="javascript:;">'+_data["hotword"][i]+'</a>';
        }
        $(".search-hot").append(_code);
    })


//    搜索数据
    $(".search-text").focus(function () {
        $(".search-key").css("display", "block")
    })
    $(".search-text").on("keyup", function () {
        var url= "https://suggest.taobao.com/sug?code=utf-8&q=" + $(this).val() + "&callback=?"
        $.getJSON(url,fn)
    })
    function fn(data) {
        $(".search-key").empty()
        for (var i in data.result) {
            $(".search-key").append($('<li>' + data.result[i][0] + '</li>'))
        }
        $(".search-key li").click(function () {
            $(".search-text").val(this.innerHTML)
            $(".search-key").css("display","none");
        })
    }
    // $(".search-key").blur(function () {
    //     $(".search-key").css("display", "none")
    // })

//    搜索框全部分类
    $.post("../json/allcategories.json",function (data) {
        var _data=data;
        var _code="";
        for(var i=0;i<_data["allcategories"].length;i++){
            _code+='<a href="javascript:;"><span>'+_data["allcategories"][i]+'</span></a>';
        }
        $(".search-all").append(_code);
        $(".search-allcategories").mouseenter(function () {
            $(".search-all").css({
                "height":"286px",
                "border-width": "1px",
                "padding":"1px"
            });
            $(".search-all a").click(function () {
                $(".allcategories").html(this.innerHTML)
                $(".search-all").css({
                    "height":"0px",
                    "border-width": "0",
                    "padding":"0px"
                });
            })
        });
    });
    $(".search-allcategories").mouseleave(function () {
        $(".search-all").css({
            "height":"0px",
            "border-width": "0",
            "padding":"0px"
        });
    });
//    一级导航栏
    $.post("../json/allcategories.json",function (data) {
        var _data=data;
        var _code="";
        for(var i=0;i<_data["nav-top"].length;i++){
            _code+='<li><a href="javascript:;">'+_data["nav-top"][i]+'</a></li>';
        }
        $("#navall1").append(_code);
    });




});