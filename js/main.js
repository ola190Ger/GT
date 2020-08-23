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

$(document).ready(function(){
    $(".openinfo_1").click(function(){
    $(".services-block__info-1").slideToggle("2000");
    if($("div").hasClass("blockall"))
    $(".blockall").remove();
    else
    $(".tytoknoall-1").append('<div class="blockall"></div>');
    });
    $(".tytoknoall-1").click(function(){
    $(".services-block__info-1").slideToggle("2000");
    $(".blockall").remove();
    });   
});

$(document).ready(function(){
    $(".openinfo_2").click(function(){
        $(".services-block__info-2").slideToggle("2000");
        if($("div").hasClass("blockall"))
        $(".blockall").remove();
        else
        $(".tytoknoall-2").append('<div class="blockall"></div>');
        });
        $(".tytoknoall-2").click(function(){
        $(".services-block__info-2").slideToggle("2000");
        $(".blockall").remove();
        });  
});

$(document).ready(function(){
    $(".openinfo_3").click(function(){
        $(".services-block__info-3").slideToggle("2000");
        if($("div").hasClass("blockall"))
        $(".blockall").remove();
        else
        $(".tytoknoall-3").append('<div class="blockall"></div>');
        });
        $(".tytoknoall-3").click(function(){
        $(".services-block__info-3").slideToggle("2000");
        $(".blockall").remove();
        });  
});

// $(document).ready(function(){
//     $(".services-info__description").hover(function(){
//         $(".services-info__line").css('padding-top', '50%');
//         },
//         function(){
//             $(".services-info__line").css('padding-top', '');
//         }
//     )
// });