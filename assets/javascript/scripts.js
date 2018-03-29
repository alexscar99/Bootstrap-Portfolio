$(document).ready(function() {
  // hide langing page text until greeting is displayed
  $('.scroll-about').hide();

  // hide labels for contact form
  $('label').hide();

  // add margin to input fields in contact form while labels are hidden
  $('.name-input, .email-input, .msg-input').css('margin', '8% auto');

  // display greeting letter by letter
  $(function() {
    var greeting =
      "Hi, I'm Alex Scarlett. A web developer who will build your next project.";
    var lettersArray = jQuery.map(greeting.split(''), function(letter) {
      return $('<span>' + letter + '</span>');
    });

    var dest = $('#homepage-heading');

    var counter = 0;
    var i = setInterval(function() {
      lettersArray[counter]
        .appendTo(dest)
        .hide()
        .fadeIn(90);
      counter += 1;
      if (counter >= lettersArray.length) {
        clearInterval(i);
        // after greeting is displayed, fade in the rest of the page text
        $('.scroll-about').fadeIn(2500);
      }
    }, 90);
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
