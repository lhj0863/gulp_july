$(document).ready(function(){
    //index instagram slider
    var isAnimated = false;
    function instSlider(target,speed){

        var slSpeed = speed ? speed : 500;
        /*
        var slSpeed;
        if( !slSpeed == null ){
            slSpeed = speed;//1000
        }else{
            slSpeed = 500;
        }
        */

        $(target).find('.arrow a').click(function(e){
            e.preventDefault();
            var slDirection = $(this).attr('class');
            if ( slDirection == 'prev' ) {
                instSlPrev(target,slSpeed);
            } else if ( slDirection == 'next' ) {
                instSlNext(target,slSpeed);
            }
        })
    }

    function instSlPrev(obj,speed){
        if( isAnimated == false ){
            isAnimated = true;
            var slClone = $(obj).find('.sl li:first-child').clone();
            $(obj).find('.sl').append(slClone);
            var firstLeft = $(obj).find('.sl li').eq(0).offset().left;
            var secondLeft = $(obj).find('.sl li').eq(1).offset().left;
            var moveWidth = firstLeft - secondLeft;
            $(obj).find('.sl').animate({left : moveWidth },speed,function(){
                $(obj).find('.sl li').eq(0).remove();
                $(obj).find('.sl').css('left',0);
                isAnimated = false;
            });
        }
    }

    function instSlNext(obj,speed){
        if( isAnimated == false ){
            isAnimated = true;
            var slClone = $(obj).find('.sl li:last-child').clone();
            $(obj).find('.sl').prepend(slClone);
            var firstLeft = $(obj).find('.sl li').eq(0).offset().left;
            var secondLeft = $(obj).find('.sl li').eq(1).offset().left;
            var moveWidth = firstLeft - secondLeft;
            $(obj).find('.sl').css('left',moveWidth);
            $(obj).find('.sl').animate({left : 0 },speed,function(){
                $(obj).find('.sl li:last-child').remove();
                isAnimated = false;
            });
        }
    }

    instSlider('.inst_sl',1000);

});