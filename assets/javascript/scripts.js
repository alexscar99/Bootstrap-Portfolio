$(document).ready(function() {
  // hide landing page text until greeting is displayed
  $('.scroll-about').hide();

  $(function() {
    var greeting =
      "Hi, I'm Alex Scarlett. A web developer who will build your next project.";
    // create array of each letter from greeting, run function to put span around that letter
    var lettersArray = jQuery.map(greeting.split(''), function(letter) {
      return $('<span class="greeting">' + letter + '</span>');
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
});
