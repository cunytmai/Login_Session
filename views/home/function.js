$(document).ready(e => {
  $('.logout').click(function(){

    $.ajax({
      type: 'POST',
      url: '/',
      success: window.location.href = '/'
    });
  });
});
