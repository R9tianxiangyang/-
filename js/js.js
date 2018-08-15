$(function () {
    $(".rr").click(function(){
        $(".boom").fadeToggle("slow");
    });

    $(".chartlv").hover(
        function(){
            $(this).children("div").stop().fadeIn();
        },
        function(){
            $(this).children("div").stop().fadeOut();
        }
    );
});





