$(document).ready(function(){	

	var pos1 = $("#visual").offset().top;
	var pos2 = $("#product").offset().top;
	var pos3 = $("#news").offset().top;
	var pos4 = $("#service").offset().top;
	var base = -300; //박스모션이 기준점을주어 스크롤이 닿는순간 박스가 활성화 되도록하는것

	$(window).on("scroll",function(){
		var scroll = $(this).scrollTop();
		//var pos2 = $(".box2").offset().top;
		//$("h1").text(scroll);

		if(scroll >= pos1+base && scroll < pos2+base){
			$("#scroll_navi li").removeClass("on");
			$("#scroll_navi li").eq(0).addClass("on");
			$("#scroll_wrap>section").removeClass("on");
			$("#scroll_wrap>section").eq(0).addClass("on");
		}
		if(scroll >= pos2+base && scroll < pos3+base){
			$("#scroll_navi li").removeClass("on");
			$("#scroll_navi li").eq(1).addClass("on");
			$("#scroll_wrap>section").removeClass("on");
			$("#scroll_wrap>section").eq(1).addClass("on");
		}
		if(scroll >= pos3+base && scroll < pos4+base){
			$("#scroll_navi li").removeClass("on");
			$("#scroll_navi li").eq(2).addClass("on");
			$("#scroll_wrap>section").removeClass("on");
			$("#scroll_wrap>section").eq(2).addClass("on");
		}
		if(scroll >= pos4+base){
			$("#scroll_navi li").removeClass("on");
			$("#scroll_navi li").eq(3).addClass("on");
			$("#scroll_wrap>section").removeClass("on");
			$("#scroll_wrap>section").eq(3).addClass("on");
		}
	});

	$("#scroll_navi li").on("click",function(){
		var i = $(this).index();
		var target = $("#scroll_wrap>section").eq(i).offset().top;

		//alert(target);
		$("html,body").stop().animate({scrollTop : target},1000);
		
	});

});



	

	
	















