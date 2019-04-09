$(document).ready(function(){
  responsive_menu = $('.navbar-nav');

  $('#menu-access').on('click', function(e) {
    e.preventDefault();
    responsive_menu.slideToggle();
    //Alt: if :visible => display: inline-block
  });
  
  $(window).resize(function(){
    var obtener_ancho = $(this).width();
    if(obtener_ancho > 480 && responsive_menu.is(':hidden')) {
      responsive_menu.removeAttr('style');
    }
  });

});

//When adding a class to an element, in the css ex. li .active {...}
