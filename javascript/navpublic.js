/**
 * Created by E560KCD on 2017/3/19.
 */

$(function () {

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

})