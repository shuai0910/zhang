/**
 * Created by E560KCD on 2017/3/27.
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
        var li="";
        for(var i=0;i<data["sub"].length;i++){
            li+="<li><a href='javascript:;'>"+data["sub"][i]+"</a></li> "
        }
        $(".sub ul").append(li);

        var li1="";
        for(var q=0;q<data["nvzhuang"].length;q++){
            li1+="<li><a href='javascript:;'><img src='"+data["nvzhuang"][q]+"'></a></li> "
        }
        $(".clearfix1").append(li1);

        var li2="";
        for(var w=0;w<data["yundong"].length;w++){
            li2+="<li><a href='javascript:;'><img src='"+data["yundong"][w]+"'></a></li> "
        }
        $(".clearfix2").append(li2);

        var li3="";
        for(var r=0;r<data["tongzhuang"].length;r++){
            li3+="<li><a href='javascript:;'><img src='"+data["tongzhuang"][r]+"'></a></li> "
        }
        $(".clearfix3").append(li3);


        var li4="";
        for(var t=0;t<data["muying"].length;t++){
            li4+="<li><a href='javascript:;'><img src='"+data["muying"][t]+"'></a></li> "
        }
        $(".clearfix4").append(li4);

        var li5="";
        for(var y=0;y<data["nanzhuang"].length;y++){
            li5+="<li><a href='javascript:;'><img src='"+data["nanzhuang"][y]+"'></a></li> "
        }
        $(".clearfix5").append(li5);

        var li6="";
        for(var u=0;u<data["jia"].length;u++){
            li6+="<li><a href='javascript:;'><img src='"+data["jia"][u]+"'></a></li> "
        }
        $(".clearfix6").append(li6);

        var li7="";
        for(var o=0;o<data["xie"].length;o++){
            li7+="<li><a href='javascript:;'><img src='"+data["xie"][o]+"'></a></li> "
        }
        $(".clearfix7").append(li7);

        var li8="";
        for(var p=0;p<data["shipin"].length;p++){
            li8+="<li><a href='javascript:;'><img src='"+data["shipin"][p]+"'></a></li> "
        }
        $(".clearfix8").append(li8);

        var li9="";
        for(var a=0;a<data["meizhuang"].length;a++){
            li9+="<li><a href='javascript:;'><img src='"+data["meizhuang"][a]+"'></a></li> "
        }
        $(".clearfix9").append(li9);

        var li10="";
        for(var s=0;s<data["shuma"].length;s++){
            li10+="<li><a href='javascript:;'><img src='"+data["shuma"][s]+"'></a></li> "
        }
        $(".clearfix10").append(li10);

        var li11="";
        for(var d=0;d<data["ziyou"].length;d++){
            li11+="<li><a href='javascript:;'><img src='"+data["ziyou"][d]+"'></a></li> "
        }
        $(".clearfix11").append(li11);

        var li12="";
        for(var f=0;f<data["wenchuang"].length;f++){
            li12+="<li><a href='javascript:;'><img src='"+data["wenchuang"][f]+"'></a></li> "
        }
        $(".clearfix12").append(li12);

        var li13="";
        for(var g=0;g<data["tushu"].length;g++){
            li13+="<li><a href='javascript:;'><img src='"+data["tushu"][g]+"'></a></li> "
        }
        $(".clearfix13").append(li13);

    });
    $(window).scroll(function(){//fixed出现
        if($(this).scrollTop()>950){
            $(".silide_fua1").css("display","block");
            $(".silide_fua").css("display","block");
        }else{
            $(".silide_fua1").css("display","none");
            $(".silide_fua").css("display","none");
        }
    });

});