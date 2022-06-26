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

  // End nav

  // End Header

  // Start Properties

  $(".propertylists").click(function () {
    $(this).addClass("activeitems").siblings().removeClass("activeitems");

    // for filter

    let getattvalue = $(this).attr("data-filter");
    console.log(getattvalue);

    if (getattvalue === "all") {
      $(".filters").show("slide", 500);
    } else {
      $(".filters")
        .not("." + getattvalue)
        .hide("slide", 500);

      $(".filters")
        .filter("." + getattvalue)
        .show("slide", 500);
    }
  });
});
