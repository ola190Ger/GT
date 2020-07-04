$(window).load(function() { 
    $('.slider').slick({
        arrows: false,
        vertical: true,
        verticalSwiping: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnFocus:false,
        pauseOnHover: false,
        pauseOnDotsHover:false,
        graggable: false,
        swipe: false
    });

    $("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(_href).offset().top});
        return false;
    });
});