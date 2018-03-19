$(document).ready(function() {
  // hide page with display none so fade in can happen
  $('body').css('display', 'none');

  // fade in all pages over 2 sec
  $('body').fadeIn(2000);

  // click event on link
  $('a.transition').click(function(event) {
    event.preventDefault();
    // set newLocation variable for newpage function
    linkLocation = this.href;
    // fade out the entire page over 1 sec
    $('body').fadeOut(1000, newPage);
  });

  // change window location to the new page being linked
  function newPage() {
    window.location = linkLocation;
  }
});
