$(document).ready(e => {
  $('.register').click(function(){
    var user = $('.username').val();
    var pass = $('.password').val();

    $.ajax({
      type: 'POST',
      url: '/register',
      data: {user, pass},
      success: window.location.href = '/login'
    });
  });
});
