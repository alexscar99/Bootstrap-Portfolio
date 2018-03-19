$(document).ready(function() {
  // hide page with display none so fade in can happen
  $('body').css('display', 'none');

  // fade in any new page over 2 sec
  $('body').fadeIn(2000);

  // click event on links to fade out current page and fade in the linked page
  $('a.transition').click(function(event) {
    event.preventDefault();
    // set newLocation variable for newpage function, set it equal to the page that is linked to
    pageLink = this.href;
    // fade out the entire page over 1 sec
    $('body').fadeOut(1000, newPage);
  });

  // change window location to the new page being linked
  function newPage() {
    window.location = pageLink;
  }
});
