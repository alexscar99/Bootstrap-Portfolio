$(document).ready(function() {
  // hide landing page text until greeting is displayed
  $('.scroll-about').hide();

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

  // on click: scroll to various sections
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

  $('.form-textarea').hide();

  // hide msg input when clicked, fade in the textarea, animate with a border, resize margins, and focus on textarea
  $('.form-msg-input').click(function() {
    $(this).hide();

    $('.form-textarea').fadeIn(500);

    $('.form-textarea').animate({ borderWidth: '3px' }, 1250);

    $('#contact-form p, #contact-form input, .form-textarea').css(
      'margin',
      '2% auto'
    );

    $('#contact-form .form-first-p').css('margin-top', '7%');

    $('#contact-form button').css('margin', '2.5% auto');

    $('.form-textarea').focus();
  });

  // if user tabs through the form, make the above event still trigger and have them focus on textarea after
  $('.form-msg-input').on('focus', function(event) {
    $(window).keyup(function(event) {
      var code = event.keyCode || event.which;
      if (code == 9) {
        $('.form-msg-input').hide();

        $('.form-textarea').fadeIn(500);

        $('.form-textarea').animate({ borderWidth: '3px' }, 1250);

        $('#contact-form p, #contact-form input, .form-textarea').css(
          'margin',
          '2% auto'
        );

        $('#contact-form .form-first-p').css('margin-top', '7%');

        $('#contact-form button').css('margin', '2.5% auto');

        $('.form-textarea').focus();
      }
    });
  });
});
