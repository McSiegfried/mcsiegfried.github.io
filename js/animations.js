$(document).ready(function () {
    $('#test-animation').click(function () {
        $(this).animate({
            height : "+= 200",
            duration : 1000
        });
    });
    
    $('.test-animation')
        .mouseover(function () {
            $(this).animate({color: "red"}, 500);
        })
        .mouseout(function () {
            $(this).animate({width: 200}, 500);
        });
});