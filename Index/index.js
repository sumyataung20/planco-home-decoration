$(document).ready(function () {
  // Start Header

  // Start Nav

  // for bugger

  $(".navbuttons").click(function () {
    $(".navbuttons").toggleClass("crossxs");
  });

  //for nav

  $(window).scroll(function () {
    let getscrolltop = $(this).scrollTop();

    if (getscrolltop >= 200) {
      $(".navbar").addClass("navmenus");
    } else {
      $(".navbar").removeClass("navmenus");
    }
  });
});
