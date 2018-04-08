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
        $('.scroll-about').fadeIn(2000);
        $('.scroll-about-section').css('width', '20%');
        $('.scroll-about-section').css('margin', '0 auto');
      }
    }, 70);
  });

  // SCROLL TO STACK

  $('.scroll-about').click(function() {
    $('html, body').animate(
      {
        scrollTop: $('#stack-full').offset().top
      },
      1000
    );
  });

  // CONTACT FORM

  $('.form-textarea').hide();

  $('.email-input').click(function() {
    $(this).animate({ width: '60%' }, 500);
  });

  $('.form-msg-input').click(function() {
    $(this).hide();

    $('.form-textarea').fadeIn(500);

    $('.form-textarea').animate({ borderWidth: '3px' }, 500);

    $('#contact-form form .submit-btn').css('margin-top', '6%');

    $('.form-textarea').focus();
  });

  // if user tabs through the form instead of cicks, make the above
  // events still trigger and have them focus on textarea after
  $('.email-input').on('focus', function(event) {
    $(window).keyup(function(event) {
      var code = event.keyCode || event.which;
      if (code == 9) {
        $('.email-input').animate({ width: '60%' }, 500);
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

        $('#contact-form form .submit-btn').css('margin-top', '6%');

        $('.form-textarea').focus();
      }
    });
  });

  $('form').submit(function(event) {
    event.preventDefault();
  });
});
