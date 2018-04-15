$(document).ready(function() {
  $('.scroll-about').hide();

  // LANDING PAGE TOP GREETING
  var greetingTop = "HI, I'M ALEX SCARLETT";

  var greetingTopArray = jQuery.map(greetingTop.split(''), function(letter) {
    return $('<span>' + letter + '</span>');
  });

  var greetingLocationTop = $('#greeting-top');

  // counter and interval to populate each letter
  var counterTop = 0;
  var i = setInterval(function() {
    greetingTopArray[counterTop]
      .appendTo(greetingLocationTop)
      .hide()
      .fadeIn(70);
    counterTop += 1;

    if (counterTop === greetingTopArray.length) {
      clearInterval(i);
      // LANDING PAGE BOTTOM GREETING
      var greetingBottom = "LET'S BUILD YOUR NEXT PROJECT";

      var greetingBottomArray = jQuery.map(greetingBottom.split(''), function(
        letter
      ) {
        return $('<span>' + letter + '</span>');
      });

      var greetingBottomLocation = $('#greeting-bottom');

      // counter and interval to populate each letter
      var counterBottom = 0;
      var x = setInterval(function() {
        greetingBottomArray[counterBottom]
          .appendTo(greetingBottomLocation)
          .hide()
          .fadeIn(70);
        counterBottom += 1;

        if (counterBottom === greetingBottomArray.length) {
          clearInterval(x);
          $('.scroll-about').fadeIn(1500);
        }
      }, 70);
    }
  }, 70);

  // SCROLL TO STACK

  $('.scroll-about .scroll-about-section').click(function() {
    $('html, body').animate(
      {
        scrollTop: $('#stack-full').offset().top
      },
      800
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
});
