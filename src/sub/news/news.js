$(document).ready(function(){
    //sub news tab
    $(".tab_wrap dt a").on("click focusin",function(e){ 
        e.preventDefault();

        var target = $(this).attr("href");

        $(".tab_wrap dd").hide().removeClass("on");
        $(target).show();
        
        setTimeout(function(){
            $(target).addClass("on");
        },100);

        $(".tab_wrap dt a").removeClass("on");
        $(this).addClass("on");
    });
});