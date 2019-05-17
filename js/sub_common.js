$(document).ready(function(){
  $( 'footer ul li' ).click(function() {
        $(this).children('ul').toggle();
    });

    $( 'header .mobile_menu' ).click(function() {
        $('header .menu_group').toggle();
        $('header').addClass('menu');
    });
});

