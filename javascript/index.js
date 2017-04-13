/**
 * Created by E560KCD on 2017/3/15.
 */

$(function () {
    //吸顶
    // $(window).scroll(function(){//fixed出现
    //     if($(this).scrollTop()>($("header").outerHeight(true)+$("#top").outerHeight(true)+$("#search").outerHeight(true)+$("#nav").outerHeight(true))){
    //         $("#fixed").fadeIn();//渐显
    //     }else{
    //         $("#fixed").fadeOut();
    //     }
    // });
    $(window).scroll(function(){//fixed出现
        if($(this).scrollTop()>660){
            $(".search-top").fadeIn();//渐显
        }else{
            $(".search-top").fadeOut();
        }
    });
    //导入头部文档html
    $(".top-header").load("public.html");
    //导入导航栏文档HTML
    // $(".con").load("navpublic.html")
    //首页轮播图
    $.post("../json/banner.json",function (data) {

        var _ban_big_li="";//承载轮播图大图的li
        var _ban_big_li1="";//承载轮播图大图的li集合
        var _tab_big_li="";//承载轮播图下标的li
        var _tab_big_li1="";//承载轮播图下标的li集合
        var _ban_small_li="";//承载轮播图小图的li
        var _ban_small_ul="";//承载轮播图小图集合的ul
        var _ban_small_uls="";//承载轮播图小图集合ul的集合
        var _ban_small_ulss="";//承载轮播图小图集合ul集合的集合


        //轮播图大图
        for(var n in data["big"]){
            _ban_big_li="<li><a href='javasnript:;'><img src='"+data["big"][n]+"'></a></li> ";
            _ban_big_li1+=_ban_big_li;
        }
        //轮播图大图下边的数标
        for(var i in data["tab"]){
            _tab_big_li="<li>"+data["tab"][i]+"</li> ";
            _tab_big_li1+=_tab_big_li;
        }
        //轮播图小图
        for(var k in data["small"]){
            for(var m in data["small"][k]){
                _ban_small_li="<li><a href='javasnript:;'><img src='"+data["small"][k][m]+"'><span class='cover'></span></a></li> ";
                _ban_small_ul+=_ban_small_li;
            }
            _ban_small_uls+="<ul>"+_ban_small_ul+"</ul>";
            _ban_small_ul="";
        }
        _ban_small_ulss+=_ban_small_uls;
        $(".pic").append(_ban_big_li1);
        $(".tab").append(_tab_big_li1);
        $(".tab li:first-child").addClass("on")
        $(".ban-sm-box").append(_ban_small_uls);

    //    banner轮播图动态
    //    鼠标滑过两套箭头滑出
        var _timer=0;
        var num=1;
        var _num=1;
        $(".banner-banner").mouseenter(function () {
            clearTimeout(_timer)
        });
        $(".banner-banner").mouseleave(function () {
            setTimeout(main,200)
        });
        //大轮播图的左右按钮滑过显示
        $(".banner-big").mouseenter(function () {
            $(".banner-big .btn-l").stop().animate({
                "left":"0px"
            },"linner");
            $(".banner-big .btn-r").stop().animate({
                "right":"0px"
            },"linner")
        });
        $(".banner-big").mouseleave(function () {
            $(".banner-big .btn-l").stop().animate({
                "left":"-46px"
            },"linner");
            $(".banner-big .btn-r").stop().animate({
                "right":"-46px"
            },"linner")
        });
        //小轮播图的左右按钮滑过显示
        $(".banner-small").mouseenter(function () {
            $(".banner-small .btn-l").stop().animate({
                "left":"0px"
            },"linner");
            $(".banner-small .btn-r").stop().animate({
                "right":"0px"
            },"linner")
        });
        $(".banner-small").mouseleave(function () {
            $(".banner-small .btn-l").stop().animate({
                "left":"-46px"
            },"linner");
            $(".banner-small .btn-r").stop().animate({
                "right":"-46px"
            },"linner")
        });
        //滑过左右箭头num-1
        $(".banner-banner .btn").mouseenter(function (){
            num--;
            _num--;
        });
        //大轮播图按钮左右箭头点击事件
        $(".banner-big .btn-l").click(function () {
            $(".pic li").css("opacity","0");
            $(".ban-sm-box ul").css({"opacity":"0","z-index":"0"});
            num--;
            _num--;
            if (num<0){
                num=7;
            }
            $(".tab li").removeClass("on");
            $(".tab li").eq(num).addClass("on");
            $(".pic li").eq(num).fadeTo("600",1)
            if (_num<0){
                _num=3;
            }
            $(".ban-sm-box ul").eq(_num).fadeTo("600",1).css("z-index","9");
        });
        $(".banner-big .btn-r").click(function () {
            $(".pic li").css("opacity","0");
            $(".ban-sm-box ul").css({"opacity":"0","z-index":"0"});
            num++;
            _num++;
            console.log(_num)
            if (num>7){
                num=0;
            }
            $(".tab li").removeClass("on");
            $(".tab li").eq(num).addClass("on");
            $(".pic li").eq(num).fadeTo("600",1)
            if (_num>3){
                _num=0;
            }
            $(".ban-sm-box ul").eq(_num).fadeTo("600",1).css("z-index","9");

        });
        //小轮播图的按钮的点击事件
        $(".banner-small .btn-l").click(function () {
            $(".pic li").css("opacity","0");
            $(".ban-sm-box ul").css({"opacity":"0","z-index":"0"});
            num--;
            _num--;
            if (num<0){
                num=7;
            }
            $(".tab li").removeClass("on");
            $(".tab li").eq(num).addClass("on");
            $(".pic li").eq(num).fadeTo("600",1)
            if (_num<0){
                _num=3;
            }
            $(".ban-sm-box ul").eq(_num).fadeTo("600",1).css("z-index","9");
        });
        $(".banner-small .btn-r").click(function () {
            $(".pic li").css("opacity","0");
            $(".ban-sm-box ul").css({"opacity":"0","z-index":"0"});
            num++;
            _num++;
            if (num>7){
                num=0;
                // $(".pic li:first-child").fadeTo("600",1)
            }
            $(".tab li").removeClass("on");
            $(".tab li").eq(num).addClass("on");
            $(".pic li").eq(num).fadeTo("600",1)
            if (_num>3){
                _num=0;
                // $(".ban-sm-box ul:first-child").fadeTo("600",1).css("z-index","9")
            }
            $(".ban-sm-box ul").eq(_num).fadeTo("600",1).css("z-index","9");

        });
    //    鼠标滑过下边的小图标
        $(".tab li").mouseenter(function () {
            clearTimeout(_timer)
            num=(this.innerHTML-1);
            if(num<4){
                _num=num;
            }else if(num==4){
                _num=0;
            }else if(num==5){
                _num=1;
            }else if(num==6){
                _num=2;
            }else if(num==7){
                _num=3;
            }
            $(".pic li").css("opacity","0");
            $(".ban-sm-box ul").css({"opacity":"0","z-index":"0"});
            $(".pic li").eq(num).fadeTo("600",1);
            $(".ban-sm-box ul").eq(_num).fadeTo("600",1).css("z-index","9");
            $(".tab li").removeClass("on");
            $(this).addClass("on")
        });
    //    自动轮播
        function main() {
            _timer=setTimeout(function (){
                clearTimeout(_timer);
                $(".pic li").css("opacity","0");
                $(".ban-sm-box ul").css({"opacity":"0","z-index":"0"});
                $(".pic li").eq(num).fadeTo("600",1)
                if (num<8){
                    num++;
                }else {
                    num=1;
                    $(".pic li:first-child").fadeTo("600",1)
                }
                //小图标跟着num变化
                $(".tab li").removeClass("on");
                $(".tab li").eq(num-1).addClass("on");


                $(".ban-sm-box ul").eq(_num).fadeTo("600",1).css("z-index","9");
                if (_num<4){
                    _num++;
                }else {
                    _num=1;
                    $(".ban-sm-box ul:first-child").fadeTo("600",1).css("z-index","9")
                }
                setTimeout(main,200)
            },2000);
        }
        main();
    });
    //首页轮播图右侧
    $(".ban-r-z-ul>li:first-child").addClass("on");
    $(".ban-r-z-ul>li:first-child>div").css("display","block");
    $(".ban-r-z-ul>li").mouseenter(function () {
        $(".ban-r-z-ul>li").removeClass("on")
        $(this).addClass("on")
        $(".ban-r-z-ul li>div").css("display","none")
        $(this).children("div").css("display","block")
    });

    $(".ban-r-xia-ul>li:first-child").addClass("on");
    $(".ban-r-xia-ul>li:first-child>div").css("display","block");
    $(".ban-r-xia-ul>li").mouseenter(function () {
        $(".ban-r-xia-ul>li").removeClass("on")
        $(this).addClass("on")
        $(".ban-r-xia-ul li>div").css("display","none")
        $(this).children("div").css("display","block")
    });
    //    秒杀和厂商周
    //倒计时抢购
    time();
    setInterval(time,1000);
    var t=0;
    function time(){
        var oEndtime = new Date("2017/4/1 8:47:10");//结束时间
        var oStarttime = new Date();//开始时间
        var time = oEndtime.getTime()-oStarttime.getTime()+(3600*1000*2*t);
        if(time<1000){
            t++;
            // return;
        }
        var hour = (Math.floor(time/1000/60/60));
        var min = (Math.floor(time/1000/60%60));
        var sec = (Math.floor(time/1000%60));
        function twoTo( n ){
            if( n<10 ){
                n = "0"+ n ;
            }
            return n;
        }
        $(".h").html(twoTo(hour));
        $(".m").html(twoTo(min));
        $(".s").html(twoTo(sec));
    }
//    秒杀产品
    $.post("../json/miaosha.json",function (data) {
        var m_info="";//承载产品的div
        var m_a_img="";//承载图片的a标签
        var m_line="";//承载line的div
        var m_num="";//承载秒杀数字的div
        var m_name="";//承载name的div
        var m_price="";//承载价格的div
        var m_zong="";//承载所有标签的载体
        var m_li="";//承载厂商周的li标签
        var firm_box="";//承载li的集合
        for(var i in data["miaosha"]){
            m_a_img="<a href='javascript:;' class='a-img' title='"+data["miaosha"][i]["d-title"]+"'><img src='"+data["miaosha"][i]["d-img"]+"'></a>"
            m_line="<div class='m-line'><span class='shu'></span><span class='num-bg'></span></div>"
            m_num="<div class='num'>已秒杀24%</div>"
            m_name="<div class='name'><a href='javascript:;'>"+data["miaosha"][i]["d-name"]+"</a> </div>"
            m_price="<div class='price'>秒杀价：￥<span>69</span><span class='del'>109</span></div>"
            m_zong+="<div class='m-info'>"+m_a_img+m_line+m_num+m_name+m_price+"</div>"
        }
        m_info+=m_zong;
        $(".m-list").append(m_info);

        for(var n=0;n<data["firm-week"].length;n++){
            m_li="<li><a href='javascript:;'><img src='"+data["firm-week"][n]+"'></a></li> "
            firm_box+=m_li
        }
        $(".firm-box").append(firm_box);



        //尾品汇
        var w_left_a="";//承载img的a标签
        var w_con_left="";//承载左侧的集合
        var w_con_logo="";//承载logo的集合
        var w_right_top="";//承载右侧上边的集合
        var w_right_top_a="";//承载右侧上边的a标签集合
        var w_right_foot_a="";//承载右侧下边的a标签集合



        w_left_a="<a href='javascript:;'><img src='"+data["w-con-left"][0]+"'></a> ";
        for(var k=0;k<data["w-con-logo"].length;k++){
            w_con_logo+="<a href='javascript:;'><img src='"+data["w-con-logo"][k]+"'></a> ";
        }
        w_con_left=w_left_a+"<div class='w-con-logo'>"+w_con_logo+"</div>";
        $(".w-con-left").append(w_con_left);

        for(var m=0;m<data["w-con-r-top"].length;m++){
            w_right_top_a+="<a href='javascript:;'><img src='"+data["w-con-r-top"][m]+"'></a> ";
        }
        $(".w-con-r-top").append(w_right_top_a);
        for(var h=0;h<data["w-con-r-foot"].length;h++){
            w_right_foot_a+="<a href='javascript:;'><img src='"+data["w-con-r-foot"][h]+"'></a> ";
        }
        $(".w-con-r-foot").append(w_right_foot_a);

    //    当当优选
        var d_title="";//承载小标题的a
        var d_list_a="";//承载内容的a标签
        var d_list_ul="";//承载li的ul标签
        var d_head="";
        d_title="<a href='javascript:;' class='dd-brand-head-title'>"+data["dd-brand-head-title"][0]+"</a> ";
        for(var d=0;d<data["list-aa"].length;d++){
            d_list_a+="<li><a href='javascript:;'>"+data["list-aa"][d]+"<span class='hot'>"+data["hot"][d]+"</span></a></li> ";
        }
        d_list_ul="<ul class='list-aa'>"+d_list_a+"</ul>";
        d_head=d_title+d_list_ul;
        $(".dd-brand-head").append(d_head)

        var dd_left_a="";//承载左侧图片的a标签
        var dd_right_a="";//承载右侧图片的a标签
        var dd_zhong_a="";//承载中间图片的a标签
        dd_zhong_a="<a href='javascript:;'><img src='"+data["dd-brand-con-z"][0]+"'></a> ";
        for(var s=0;s<data["dd-brand-con-l"].length;s++){
            dd_left_a+="<a href='javascript:;'><img src='"+data["dd-brand-con-l"][s]+"'></a> ";
        }
        for(var t=0;t<data["dd-brand-con-r"].length;t++){
            dd_right_a+="<a href='javascript:;'><img src='"+data["dd-brand-con-r"][t]+"'></a> ";
        }
        $(".dd-brand-con-l").append(dd_left_a);
        $(".dd-brand-con-z").append(dd_zhong_a);
        $(".dd-brand-con-r").append(dd_right_a);
//    图书电子书

        //分类
        var book_con_aa="";
        for(var r=0;r<data["book-con-ul"].length;r++){
            book_con_aa+="<li><a href='javascript:;'>"+data["book-con-ul"][r]+"</a></li> ";
        }
        $(".book-con-ul").append(book_con_aa);
        var book_right="";
        var book_right_1="";
        var book_right_2="";
        for(var o in data["book-right"]){
            for(var q=0;q<data["book-right"]["d1"].length;q++){
                book_right_1="<ul class='book-right-list'><li><a href='javascript:;' class='img'><img src='"+data["book-right"]["d1"][0]+"'></a><p class='book-name'><a href='javascript:;'>"+data["book-right"]["d1"][1]+"</a></p><p class='book-price'><span class='rob'>"+data["book-right"]["d1"][2]+"</span><span class='price-r'>"+data["book-right"]["d1"][3]+"</span></p></li></ul> ";
            }
            for(var p=0;p<data["book-right"]["d2"].length;p++){
                book_right_2="<ul class='book-right-list'><li><a href='javascript:;' class='img'><img src='"+data["book-right"]["d2"][0]+"'></a><p class='book-name'><a href='javascript:;'>"+data["book-right"]["d2"][1]+"</a></p><p class='book-price'><span class='rob'>"+data["book-right"]["d1"][2]+"</span><span class='price-r'>"+data["book-right"]["d1"][3]+"</span></p></li></ul> ";
            }
        }
        book_right=book_right_1+book_right_2;
        $(".book-right").append(book_right);
        var book_con_foot="";
        var book_foot_ul1="";
        var book_foot_ul2="";
        var book_foot_ul3="";
        var book_foot_ul4="";

        for(var a in data["book-con-foot"]){
            for(var z=0;z<data["book-con-foot"]["d1"].length;z++){
                book_foot_ul1="<ul class='book-foot-ul'><li><a href='javascript:;' class='img'><img src='"+data["book-con-foot"]["d1"][0]+"'></a><p class='book-name'><a href='javascript:;'>"+data["book-con-foot"]["d1"][1]+"</a></p><p class='book-price'><span class='rob'>"+data["book-con-foot"]["d1"][2]+"</span><span class='price-r'>"+data["book-con-foot"]["d1"][3]+"</span></p></li></ul> ";
            }
            for(var c=0;c<data["book-con-foot"]["d2"].length;c++){
                book_foot_ul2="<ul class='book-foot-ul'><li><a href='javascript:;' class='img'><img src='"+data["book-con-foot"]["d2"][0]+"'></a><p class='book-name'><a href='javascript:;'>"+data["book-con-foot"]["d2"][1]+"</a></p><p class='book-price'><span class='rob'>"+data["book-con-foot"]["d2"][2]+"</span><span class='price-r'>"+data["book-con-foot"]["d2"][3]+"</span></p></li></ul> ";
            }
            for(var b=0;b<data["book-con-foot"]["d3"].length;b++){
                book_foot_ul3="<ul class='book-foot-ul'><li><a href='javascript:;' class='img'><img src='"+data["book-con-foot"]["d3"][0]+"'></a><p class='book-name'><a href='javascript:;'>"+data["book-con-foot"]["d3"][1]+"</a></p><p class='book-price'><span class='rob'>"+data["book-con-foot"]["d3"][2]+"</span><span class='price-r'>"+data["book-con-foot"]["d3"][3]+"</span></p></li></ul> ";
            }
            for(var x=0;x<data["book-con-foot"]["d4"].length;x++){
                book_foot_ul4="<ul class='book-foot-ul'><li><a href='javascript:;' class='img'><img src='"+data["book-con-foot"]["d4"][0]+"'></a><p class='book-name'><a href='javascript:;'>"+data["book-con-foot"]["d4"][1]+"</a></p><p class='book-price'><span class='rob'>"+data["book-con-foot"]["d4"][2]+"</span><span class='price-r'>"+data["book-con-foot"]["d4"][3]+"</span></p></li></ul> ";
            }
        }
        book_con_foot=book_foot_ul1+book_foot_ul2+book_foot_ul3+book_foot_ul4;
        $(".book-con-foot").append(book_con_foot);

    //    图书电子书轮播图
        var over_li="";
        var over_ul="";
        for(var l=0;l<data["over"].length;l++){
            over_li+="<li><img src='"+data["over"][l]+"'></li> ";
        }

        over_ul="<ul class='over-ul' id='over-ul'>"+over_li+"</ul>";
        $("#over").append(over_ul);

        var over2_li="";
        var over2_ul="";
        for(var v=0;v<data["over2"].length;v++){
            over2_li+="<li><img src='"+data["over2"][v]+"'></li> ";
        }

        over2_ul="<ul class='over-ul' id='over2-ul'>"+over2_li+"</ul>";
        $("#over2").append(over2_ul);

        var over3_li="";
        var over3_ul="";
        for(var f=0;f<data["over3"].length;f++){
            over3_li+="<li><img src='"+data["over3"][f]+"'></li> ";
        }

        over3_ul="<ul class='over-ul' id='over3-ul'>"+over3_li+"</ul>";
        $("#over3").append(over3_ul);

        var over4_li="";
        var over4_ul="";
        for(var e=0;e<data["over4"].length;e++){
            over4_li+="<li><img src='"+data["over4"][e]+"'></li> ";
        }

        over4_ul="<ul class='over-ul' id='over4-ul'>"+over4_li+"</ul>";
        $("#over4").append(over4_ul);


        // $(".over ul li:nth-of-type(0)").addClass("li0");
        // $(".over ul li:nth-of-type(1)").addClass("li1");
        // $(".over ul li:nth-of-type(2)").addClass("li2");
        // $(".over ul li:nth-of-type(3)").addClass("li3");

        var _time=0;
        var _allow=0;
        var _all=0;
        var _num=0;
        var g=0;
        function main() {
            if(_allow==1 || _all==0) {
                var first = $('#over-ul li:first-child');
                $("#over-ul").stop().animate({"left": "-335px"}, 600, function () {
                    $("#over-ul").append(first);
                    $("#over-ul").css("left", "0px");
                    _allow=0;
                    if(g<3){
                        g++;
                    }else {
                        g=0;
                    }
                    $(".book-con-list li").removeClass("current");
                    $(".book-con-list li").eq(g).addClass("current");
                });
            }
        }
        $(".box-con-right").click(function () {
            if(_allow==0) {
                _allow=1;
                main();
            }
        });
        $(".box-con-left").stop().click(function () {
            // var last=$('.over-ul li:last-child');
            $("#over-ul").css({"left":"-335px"});
            $("#over-ul li:last-child").prependTo($("#over-ul"));
            $("#over-ul").animate({"left":"0px"},600);
        });

        $(".book-con-list li:first-child").addClass("current")
        $(".book-con-list li").click(function () {
            $(".book-con-list li").removeClass("current");
            $(this).addClass("current");
            var i=$(this).index();
            // var lil="li"+i+""
            //bao liu
            // var aa = $(".lil");
            // console.log(aa)
            $("#over-ul").stop().animate({"left": -i*335+"px"}, 600, function () {
                // $("#over-ul").append(aa);
            });
        });
        //自动轮播
        _time=setInterval(main,3000);
        $(".book-con-zl1").mouseenter(function () {
            clearInterval(_time)
        });
        $(".book-con-zl1").mouseleave(function () {
            setInterval(main,3000)
        });
        var _time2=0;
        var _allow2=0;
        var _all2=0;
        function main2() {
            if(_allow2==1 || _all2==0) {
                var first = $('#over2-ul li:first-child');
                $("#over2-ul").stop().animate({"left": "-335px"}, 600, function () {
                    $("#over2-ul").append(first);
                    $("#over2-ul").css("left", "0px");
                    _allow2=0;
                });
            }
        }
        $(".box-con-right").click(function () {
            if(_allow2==0) {
                _allow2=1;
                main2();
            }
        });
        $(".box-con-left").stop().click(function () {
            // var last=$('.over-ul li:last-child');
            $("#over2-ul").css({"left":"-335px"});
            $("#over2-ul li:last-child").prependTo($("#over2-ul"));
            $("#over2-ul").animate({"left":"0px"},600);
        });
        //自动轮播
        _time2=setInterval(main2,2000);
        $(".book-con-zl2").mouseenter(function () {
            clearInterval(_time2)
        });
        $(".book-con-zl2").mouseleave(function () {
            setInterval(main2,2000)
        });
        var _time3=0;
        var _allow3=0;
        var _all3=0;
        function main3() {
            if(_allow3==1 || _all3==0) {
                var first = $('#over3-ul li:first-child');
                $("#over3-ul").stop().animate({"left": "-335px"}, 600, function () {
                    $("#over3-ul").append(first);
                    $("#over3-ul").css("left", "0px");
                    _allow3=0;
                });
            }
        }
        $(".box-con-right").click(function () {
            if(_allow3==0) {
                _allow3=1;
                main3();
            }
        });
        $(".box-con-left").stop().click(function () {
            // var last=$('.over-ul li:last-child');
            $("#over3-ul").css({"left":"-335px"});
            $("#over3-ul li:last-child").prependTo($("#over3-ul"));
            $("#over3-ul").animate({"left":"0px"},600);
        });
        //自动轮播
        _time3=setInterval(main3,2000);
        $(".book-con-zl3").mouseenter(function () {
            clearInterval(_time3)
        });
        $(".book-con-zl3").mouseleave(function () {
            setInterval(main3,2000)
        });
        var _time4=0;
        var _allow4=0;
        var _all4=0;
        function main4() {
            if(_allow4==1 || _all4==0) {
                var first = $('#over4-ul li:first-child');
                $("#over4-ul").stop().animate({"left": "-335px"}, 600, function () {
                    $("#over4-ul").append(first);
                    $("#over4-ul").css("left", "0px");
                    _allow4=0;
                });
            }
        }
        $(".box-con-right").click(function () {
            if(_allow4==0) {
                _allow4=1;
                main4();
            }
        });
        $(".box-con-left").stop().click(function () {
            $("#over4-ul").css({"left":"-335px"});
            $("#over4-ul li:last-child").prependTo($("#over4-ul"));
            $("#over4-ul").animate({"left":"0px"},600);
        });
        //自动轮播
        _time4=setInterval(main4,2000);
        $(".book-con-zl4").mouseenter(function () {
            clearInterval(_time4)
        });
        $(".book-con-zl4").mouseleave(function () {
            setInterval(main4,2000)
        });
        var book_aa="";
        for(var w=0;w<data["book-top"].length;w++){
            book_aa+="<li><span>"+data["book-top"][w]+"</span></li> ";
        }
        $(".book-tab-aa").append(book_aa);
        $(".book-tab-aa li:first-child").addClass("on");
        $(".book-tab>div").eq(0).css("display","block");
        $(".book-tab-aa li").mouseenter(function () {
            $(".book-tab-aa li").removeClass("on");
            $(".book-tab>div").css("display","none");
            var i=$(this).index();
            $(".book-tab>div").eq(i).css("display","block");
            $(this).addClass("on")
        })
    });
//    排行榜
    $.post("../json/paihang.json",function (data) {
        var li="";
        var ul="";
        for (var i in data["chang"]){
            li+="<li><div class='num-num'><span class='num'>"+data["chang"][i]["num"]+"</span><p class='name'><a>"+data["chang"][i]["name"]+"</a></p></div><div class='item'><span class='num'>"+data["chang"][i]["num1"]+"</span><a href='javascript:;' class='img'><img src='"+data["chang"][i]["img"]+"'></a><p class='name'><a href='javascript:;'>"+data["chang"][i]["p-name"]+"<span>"+data["chang"][i]["p-nei"]+"</span></a></div></li>";
        }
        for (var n in data["xin"]){
            ul+="<li><div class='num-num'><span class='num'>"+data["xin"][n]["num"]+"</span><p class='name'><a>"+data["xin"][n]["name"]+"</a></p></div><div class='item'><span class='num'>"+data["xin"][n]["num1"]+"</span><a href='javascript:;' class='img'><img src='"+data["xin"][n]["img"]+"'></a><p class='name'><a href='javascript:;'>"+data["xin"][n]["p-name"]+"<span>"+data["xin"][n]["p-nei"]+"</span></a></div></li>";
        }
        $("#teb1").append(li)
        $("#teb2").append(ul)
        $(".teb-book1 li>div").eq(0).addClass("hidden");
        $(".teb-book2 li>div").eq(0).addClass("hidden");
        $(".teb-book1 .item").css("display","none");
        $(".teb-book2 .item").css("display","none");
        $(".teb-book1 .item").eq(0).css("display","list-item");
        $(".teb-book2 .item").eq(0).css("display","list-item");
        $(".teb-aa li:first-child").addClass("on");
        $(".book-teb-top ul").addClass("hidde");
        $(".book-teb-top ul:first-child").removeClass("hidde");
        $(".teb-aa li").mouseenter(function () {
            $(".teb-aa li").removeClass("on");
            $(this).addClass("on");
            var i=$(this).index();
            $(".book-teb-top ul").addClass("hidde");
            $(".book-teb-top ul").eq(i).removeClass("hidde");

        });
        $(".teb-book1 li").mouseenter(function () {
            $(".teb-book1 .item").css("display","none");
            $(".teb-book1 li>div").removeClass("hidden");
            $(this).children(".num-num").addClass("hidden");
            $(this).children(".item").css("display","list-item")
        });
        $(".teb-book2 li").mouseenter(function () {
            $(".teb-book2 .item").css("display","none");
            $(".teb-book2 li>div").removeClass("hidden");
            $(this).children(".num-num").addClass("hidden");
            $(this).children(".item").css("display","list-item")
        });
        var fz_aa="";
        for (var m=0;m<data["fz"].length;m++){
            fz_aa+="<li><a href='javascript:;'>"+data["fz"][m]+"</a></li> "
        }
        $(".tall-cloth-left").append(fz_aa);





        // var _time5=0;
        // var _allow5=0;
        // var _all5=0;
        // function main5() {
        //     if(_allow5==1 || _all5==0) {
        //         var first = $('.tall-over1 ul li:first-child');
        //         $(".tall-over1 ul").stop().animate({"left": "-383px"}, 600, function () {
        //             $(".tall-over1 ul").append(first);
        //             $(".tall-over1 ul").css("left", "0px");
        //             _allow5=0;
        //         });
        //     }
        // }
        // $(".tall-con-right").click(function () {
        //     if(_allow5==0) {
        //         _allow5=1;
        //         main5();
        //     }
        // });
        // $(".tall-con-left").stop().click(function () {
        //     $(".tall-over1 ul").css({"left":"-383px"});
        //     $(".tall-over1 ul li:last-child").prependTo($(".tall-over1 ul"));
        //     $(".tall-over1 ul").animate({"left":"0px"},600);
        // });
        // // 自动轮播
        // _time5=setInterval(main5,2000);
        // $(".tall-con1").mouseenter(function () {
        //     clearInterval(_time5);
        //     $(".tall-btn").css("display","block");
        // });
        // $(".tall-con1").mouseleave(function () {
        //     setInterval(main5,2000)
        //     $(".tall-btn").css("display","none");
        // });

        // var _time6=0;
        // var _allow6=0;
        // var _all6=0;
        // function main6() {
        //     if(_allow6==1 || _all6==0) {
        //         var first = $('.tall-over2 ul li:first-child');
        //         $(".tall-over2 ul").stop().animate({"left": "-383px"}, 600, function () {
        //             $(".tall-over2 ul").append(first);
        //             $(".tall-over2 ul").css("left", "0px");
        //             _allow6=0;
        //         });
        //     }
        // }
        // $(".tall-con-right").click(function () {
        //     if(_allow6==0) {
        //         _allow6=1;
        //         main6();
        //     }
        // });
        // $(".tall-con-left").stop().click(function () {
        //     // var last=$('.over-ul li:last-child');
        //     $(".tall-over2 ul").css({"left":"-383px"});
        //     $(".tall-over2 ul li:last-child").prependTo($(".tall-over2 ul"));
        //     $(".tall-over2 ul").animate({"left":"0px"},600);
        // });
        //
        // 自动轮播
        // _time6=setInterval(main6,2000);
        // $(".tall-con").mouseenter(function () {
        //
        //     clearInterval(_time6)
        //     $(".tall-btn").css("display","block");
        // });
        // $(".tall-con").mouseleave(function () {
        //
        //     setInterval(main6,2000)
        //     $(".tall-btn").css("display","none");
        // });
        //
        //
        //
        // var _time7=0;
        // var _allow7=0;
        // var _all7=0;
        // function main7() {
        //     if(_allow7==1 || _all7==0) {
        //         var first = $('.tall-over3 ul li:first-child');
        //         $(".tall-over3 ul").stop().animate({"left": "-383px"}, 600, function () {
        //             $(".tall-over3 ul").append(first);
        //             $(".tall-over3 ul").css("left", "0px");
        //             _allow6=0;
        //         });
        //     }
        // }
        // $(".tall-con-right").click(function () {
        //     if(_allow7==0) {
        //         _allow7=1;
        //         main7();
        //     }
        // });
        // $(".tall-con-left").stop().click(function () {
        //     // var last=$('.over-ul li:last-child');
        //     $(".tall-over3 ul").css({"left":"-383px"});
        //     $(".tall-over3 ul li:last-child").prependTo($(".tall-over3 ul"));
        //     $(".tall-over3 ul").animate({"left":"0px"},600);
        // });
        //
        // 自动轮播
        // _time7=setInterval(main7,2000);
        // $(".tall-con").mouseenter(function () {
        //
        //     clearInterval(_time7)
        //     $(".tall-btn").css("display","block");
        // });
        // $(".tall-con").mouseleave(function () {
        //
        //     setInterval(main7,2000)
        //     $(".tall-btn").css("display","none");
        // });
        //
        //
        //
        // var _time8=0;
        // var _allow8=0;
        // var _all8=0;
        // function main8() {
        //     if(_allow8==1 || _all8==0) {
        //         var first = $('.tall-over4 ul li:first-child');
        //         $(".tall-over4 ul").stop().animate({"left": "-383px"}, 600, function () {
        //             $(".tall-over4 ul").append(first);
        //             $(".tall-over4 ul").css("left", "0px");
        //             _allow6=0;
        //         });
        //     }
        // }
        // $(".tall-con-right").click(function () {
        //     if(_allow8==0) {
        //         _allow8=1;
        //         main8();
        //     }
        // });
        // $(".tall-con-left").stop().click(function () {
        //     // var last=$('.over-ul li:last-child');
        //     $(".tall-over4 ul").css({"left":"-383px"});
        //     $(".tall-over4 ul li:last-child").prependTo($(".tall-over4 ul"));
        //     $(".tall-over4 ul").animate({"left":"0px"},600);
        // });
        //
        // 自动轮播
        // _time8=setInterval(main8,2000);
        // $(".tall-con").mouseenter(function () {
        //
        //     clearInterval(_time8)
        //     $(".tall-btn").css("display","block");
        // });
        // $(".tall-con").mouseleave(function () {
        //
        //     setInterval(main8,2000)
        //     $(".tall-btn").css("display","none");
        // });
        //
        //
        // var _time9=0;
        // var _allow9=0;
        // var _all9=0;
        // function main9() {
        //     if(_allow9==1 || _all9==0) {
        //         var first = $('.tall-over5 ul li:first-child');
        //         $(".tall-over5 ul").stop().animate({"left": "-383px"}, 600, function () {
        //             $(".tall-over5 ul").append(first);
        //             $(".tall-over5 ul").css("left", "0px");
        //             _allow9=0;
        //         });
        //     }
        // }
        // $(".tall-con-right").click(function () {
        //     if(_allow9==0) {
        //         _allow9=1;
        //         main9();
        //     }
        // });
        // $(".tall-con-left").stop().click(function () {
        //     // var last=$('.over-ul li:last-child');
        //     $(".tall-over5 ul").css({"left":"-383px"});
        //     $(".tall-over5 ul li:last-child").prependTo($(".tall-over5 ul"));
        //     $(".tall-over5 ul").animate({"left":"0px"},600);
        // });
        //
        // 自动轮播
        // _time9=setInterval(main9,2000);
        // $(".tall-con").mouseenter(function () {
        //
        //     clearInterval(_time9)
        //     $(".tall-btn").css("display","block");
        // });
        // $(".tall-con").mouseleave(function () {
        //
        //     setInterval(main9,2000)
        //     $(".tall-btn").css("display","none");
        // });



        $(".tall-head ul li:first-child").addClass("on");
        $(".tall-lunbo1>div").css("display","none");
        $(".tall-lunbo1>div:first-child").css("display","block");
        $(".tall-head ul li").mouseenter(function () {
            $(".tall-head ul li").removeClass("on");
            $(this).addClass("on");
            $(".tall-lunbo1>div").css("display","none");
            var i=$(this).index();
            $(".tall-lunbo1>div").eq(i).css("display","block");

        })



        //运动器械
        $(".tall-head2 ul li:first-child").addClass("on");
        $(".tall-lunbo2>div").css("display","none");
        $(".tall-lunbo2>div:first-child").css("display","block");
        $(".tall-head2 ul li").mouseenter(function () {
            $(".tall-head2 ul li").removeClass("on");
            $(this).addClass("on");
            $(".tall-lunbo2>div").css("display","none");
            var i=$(this).index();
            $(".tall-lunbo2>div").eq(i).css("display","block");
        });
        //    猜你喜欢
        var x_img="";
        var x_name="";
        for(var k in data["cai"]){
            x_img+="<li><a href='javascript:;' class='cai-img'><img src='"+data["cai"][k]["d-img"]+"'></a><p class='name'><a href='javascript:;'> "+data["cai"][k]["d-name"]+"</a></p><p class='price'>"+data["cai"][k]["d-price"]+"</p> </li>"
        }
        x_name="<ul>"+x_img+"</ul>"
        $(".cai-con").append(x_name);
    })


//    右侧广告
    $(".sidebar-top a").mouseenter(function () {
        $(".sidebar-top a").children("span").removeClass("on")
        $(this).children("span").stop().addClass("on").animate({"left":"-79px"},300)
    })
    $(".sidebar-top a").mouseleave(function () {
        $(".sidebar-top a").children("span").removeClass("on").css("left","0px")
    })
    $(".back-top").mouseenter(function () {
        $(this).children("span").stop().addClass("on").animate({"left":"-79px"},300)
    })
    $(".back-top").mouseleave(function () {
        $(".back-top").children("span").removeClass("on").css("left","0px")
    })
    $(".back-top").click(function () {

        $("body,html").animate({scrollTop:0},300)
    })

//左侧电梯
    $(".fix-screen-list li").mouseenter(function () {
        $(".fix-screen-list li").removeClass("on")
        $(".fix-box").addClass("on");
        $(this).addClass("on")
    })
    $(".fix-screen-list li").mouseleave(function () {
        $(".fix-screen-list li").removeClass("on")
        $(".fix-box").removeClass("on");
    })
    $(".fix-screen-list li").click(function(){
        var ww = $(this).index();
        var Top = $(".bd-body .lou").eq(ww).offset().top;
        $("body,html").animate({scrollTop:Top});
        $(".fix-screen-list li").removeClass("current");
        $(this).addClass("current");
    });
    $(window).scroll(function(){//fixed出现
        if($(this).scrollTop()>($(".top-header").outerHeight(true)+$(".new-pro").outerHeight(true))&&$(this).scrollTop()<$(".bd-body").outerHeight(true)){
            $(".fix-box").removeClass("broaden");
            $(".fix-box").addClass("reduce");//渐显
        }else{
            $(".fix-box").removeClass("reduce");
            $(".fix-box").addClass("broaden");
        }

        if($(this).scrollTop()>$(".book--new").offset().top-450){
            $(".bd-body .lou").each(function(){
                var qq = $(this).index();
                var _height = $(this).offset().top+ $(this).height()/2;
                var _top = $(window).scrollTop();

                if(_height>_top){
                    $(".fix-screen-list li").removeClass("current");
                    $(".fix-screen-list li").eq(qq).addClass("current");
                    return false;
                }
            })
        }else {
            $(".fix-screen-list li").removeClass("current");
        }
    });















})