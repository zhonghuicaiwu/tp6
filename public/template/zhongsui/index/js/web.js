$(document).ready(function () {

 
    $(".indexwomen li").mouseover(function () {
        if ($(window).width() > 900) {
            $(this).addClass("on").siblings().removeClass("on");
        }
    });
     

});


 
 