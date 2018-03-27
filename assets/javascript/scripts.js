$(document).ready(function() {
  // hide navbar
  $('#navbar').css('display', 'none');

  // hide body and fade in
  $('body').css('display', 'none');

  $('body').fadeIn(2500);

  // click event on links to fade out current page and fade in the linked page
  $('a.transition').click(function(event) {
    event.preventDefault();

    window.location = this.href;

    $('body').fadeOut(2000);
  });

  // scroll to content container me
  $('.scroll-down').click(function() {
    $('html, body').animate(
      {
        scrollTop: $('.container').offset().top
      },
      1500
    );
    $('#homepage-full').fadeOut(1500);
    $('#navbar').fadeIn(1500);
  });
});
