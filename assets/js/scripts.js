$(document).ready(function() {
  // LANDING PAGE GREETING
  $(
    '#greeting-bottom, #greeting-middle, #greeting-first, .scroll-section, .greeting-hr'
  ).hide();

  var greetingTop = "Hi, I'm Alex Scarlett";

  var greetingArray = jQuery.map(greetingTop.split(''), function(letter) {
    return $('<span>' + letter + '</span>');
  });

  var greetingLocation = $('#greeting-top');

  // counter and interval to populate each letter
  var counter = 0;
  var i = setInterval(function() {
    greetingArray[counter]
      .appendTo(greetingLocation)
      .hide()
      .fadeIn(80);
    counter++;

    if (counter === greetingArray.length) {
      $('.greeting-hr')
        .delay(300)
        .fadeIn(300);
      clearInterval(i);
      $('#greeting-middle')
        .delay(800)
        .fadeIn(1000);
      $('#greeting-bottom, .scroll-section')
        .delay(1800)
        .fadeIn(1000);
    }
  }, 80);

  // SCROLL TO STACK

  $('.scroll-stack .scroll-section').click(function() {
    $('html, body').animate(
      {
        scrollTop: $('.expertise-divider').offset().top
      },
      750
    );
  });

  // Bouncing Images When Entering Viewport (work in progress)
  // function topInViewport(element) {
  //   return (
  //     $(element).offset().top >= $(window).scrollTop() &&
  //     $(element).offset().top <= $(window).scrollTop() + $(window).height()
  //   );
  // }

  // $(window).on('load resize scroll', function(e) {
  //   if (topInViewport($('#DIV'))) {
  //     // add keyframes bounce to div
  //   }
  // });
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
