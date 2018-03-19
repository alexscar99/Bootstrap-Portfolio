$(document).ready(function() {
  $('#main-content').css('display', 'none');
  $('.btn').click(function(event) {
    event.preventDefault();
    $('#homepage-top').fadeOut(800);
    $('#main-content').fadeIn(3000);
  });
});
