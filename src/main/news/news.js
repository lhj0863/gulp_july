$(document).ready(function(){
    //index news tab
    $("ul.tab li a").on("click focusin",function(e){ 
        e.preventDefault();

        var target = $(this).attr("href");
        $(".tabcontent").removeClass("on");
        setTimeout(function(){
            $(target).addClass("on");
        },100);

        $("ul.tab li a").removeClass("on");
        $(this).addClass("on");

    });
});