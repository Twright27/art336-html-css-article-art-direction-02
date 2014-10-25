// Animated Page Scroll
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});


// bigtext.js
$(function() {
    WebFont.load({
        custom: {
            families: ['Yanone Kaffeesatz'], // font-family name
            urls : ['css/main.css'] // URL to css
        },
        active: function() {
            $('#bigtext').bigtext();
        }
    });
});

// bigtext.js
$(function() {
    WebFont.load({
        custom: {
            families: ['Cubano'], // font-family name
            urls : ['css/main.css'] // URL to css
        },
        active: function() {
            $('#overview-headline').bigtext();
            $('#skills-headline').bigtext();
            $('#stats-headline').bigtext();
        }
    });
});


$(document).ready(function(){
    $(".toggle-button-1").next("ul").hide();
    $(".toggle-button-1").click(function(){
        $(".toggle-button-1").next("ul").slideToggle();
    });
});

$(document).ready(function(){
    $(".toggle-button-2").next("ul").hide();
    $(".toggle-button-2").click(function(){
        $(".toggle-button-2").next("ul").slideToggle();
    });
});

$(document).ready(function(){
    $(".toggle-button-3").next("ul").hide();
    $(".toggle-button-3").click(function(){
        $(".toggle-button-3").next("ul").slideToggle();
    });
});

$(function () {
    $(".slider").responsiveSlides({
        auto: false,
        pager: false,
        nav: true,
        speed: 500,
        namespace: "callbacks"
    });
}); 