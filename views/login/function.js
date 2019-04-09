$(document).ready(e => {
  $('.login').click(function(){
    var user = $('.username').val();
    var pass = $('.password').val();

    $.ajax({
      type: 'POST',
      url: '/login',
      data: {user, pass},
      success: function(results) {
        if(results == 'null') {
          $('.username').val('');
          $('.password').val('');
          console.log('no such user found');
          //alert user
        }
        else{
          window.location.href = '/';
        }
      }
    });
  });
});
