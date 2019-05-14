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
});

$(window).on("scroll", function() {
    if ($(window).scrollTop() > 1) {
        $("header").addClass("scroll");
        $("header").addClass("bg");
        // 화면을 스크롤하면 scroll, bg 클래스에 있는 값이 적용된다.
    }else {
        $("header").removeClass("scroll");	
        $("header").removeClass("bg");
        // 화면을 맨 위로 올리면 scroll, bg 클래스에 있는 값이 해제된다.
    }
});