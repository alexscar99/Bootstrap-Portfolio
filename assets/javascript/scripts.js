$(document).ready(function() {
  // hide body and fade in
  // $('body').css('display', 'none');

  // $('#homepage-full').fadeIn(2500);
  $('.scroll-about').hide();

  $('label').hide();

  $('.name-input, .email-input, .msg-input').css('margin', '8% auto');

  $(function() {
    var string =
      "Hi, I'm Alex Scarlett. I'm a full-stack web developer who enjoys coding anything and everything.";
    var lettersArray = jQuery.map(string.split(''), function(letter) {
      return $('<span>' + letter + '</span>');
    });

    var dest = $('#homepage-heading');

    var counter = 0;
    var i = setInterval(function() {
      lettersArray[counter]
        .appendTo(dest)
        .hide()
        .fadeIn(75);
      counter += 1;
      if (counter >= lettersArray.length) {
        clearInterval(i);
        $('.scroll-about').fadeIn(2000);
      }
    }, 75);
  });

  // scroll to about section
  $('.scroll-about').click(function() {
    $('html, body').animate(
      {
        scrollTop: $('#about-full').offset().top
      },
      1500
    );
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
  });

  $('.name-input').click(function() {
    $(this).attr('placeholder', '');
    $('#form-first-label').fadeIn(1500);
    $(this).css('margin', '0 auto');
  });

  $('.email-input').click(function() {
    $(this).attr('placeholder', '');
    $('.email-label').fadeIn(1500);
    $(this).css('margin', '0 auto');
  });

  $('.msg-input').click(function() {
    $(this).attr('placeholder', '');
    $('.form-msg').fadeIn(1500);
    $(this).css('margin', '0 auto');
  });
});
