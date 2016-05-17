/**
 * Created by kou on 15-8-30.
 */
$(document).ready(function(){

    $('.tabbody:gt(0)').hide();
    var hdw = $('.tab_head ul li');
    hdw.click(function(){
        $(this).addClass('active')
            .siblings().removeClass("active");
        $('.tabbody').hide();
        $('.tabbody').eq(hdw.index(this)).fadeIn(1000);
    });

    $('#select').click(function(){
        $('.selectcon').show();
    });

    $('.selectcon .selectlist').click(function(){
        $('.select').val($(this).html());
        $('.selectcon').fadeOut();
    });

});




