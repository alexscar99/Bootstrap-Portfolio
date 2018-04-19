$(document).ready(function() {
  // LANDING PAGE TOP GREETING
  $('.scroll-section').hide();
  $('#greeting-left').hide();
  $('#greeting-right').hide();

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
      .fadeIn(75);
    counterTop += 1;

    if (counterTop === greetingTopArray.length) {
      clearInterval(i);
      $('#greeting-left')
        .delay(500)
        .show(600);
      $('#greeting-right')
        .delay(500)
        .show(600);
      $('.scroll-section')
        .delay(1200)
        .fadeIn(800);
    }
  }, 75);

  // SCROLL TO STACK

  $('.scroll-stack .scroll-section').click(function() {
    $('html, body').animate(
      {
        scrollTop: $('#stack-full').offset().top
      },
      750
    );
  });

  // PORTFOLIO HOVER

  $('.project-img-text-one h2').mouseover(function() {
    $('.project-one-p').fadeTo(1000, 1);
  });

  $('.project-img-text-one h2').mouseout(function() {
    $('.project-one-p').fadeTo(700, 0);
  });

  $('.project-img-text-two h2').mouseover(function() {
    $('.project-two-p').fadeTo(1000, 1);
  });

  $('.project-img-text-two h2').mouseout(function() {
    $('.project-two-p').fadeTo(700, 0);
  });

  $('.project-img-text-three h2').mouseover(function() {
    $('.project-three-p').fadeTo(1000, 1);
  });

  $('.project-img-text-three h2').mouseout(function() {
    $('.project-three-p').fadeTo(700, 0);
  });

  $('.project-img-text-four h2').mouseover(function() {
    $('.project-four-p').fadeTo(1000, 1);
  });

  $('.project-img-text-four h2').mouseout(function() {
    $('.project-four-p').fadeTo(700, 0);
  });

  $('.project-img-text-five h2').mouseover(function() {
    $('.project-five-p').fadeTo(1000, 1);
  });

  $('.project-img-text-five h2').mouseout(function() {
    $('.project-five-p').fadeTo(700, 0);
  });

  $('.project-img-text-six h2').mouseover(function() {
    $('.project-six-p').fadeTo(1000, 1);
  });

  $('.project-img-text-six h2').mouseout(function() {
    $('.project-six-p').fadeTo(700, 0);
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

    $('#contact-content form .submit-btn').css('margin-top', '7%');

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

        $('#contact-content form .submit-btn').css('margin-top', '7%');

        $('.form-textarea').focus();
      }
    });
  });
});
