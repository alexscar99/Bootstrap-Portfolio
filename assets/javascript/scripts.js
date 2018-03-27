$(document).ready(function() {
  // hide navbar
  $('#homepage-full ,#navbar').css('display', 'none');

  $('#homepage-full').fadeIn(1500);

  // fade in any new page over 2 sec

  // $('#portfolio-page, #').fadeIn(2000);

  // click event on links to fade out current page and fade in the linked page
  $('a').click(function(event) {
    event.preventDefault();
    // set newLocation variable for newpage function, set it equal to the page that is linked to
    pageLink = this.href;
    // fade out the entire page over 1 sec
    $('body').fadeOut(1500, newPage);
  });

  // change window location to the new page being linked
  function newPage() {
    window.location = pageLink;
  }

  // scroll to about me
  $('.scroll-down').click(function() {
    $('html, body').animate(
      {
        scrollTop: $('.container').offset().top
      },
      1500
    );
    $('#homepage-full').fadeOut(1500);
    $('#navbar').fadeIn(1500);
  });
});
