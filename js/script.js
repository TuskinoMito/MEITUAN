var mySwiper = new Swiper(".swiper-container", {
  loop: true, // 循环模式选项

  // 如果需要分页器
  pagination: {
    el: ".swiper-pagination",
    bulletActiveClass: "my-bullet-active",
  },

  // 如果需要前进后退按钮
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // 如果需要滚动条
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

var totop = document.querySelector(".totop");

window.addEventListener("scroll", function () {
  var scrollTop = window.pageYOffset;
  if (
    scrollTop > document.body.clientHeight * 0.1 &&
    scrollTop < document.body.clientHeight * 0.5
  ) {
    totop.classList.remove("hidde");
  } else {
    totop.classList.add("hidde");
  }
});

// totop.addEventListener("click", function () {
//   // window.scrollTo(0, 0);
//   document.documentElement.scrollTop = 0;
//   // console.log(document.documentElement);
// });

$(".totop").on("click", function () {
  $("html,body").animate({ scrollTop: 0 });
});

$(".log").on("click", function () {
  $(".log").attr("href", "login.html");
});

$(function () {
  var MapSet = {
    GetLocation: function () {
      var geolocation = new BMap.Geolocation();
      geolocation.getCurrentPosition(
        function (r) {
          if (this.getStatus() == BMAP_STATUS_SUCCESS) {
            var rp = new BMap.Point(r.point.lng, r.point.lat);
            var gc = new BMap.Geocoder();
            gc.getLocation(rp, function (rs) {
              var addComp = rs.addressComponents;
              $(".location span").text(addComp.city);
            });
          }
        },
        { enableHighAccuracy: true }
      );
    },
  };
  $(function () {
    MapSet.GetLocation();
  });
});
// console.log(MapSet.GetLocation());
