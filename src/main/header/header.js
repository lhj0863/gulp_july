$(document).ready(function(){
    //skip_navi 활성화
    $("#skip_navi a").on("focusin",function(){
        $(this).addClass("on");
    });

    $("#skip_navi a").on("focusout",function(){
        $(this).removeClass("on");
    });

    //GNB
    function gnbOpen(){
        $('.side_menu').show(0);
        $("#gnb").find("ul").stop().slideDown();
        $('#header .gnb_wrap').addClass('open');
        $(".pop_dim").addClass("on");    
    }

    function gnbColse(){
        $("#gnb").find("ul").stop().slideUp(function(){
            $('.side_menu').hide(0);
        });
        $('#header .gnb_wrap').removeClass('open');
        $(".pop_dim").removeClass("on");   
    }

    //header 영역에 마우스오버, 아웃시 서브메뉴, 패널 보이기/숨기기
    $('#header .gnb_wrap').hover(function() {//enter
        gnbOpen();
    }, function(){//leave
        gnbColse();
    });

    //개별적 GNB메뉴에 마우스 오버시 1depth메뉴 활성화 유지
    $('#gnb>li').hover(function() {//enter
        $(this).children("a").addClass("on");
    }, function(){//leave
        $(this).children("a").removeClass("on");
    });

    //a태그에 포커스 이동시 서브메뉴, 패널 보이기/숨기기
	$("#gnb>li>a").on("focusin",function(){
        gnbOpen();
    });

    $("#gnb a").last().on("focusout", function(){
        gnbColse();
    });

    //GNB 각 영역 사진바꾸기
    $('#gnb>li').mouseenter(function(){   
        var liIndex = $(this).index();
        $('.side_menu .m_txt').hide(0);
        $('.side_menu .m_txt').eq(liIndex).show(0);
    });


    //모바일 메뉴 열고 닫기
    $('.m_menu .m_bt').click(function(){

        if ( $('body').hasClass('gnb_open') ){
            $('body').removeClass('gnb_open');
            $('.m_menu .m_bt i').attr('class','fa fa-bars');

        }else{
            $('body').addClass('gnb_open');
            $('.m_menu .m_bt i').attr('class','fas fa-times');

        }



    })//click

    //모바일 메뉴 depth
    $('#m_gnb>li>a').click(function(){
        if( $(this).hasClass('open') ){//닫기
            $(this).removeClass('open').next().slideUp();
        }else{//열기
            $(this).addClass('open').next().slideDown();
            $(this).parent().siblings().children('a').removeClass('open');
            $(this).parent().siblings().find('ul').slideUp();
        }
    })
});