$(document).ready(function() {
  $('#homepage-top').css('display', 'none');
  $('#main-content').css('display', 'none');
  $('#homepage-top').fadeIn(2000);
  $('.btn').click(function(event) {
    event.preventDefault();
    $('#homepage-top').fadeOut(300);
    $('#main-content').fadeIn(3000);
  });
});
