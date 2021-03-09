$(".left p").on("click", function () {
  $(".left p").removeClass("active");
  $(this).addClass("active");
  //   console.log($(".right").scrollTop());
  //   console.log($("#loc" + $(this).index()).offset().top);
  //   console.log($(".right .section").eq($(this).index()).offset().top);
  if ($(this).index() != 0) {
    $(".content").animate(
      {
        scrollTop:
          $("#loc" + $(this).index()).offset().top +
          220 * $(this).index() -
          210,
      },
      500
    );
  } else {
    $(".content").animate({ scrollTop: 0 }, 500);
  }
  //   return false;
});

// $(".right .section").eq($(this).index()).offset().top -
// $("#loc" + $(this).index()).offset().top,

$(".content").on("scroll", function () {
  //   console.log($(".content").scrollTop());

  if ($(".content").scrollTop() >= 0 && $(".content").scrollTop() < 220) {
    $(".left p").removeClass("active");
    $(".left p").eq(0).addClass("active");
  } else if (
    $(".content").scrollTop() > 220 &&
    $(".content").scrollTop() <= 560
  ) {
    $(".left p").removeClass("active");
    $(".left p").eq(1).addClass("active");
  } else if (
    $(".content").scrollTop() > 560 &&
    $(".content").scrollTop() <= 900
  ) {
    $(".left p").removeClass("active");
    $(".left p").eq(2).addClass("active");
  } else if (
    $(".content").scrollTop() > 900 &&
    $(".content").scrollTop() <= 1245
  ) {
    $(".left p").removeClass("active");
    $(".left p").eq(3).addClass("active");
  } else if ($(".content").scrollTop() > 1245) {
    $(".left p").removeClass("active");
    $(".left p").eq(4).addClass("active");
  }
});
