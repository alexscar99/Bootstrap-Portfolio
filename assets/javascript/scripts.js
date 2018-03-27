$(document).ready(function() {
  // hide navbar and footer
  $('#navbar, #footer').css('display', 'none');

  // hide body and fade in
  $('body').css('display', 'none');

  $('body').fadeIn(2500);

  $('.scroll-about').click(function() {
    $('html, body').animate(
      {
        scrollTop: $('#about-full').offset().top
      },
      1500
    );
    //$('#homepage-full').fadeOut(1500);
    // $('#navbar').fadeIn(1500);
  });

  $('.scroll-projects').click(function() {
    $('html, body').animate(
      {
        scrollTop: $('#portfolio').offset().top
      },
      1500
    );
  });

  $('.scroll-contact').click(function() {
    $('html, body').animate(
      {
        scrollTop: $('#contact').offset().top
      },
      1500
    );
    $('#footer').fadeIn(1500);
  });
});
