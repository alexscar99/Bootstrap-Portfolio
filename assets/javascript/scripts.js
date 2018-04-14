$(document).ready(function() {
  // LANDING PAGE
  $('.scroll-about').hide();

  var greeting = "HI, I'M ALEX SCARLETT.";

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
      .fadeIn(95);
    counter += 1;

    if (counter === lettersArray.length) {
      clearInterval(i);
      $('.scroll-about').fadeIn(1400);
    }
  }, 95);

  // SCROLL TO STACK

  $('.scroll-about').click(function() {
    $('html, body').animate(
      {
        scrollTop: $('.divider').offset().top
      },
      650
    );
  });

  // PORTFOLIO

  $('.project-img-text-one h2').mouseover(function() {
    $('.project-one-p').fadeTo(800, 1);
  });

  $('.project-img-text-one h2').mouseout(function() {
    $('.project-one-p').fadeTo(500, 0.1);
  });

  $('.project-img-text-two h2').mouseover(function() {
    $('.project-two-p').fadeTo(800, 1);
  });

  $('.project-img-text-two h2').mouseout(function() {
    $('.project-two-p').fadeTo(500, 0.1);
  });

  $('.project-img-text-three h2').mouseover(function() {
    $('.project-three-p').fadeTo(800, 1);
  });

  $('.project-img-text-three h2').mouseout(function() {
    $('.project-three-p').fadeTo(500, 0.1);
  });

  $('.project-img-text-four h2').mouseover(function() {
    $('.project-four-p').fadeTo(800, 1);
  });

  $('.project-img-text-four h2').mouseout(function() {
    $('.project-four-p').fadeTo(500, 0.1);
  });

  $('.project-img-text-five h2').mouseover(function() {
    $('.project-five-p').fadeTo(800, 1);
  });

  $('.project-img-text-five h2').mouseout(function() {
    $('.project-five-p').fadeTo(500, 0.1);
  });

  $('.project-img-text-six h2').mouseover(function() {
    $('.project-six-p').fadeTo(800, 1);
  });

  $('.project-img-text-six h2').mouseout(function() {
    $('.project-six-p').fadeTo(500, 0.1);
  });

  // CONTACT FORM

  $('.form-textarea').hide();

  $('.email-input').click(function() {
    $(this).animate({ width: '60%' }, 500);
  });

  $('.form-msg-input').click(function() {
    $(this).hide();

    $('.form-textarea').fadeIn(500);

    $('.form-textarea').animate({ borderWidth: '1px' }, 500);

    $('#contact-content form .submit-btn').css('margin-top', '6%');

    $('.form-textarea').focus();
  });

  /* if user tabs through the form instead of cicks, make the above
  events still trigger */
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

        $('.form-textarea').animate({ borderWidth: '1px' }, 500);

        $('#contact-content form .submit-btn').css('margin-top', '6%');

        $('.form-textarea').focus();
      }
    });
  });

  $('form').submit(function(event) {
    event.preventDefault();
  });
});
