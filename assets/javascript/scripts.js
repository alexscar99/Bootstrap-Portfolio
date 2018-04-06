$(document).ready(function() {
  // GREETING SECTION

  $('.scroll-about').hide();

  $(function() {
    var greeting =
      "Hi, I'm Alex Scarlett. A web developer who will build your next project.";

    var lettersArray = jQuery.map(greeting.split(''), function(letter) {
      return $('<span>' + letter + '</span>');
    });

    var greetingLocation = $('#homepage-heading');

    // counter and interval to populate each letter
    var counter = 0;
    var i = setInterval(function() {
      lettersArray[counter]
        .appendTo(greetingLocation)
        .hide()
        .fadeIn(70);
      counter += 1;

      if (counter === lettersArray.length) {
        clearInterval(i);
        $('.scroll-about').fadeIn(1500);
      }
    }, 70);
  });

  // ON CLICK SCROLLING

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

  // CONTACT FORM

  $('.form-textarea').hide();

  $('.email-input').click(function() {
    $(this).animate({ width: '47.5%' }, 500);
  });

  $('.form-msg-input').click(function() {
    $(this).hide();

    $('.form-textarea').fadeIn(500);

    $('.form-textarea').animate({ borderWidth: '3px' }, 500);

    $('#contact-form p, #contact-form input, .form-textarea').css(
      'margin',
      '2% auto'
    );

    $('#contact-form .form-first-p').css('margin-top', '7%');

    $('#contact-form button').css('margin', '2.5% auto');

    $('.form-textarea').focus();
  });

  // if user tabs through the form instead of cicks, make the above
  // events still trigger and have them focus on textarea after
  $('.email-input').on('focus', function(event) {
    $(window).keyup(function(event) {
      var code = event.keyCode || event.which;
      if (code == 9) {
        $('.email-input').animate({ width: '47.5%' }, 500);
      }
    });
  });

  $('.form-msg-input').on('focus', function(event) {
    $(window).keyup(function(event) {
      var code = event.keyCode || event.which;
      if (code == 9) {
        $('.form-msg-input').hide();

        $('.form-textarea').fadeIn(500);

        $('.form-textarea').animate({ borderWidth: '3px' }, 500);

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

  $('form').submit(function(event) {
    event.preventDefault();
  });
});
