$(document).ready(function(){
  $('.banner_slide').bxSlider({
        auto: true,
        speed: 700,
        pause: 4000,
        mode:'fade',
        autoControls: false,
        pager:false,
        controls:true,
        minSlides: 1,
        maxSlides:4,
        onSlideBefore: function() {
            $('header, #banner').toggleClass('light, dark');
        }
  });

  $( 'footer ul li' ).click(function() {
        $(this).children('ul').toggle();
    });

    $( 'header .mobile_menu' ).click(function() {
        $('header .menu_group').toggle();
        $('header').toggleClass('menu');
    });
});

$(window).on("scroll", function() {
    if ($(window).scrollTop() > 1) {
        $("header").addClass("scroll");
        $("header").addClass("bg");
    }else {
        $("header").removeClass("scroll");	
        $("header").removeClass("bg");
    }
});

