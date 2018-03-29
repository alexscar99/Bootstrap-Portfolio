$(document).ready(function() {
  // hide landing page text until greeting is displayed
  $('.scroll-about').hide();

  // hide labels for contact form
  $('label').hide();

  // add margin to input fields in contact form while labels are hidden
  $('.name-input, .email-input, .msg-input').css('margin', '8% auto');

  $(function() {
    var greeting =
      "Hi, I'm Alex Scarlett. A web developer who will build your next project.";
    // create array of each letter from greeting, run function to put span around that letter
    var lettersArray = jQuery.map(greeting.split(''), function(letter) {
      return $('<span>' + letter + '</span>');
    });

    var greetingLocation = $('#homepage-heading');

    // counter and interval to populate each letter from greeting
    var counter = 0;
    var i = setInterval(function() {
      lettersArray[counter]
        .appendTo(greetingLocation)
        .hide()
        .fadeIn(90);
      counter += 1;
      // after greeting is fully displayed:
      if (counter === lettersArray.length) {
        clearInterval(i);
        $('.scroll-about').fadeIn(1500);
      }
    }, 90);
  });

  // on click: scroll to various sections of site
  $('.scroll-about').click(function() {
    $('html, body').animate(
      {
        scrollTop: $('#about-full').offset().top
      },
      1000
    );
  });

  $('.scroll-projects').click(function() {
    $('html, body').animate(
      {
        scrollTop: $('#portfolio').offset().top
      },
      1000
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

  // on click: contact form inputs removing placeholder and fading in a label
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
