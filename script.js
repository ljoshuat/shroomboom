//run line clamping script

$(function () {
  $(".line-clamp").line(4, "...");
});

$(function () {
  $(".line-clamp.is--2-line").line(2, "...");
});

//any time the load more button is clicked run line clamp

$(".is--load-more").on("click", function () {
  $(".line-clamp.is--2-line").line(2, "...");
});

//show reset on search bar
$("#search").on("keyup change", function () {
  if ($(this).val().length === 0) {
    $(".reset-search").removeClass("show");
  } else {
    $(".reset-search").addClass("show");
  }
});

$(".reset-search").on("click", function () {
  $("#search").val("");
  if ($(this).val().length === 0) {
    $(".reset-search").removeClass("show");
  } else {
    $(".reset-search").addClass("show");
  }
});

//nav menu underline code

function menuWidth() {
  let theMenuWidth = $(".menu-contain").width();
  $(".grid-item.is--social").css("width", theMenuWidth);
}

menuWidth();

$(window).resize(function () {
  menuWidth();
});

function moveLine(myLine) {
  var myDistance = myLine.offset().left - $(".menu_link").offset().left;
  var myWidth = myLine.width();

  $(".nav_underline").css({
    width: myWidth + "px",
    transform: "translateX(" + myDistance + "px"
  });
}

if ($(".w--current p").length > 0) {
  moveLine($(".w--current p"));
}

$(".menu_link").mouseenter(function () {
  moveLine($(this).find("p"));
  $(this).siblings(".menu_link").css("opacity", "0.5");
});

$(".menu_link").mouseleave(function () {
  $(this).siblings(".menu_link").css("opacity", "1");
  if ($(".w--current p").length > 0) {
    moveLine($(".w--current p"));
  } else {
    $(".nav_underline").css("width", "0px");
  }
});

$(".menu_link.social").mouseenter(function () {
  $(".grid-item.is--social").addClass("show");
});

$(".menu_link.social").mouseleave(function () {
  if ($(".w--current p").length > 0) {
    moveLine($(".w--current p"));
  } else {
    $(".nav_underline").css("width", "0px");
  }
});

$(".grid-item.is--social").hover(
  function () {
    $(this).addClass("show");
  },
  function () {
    $(this).removeClass("show");
  }
);

$(".menu_link.social").mouseleave(function () {
  $(".grid-item.is--social").removeClass("show");
});

//search bar dropdown

$(document).ready(function () {
  if ($(window).width() <= 1024) {
    $(".site-search-wrapper").removeClass("open");
  }
});

$(".is--search-icon").on("click", function () {
  $(".site-search-wrapper").toggleClass("open");
  $(this).toggleClass("close");
});

$(".site-search.menu_link.is--search").on("click", function () {
  $(".site-search-wrapper").toggleClass("open");
  $("#search").focus();
});

//target the Middle Square inside of The Latest Grid
$(".latest_item-image-contain").eq(2).addClass("is--middle");

$(".menu_link.is--subscribe").on("click", function () {
  $(".grid-item.is--nav-links").toggleClass("show");
});

//dropdown list menu
$(".dropdown-toggle").on("click", function () {
  $(".dropdown-list").toggleClass("open");
  $(".dropdown-icon").toggleClass("open");
});

$(".menu-background-overlay").on("click", function () {
  $(".dropdown-list").removeClass("open");
});

//hamburger menu
$(".hamburger-menu.is--divs").on("click", function () {
  $(".ham-line.top, .ham-line.bottom, .ham-line.middle").toggleClass(
    "is--close"
  );
});

$(".hamburger-menu").on("click", function () {
  $(".grid-item.is--nav-links").toggleClass("show");
});

$(".close-wrapper").on("click", function () {
  $(".grid-item.is--nav-links").removeClass("show");
  $(".ham-line.top, .ham-line.bottom, .ham-line.middle").toggleClass(
    "is--close"
  );
});

//homepage slider
function slider1() {
  let splides = $(".slider1");
  for (let i = 0, splideLength = splides.length; i < splideLength; i++) {
    new Splide(splides[i], {
      // Desktop on down
      perPage: 1,
      perMove: 1,
      focus: 0, // 0 = left and 'center' = center
      type: "slide", // 'loop' or 'slide'
      gap: ".4em", // space between slides
      arrows: "false", // 'slider' or false
      pagination: "false", // 'slider' or false
      speed: 600, // transition speed in miliseconds
      dragAngleThreshold: 30, // default is 30
      autoWidth: false, // for cards with differing widths
      rewind: false, // go back to beginning when reach end
      rewindSpeed: 400,
      waitForTransition: false,
      autoplay: false,
      interval: 5000,
      pauseOnHover: false,
      updateOnMove: true,
      trimSpace: true, // true removes empty space from end of list
      breakpoints: {
        991: {
          // Tablet
          perPage: 2,
          perMove: 1,
          pagination: true,
          gap: "3vw",
          type: "loop"
        },
        767: {
          // Mobile Landscape
          perPage: 1,
          pagination: true,
          autoplay: true,

          gap: "3vw",
          type: "loop"
        },
        479: {
          // Mobile Portrait
          perPage: 1,
          pagination: true,
          autoplay: true,

          gap: "3vw",
          type: "loop"
        }
      }
    }).mount();
  }
}
slider1();

function slider2() {
  let splides = $(".slider2");
  for (let i = 0, splideLength = splides.length; i < splideLength; i++) {
    new Splide(splides[i], {
      // Desktop on down
      perPage: 1,
      perMove: 1,
      focus: 0, // 0 = left and 'center' = center
      type: "slide", // 'loop' or 'slide'
      gap: ".4em", // space between slides
      arrows: "false", // 'slider' or false
      pagination: false, // 'slider' or false
      speed: 600, // transition speed in miliseconds
      dragAngleThreshold: 30, // default is 30
      autoWidth: false, // for cards with differing widths
      rewind: false, // go back to beginning when reach end
      rewindSpeed: 400,
      waitForTransition: false,
      autoplay: false,
      interval: 5000,
      pauseOnHover: false,
      updateOnMove: true,
      trimSpace: true, // true removes empty space from end of list
      breakpoints: {
        991: {
          // Tablet
          perPage: 2,
          perMove: 1,
          pagination: true,
          gap: "3vw",
          type: "loop"
        },
        767: {
          // Mobile Landscape
          perPage: 1,
          pagination: true,
          autoplay: true,

          gap: "3vw",
          type: "loop"
        },
        479: {
          // Mobile Portrait
          perPage: 1,
          pagination: true,
          autoplay: true,

          gap: "3vw",
          type: "loop"
        }
      }
    }).mount();
  }
}
slider2();

function slider3() {
  let splides = $(".slider3");
  for (let i = 0, splideLength = splides.length; i < splideLength; i++) {
    new Splide(splides[i], {
      // Desktop on down
      perPage: 3,
      perMove: 1,
      focus: 0, // 0 = left and 'center' = center
      type: "loop", // 'loop' or 'slide'
      gap: ".5em", // space between slides
      arrows: "false", // 'slider' or false
      pagination: "slider", // 'slider' or false
      speed: 600, // transition speed in miliseconds
      dragAngleThreshold: 30, // default is 30
      autoWidth: false, // for cards with differing widths
      rewind: false, // go back to beginning when reach end
      rewindSpeed: 400,
      waitForTransition: false,
      autoplay: true,
      interval: 5000,
      pauseOnHover: false,
      updateOnMove: true,
      trimSpace: true, // true removes empty space from end of list
      breakpoints: {
        991: {
          // Tablet
          perPage: 2,
          perMove: 1,
          pagination: true,
          gap: "3vw",
          type: "loop"
        },
        767: {
          // Mobile Landscape
          perPage: 1,
          pagination: true,
          autoplay: true,

          gap: "3vw",
          type: "loop"
        },
        479: {
          // Mobile Portrait
          perPage: 1,
          pagination: true,
          autoplay: true,

          gap: "3vw",
          type: "loop"
        }
      }
    }).mount();
  }
}
slider3();

function slider4() {
  let splides = $(".slider4");
  for (let i = 0, splideLength = splides.length; i < splideLength; i++) {
    new Splide(splides[i], {
      // Desktop on down
      perPage: 3,
      perMove: 1,
      focus: "center", // 0 = left and 'center' = center
      type: "slide", // 'loop' or 'slide'
      gap: ".5em", // space between slides
      arrows: "false", // 'slider' or false
      pagination: "slider", // 'slider' or false
      speed: 600, // transition speed in miliseconds
      dragAngleThreshold: 30, // default is 30
      autoWidth: false, // for cards with differing widths
      rewind: false, // go back to beginning when reach end
      rewindSpeed: 400,
      waitForTransition: false,
      autoplay: true,
      interval: 5000,
      pauseOnHover: false,
      updateOnMove: true,
      trimSpace: true, // true removes empty space from end of list
      breakpoints: {
        991: {
          // Tablet
          perPage: 2,
          perMove: 1,
          pagination: true,
          gap: "3vw",
          type: "loop"
        },
        767: {
          // Mobile Landscape
          perPage: 1,
          pagination: true,
          autoplay: true,

          gap: "3vw",
          type: "loop"
        },
        479: {
          // Mobile Portrait
          perPage: 1,
          pagination: true,
          autoplay: true,

          gap: "3vw",
          type: "loop"
        }
      }
    }).mount();
  }
}
slider4();

function sliderCategory() {
  let splides = $(".slidercategory");
  for (let i = 0, splideLength = splides.length; i < splideLength; i++) {
    new Splide(splides[i], {
      // Desktop on down
      perPage: 3,
      perMove: 3,
      focus: 0, // 0 = left and 'center' = center
      type: "slide", // 'loop' or 'slide'
      gap: "1.5em", // space between slides
      arrows: "false", // 'slider' or false
      pagination: false, // 'slider' or false
      speed: 600, // transition speed in miliseconds
      dragAngleThreshold: 30, // default is 30
      autoWidth: false, // for cards with differing widths
      rewind: false, // go back to beginning when reach end
      rewindSpeed: 400,
      waitForTransition: false,
      autoplay: false,
      interval: 5000,
      pauseOnHover: false,
      updateOnMove: true,
      trimSpace: true, // true removes empty space from end of list
      breakpoints: {
        991: {
          // Tablet
          perPage: 2,
          perMove: 1,
          pagination: true,
          gap: "3vw",
          type: "loop"
        },
        767: {
          // Mobile Landscape
          perPage: 1,
          pagination: true,
          autoplay: false,

          gap: "3vw",
          type: "loop"
        },
        479: {
          // Mobile Portrait
          perPage: 1.5,
          pagination: true,
          autoplay: false,

          gap: "3vw",
          type: "loop"
        }
      }
    }).mount();
  }
}
sliderCategory();

function sliderShopCategories() {
  let splides = $(".slider-shop-categories");
  for (let i = 0, splideLength = splides.length; i < splideLength; i++) {
    new Splide(splides[i], {
      // Desktop on down
      perPage: 5,
      perMove: 5,
      focus: "center", // 0 = left and 'center' = center
      type: "slide", // 'loop' or 'slide'
      gap: ".4em", // space between slides
      arrows: "false", // 'slider' or false
      pagination: false, // 'slider' or false
      speed: 600, // transition speed in miliseconds
      dragAngleThreshold: 30, // default is 30
      autoWidth: false, // for cards with differing widths
      rewind: false, // go back to beginning when reach end
      rewindSpeed: 400,
      waitForTransition: false,
      autoplay: false,
      interval: 5000,
      pauseOnHover: false,
      updateOnMove: true,
      trimSpace: true, // true removes empty space from end of list
      breakpoints: {
        991: {
          // Tablet
          perPage: 2,
          perMove: 1,
          pagination: true,
          gap: "3vw",
          type: "loop"
        },
        767: {
          // Mobile Landscape
          perPage: 1,
          pagination: true,
          autoplay: true,

          gap: "3vw",
          type: "loop"
        },
        479: {
          // Mobile Portrait
          perPage: 1,
          pagination: true,
          autoplay: true,

          gap: "3vw",
          type: "loop"
        }
      }
    }).mount();
  }
}
sliderShopCategories();

function sliderNewArrivals() {
  let splides = $(".slider-shop-new-arrivals");
  for (let i = 0, splideLength = splides.length; i < splideLength; i++) {
    new Splide(splides[i], {
      // Desktop on down
      perPage: 1,
      perMove: 1,
      focus: "center", // 0 = left and 'center' = center
      type: "slide", // 'loop' or 'slide'
      gap: ".4em", // space between slides
      arrows: "false", // 'slider' or false
      pagination: "slider", // 'slider' or false
      speed: 600, // transition speed in miliseconds
      dragAngleThreshold: 30, // default is 30
      autoWidth: false, // for cards with differing widths
      rewind: false, // go back to beginning when reach end
      rewindSpeed: 400,
      waitForTransition: false,
      autoplay: true,
      interval: 5000,
      pauseOnHover: false,
      updateOnMove: true,
      trimSpace: true, // true removes empty space from end of list
      breakpoints: {
        991: {
          // Tablet
          perPage: 2,
          perMove: 1,
          pagination: true,
          gap: "3vw",
          type: "loop"
        },
        767: {
          // Mobile Landscape
          perPage: 1,
          pagination: true,
          autoplay: true,

          gap: "3vw",
          type: "slide"
        },
        479: {
          // Mobile Portrait
          perPage: 1,
          pagination: true,
          autoplay: true,

          gap: "3vw",
          type: "slide"
        }
      }
    }).mount();
  }
}
sliderNewArrivals();

function sliderShopRow() {
  let splides = $(".slider-shop-row");
  for (let i = 0, splideLength = splides.length; i < splideLength; i++) {
    new Splide(splides[i], {
      // Desktop on down
      perPage: 4,
      perMove: 4,
      focus: 0, // 0 = left and 'center' = center
      type: "slide", // 'loop' or 'slide'
      gap: "1.6em", // space between slides
      arrows: "false", // 'slider' or false
      pagination: "slider", // 'slider' or false
      speed: 600, // transition speed in miliseconds
      dragAngleThreshold: 30, // default is 30
      autoWidth: false, // for cards with differing widths
      rewind: false, // go back to beginning when reach end
      rewindSpeed: 400,
      waitForTransition: false,
      autoplay: false,
      interval: 5000,
      pauseOnHover: false,
      updateOnMove: true,
      trimSpace: true, // true removes empty space from end of list
      breakpoints: {
        991: {
          // Tablet
          perPage: 2,
          perMove: 1,
          pagination: true,
          gap: "3vw",
          type: "loop"
        },
        767: {
          // Mobile Landscape
          perPage: 1,
          pagination: true,
          autoplay: false,

          gap: "3vw",
          type: "loop"
        },
        479: {
          // Mobile Portrait
          perPage: 1.5,
          pagination: true,
          autoplay: false,

          gap: "3vw",
          type: "loop"
        }
      }
    }).mount();
  }
}
sliderShopRow();

// swiper JS - Product 1 Column Initialize //

var mySwiper = new Swiper(".swiper-1-col", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  pagination: {
    el: ".pagination-1-col",
    dynamicBullets: true,
    clickable: true
  },
  loop: false,

  grabCursor: false,
  a11y: false,
  spaceBetween: 30,
  allowTouchMove: true
});

//Thumbnail Swiper
var galleryThumbs = new Swiper("#thumb-swiper", {
  spaceBetween: 12,
  slidesPerView: "auto",

  watchSlidesProgress: true,
  centeredSlides: false,
  grabCursor: true,
  allowTouchMove: false,
  a11y: false
});
var galleryTop = new Swiper("#gallery-swiper", {
  spaceBetween: 12,
  pagination: {
    el: ".pagination-1-col",
    dynamicBullets: true,
    clickable: true
  },
  /* This piece of code connects main slider with thumbnail slider*/
  thumbs: {
    swiper: galleryThumbs
  },
  a11y: false,
  loop: true
});

// swiper JS Initialize //

var mySwiper = new Swiper(".swiper1", {
  slidesPerView: 1,
  pagination: {
    el: ".pagination1",
    dynamicBullets: true,
    clickable: true
  },

  slidesPerGroup: 1,
  grabCursor: true,
  a11y: false,
  spaceBetween: 28,
  allowTouchMove: true,
  navigation: {
    nextEl: "#right-button",
    prevEl: "#left-button"
  },
  breakpoints: {
    0: {
      /* when window >=0px - webflow mobile landscape/portriat */
      slidesPerView: 1.5,
      slidesPerGroup: 1,
      spaceBetween: 20,
      loop: false
    },
    480: {
      /* when window >=0px - webflow mobile landscape/portriat */
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 20,
      loop: false
    },
    767: {
      /* when window >= 767px - webflow tablet */ slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 28
    },
    992: {
      /* when window >= 988px - webflow desktop */ slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 20,
      loop: false
    }
  }
});

// swiper JS Initialize //

var mySwiper = new Swiper(".swiper2", {
  slidesPerView: 2,
  pagination: {
    el: ".pagination2",
    dynamicBullets: true,
    clickable: true
  },

  slidesPerGroup: 3,
  grabCursor: true,
  a11y: false,
  spaceBetween: 28,
  allowTouchMove: true,
  navigation: {
    nextEl: "#right-button",
    prevEl: "#left-button"
  },
  breakpoints: {
    0: {
      /* when window >=0px - webflow mobile landscape/portriat */
      slidesPerView: 1.35,
      slidesPerGroup: 1,
      spaceBetween: 20,
      loop: false
    },
    480: {
      /* when window >=0px - webflow mobile landscape/portriat */
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 20,
      loop: false
    },
    767: {
      /* when window >= 767px - webflow tablet */ slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 28
    },
    992: {
      /* when window >= 988px - webflow desktop */ slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 20,
      loop: false
    }
  }
});

// swiper JS - Categories Initialize //

var mySwiper = new Swiper(".swiper3", {
  slidesPerView: 5,
  slidesPerGroup: 5,
  grabCursor: true,
  a11y: false,
  spaceBetween: 28,
  allowTouchMove: true,
  navigation: {
    nextEl: "#right-button",
    prevEl: "#left-button"
  },
  breakpoints: {
    0: {
      /* when window >=0px - webflow mobile landscape/portriat */
      slidesPerView: 1.5,
      slidesPerGroup: 1,
      spaceBetween: 20,
      pagination: {
        el: ".pagination3",
        dynamicBullets: true,
        clickable: true
      },
      loop: false,
      autoplay: {
        delay: 2500
      }
    },
    480: {
      /* when window >=0px - webflow mobile landscape/portriat */
      slidesPerView: 1.5,
      slidesPerGroup: 1,
      spaceBetween: 20,
      pagination: {
        el: ".pagination3",
        dynamicBullets: true,
        clickable: true
      },
      loop: true,
      autoplay: {
        delay: 2500
      }
    },
    767: {
      /* when window >= 767px - webflow tablet */ slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 28,
      pagination: {
        el: ".pagination3",
        dynamicBullets: true,
        clickable: true
      }
    },
    992: {
      /* when window >= 988px - webflow desktop */ slidesPerView: 5,
      slidesPerGroup: 5,
      spaceBetween: 20,
      pagination: {
        el: ".pagination3",
        dynamicBullets: true,
        clickable: true
      },
      loop: false
    }
  }
});

// swiper JS - Other Shroom News Initialize //

var mySwiper = new Swiper(".swiper4", {
  slidesPerView: 3,
  pagination: {
    el: ".pagination4",
    dynamicBullets: true,
    clickable: true
  },
  loop: true,
  slidesPerGroup: 3,
  grabCursor: true,
  a11y: false,
  spaceBetween: 28,
  allowTouchMove: true,
  navigation: {
    nextEl: "#right-button",
    prevEl: "#left-button"
  },
  breakpoints: {
    0: {
      /* when window >=0px - webflow mobile landscape/portriat */
      slidesPerView: 1.5,
      slidesPerGroup: 1,
      spaceBetween: 20
    },
    480: {
      /* when window >=0px - webflow mobile landscape/portriat */
      slidesPerView: 1.5,
      slidesPerGroup: 1,
      spaceBetween: 20
    },
    767: {
      /* when window >= 767px - webflow tablet */ slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 28
    },
    992: {
      /* when window >= 988px - webflow desktop */ slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 20
    }
  }
});

// swiper JS - Product 4 Column Initialize //

var mySwiper = new Swiper(".swiper5", {
  slidesPerView: 4,
  slidesPerGroup: 4,
  pagination: {
    el: ".pagination5",
    dynamicBullets: true,
    clickable: true
  },
  loop: false,

  grabCursor: true,
  a11y: false,
  spaceBetween: 30,
  allowTouchMove: true,
  navigation: {
    nextEl: "#right-button",
    prevEl: "#left-button"
  },
  breakpoints: {
    0: {
      /* when window >=0px - webflow mobile landscape/portriat */
      slidesPerView: 1.5,
      slidesPerGroup: 1,
      pagination: {
        el: ".pagination5",
        dynamicBullets: true,
        clickable: true
      },
      spaceBetween: 20
    },
    480: {
      /* when window >=0px - webflow mobile landscape/portriat */
      slidesPerView: 1.5,
      slidesPerGroup: 1,
      spaceBetween: 20
    },
    767: {
      /* when window >= 767px - webflow tablet */ slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 28
    },
    992: {
      /* when window >= 988px - webflow desktop */ slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 20
    }
  }
});

// swiper JS - Shop page Module 1 //

var mySwiper = new Swiper(".shop__module-1", {
  slidesPerView: 4,
  slidesPerGroup: 4,
  pagination: {
    el: ".module-1-pagination, .module-2-pagination",
    dynamicBullets: true,
    clickable: true
  },
  loop: false,

  grabCursor: true,
  a11y: false,
  spaceBetween: 30,
  allowTouchMove: true,
  navigation: {
    nextEl: "#right-button",
    prevEl: "#left-button"
  },
  breakpoints: {
    0: {
      /* when window >=0px - webflow mobile landscape/portriat */
      slidesPerView: 1,
      slidesPerGroup: 1,
      pagination: {
        el: ".module-1-pagination, .module-2-pagination",
        dynamicBullets: true,
        clickable: true
      },
      spaceBetween: 20
    },
    480: {
      /* when window >=0px - webflow mobile landscape/portriat */
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 20
    },
    767: {
      /* when window >= 767px - webflow tablet */ slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 28
    }
  }
});

// swiper JS - Shop page Module 2 //

var mySwiper = new Swiper(".shop__module-2", {
  slidesPerView: 4,
  slidesPerGroup: 4,
  pagination: {
    el: ".module-2-pagination",
    dynamicBullets: true,
    clickable: true
  },
  loop: false,

  grabCursor: true,
  a11y: false,
  spaceBetween: 30,
  allowTouchMove: true,
  navigation: {
    nextEl: "#right-button",
    prevEl: "#left-button"
  },
  breakpoints: {
    0: {
      /* when window >=0px - webflow mobile landscape/portriat */
      slidesPerView: 1.5,
      slidesPerGroup: 1,
      pagination: {
        el: ".module-2-pagination",
        dynamicBullets: true,
        clickable: true
      },
      spaceBetween: 20
    },
    480: {
      /* when window >=0px - webflow mobile landscape/portriat */
      slidesPerView: 1.5,
      slidesPerGroup: 1,
      spaceBetween: 20
    },
    767: {
      /* when window >= 767px - webflow tablet */ slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 28
    }
  }
});

// swiper JS - Shop page Module 3 //

var mySwiper = new Swiper(".shop__module-3", {
  slidesPerView: 4,
  slidesPerGroup: 4,
  pagination: {
    el: ".module-3-pagination",
    dynamicBullets: true,
    clickable: true
  },
  loop: false,

  grabCursor: true,
  a11y: false,
  spaceBetween: 30,
  allowTouchMove: true,
  navigation: {
    nextEl: "#right-button",
    prevEl: "#left-button"
  },
  breakpoints: {
    0: {
      /* when window >=0px - webflow mobile landscape/portriat */
      slidesPerView: 1.5,
      slidesPerGroup: 1,
      pagination: {
        el: ".module-3-pagination",
        dynamicBullets: true,
        clickable: true
      },
      spaceBetween: 20
    },
    480: {
      /* when window >=0px - webflow mobile landscape/portriat */
      slidesPerView: 1.5,
      slidesPerGroup: 1,
      spaceBetween: 20
    },
    767: {
      /* when window >= 767px - webflow tablet */ slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 28
    }
  }
});

// swiper JS - Shop page Module 4 //

var mySwiper = new Swiper(".shop__module-4", {
  slidesPerView: 4,
  slidesPerGroup: 4,
  pagination: {
    el: ".module-4-pagination",
    dynamicBullets: true,
    clickable: true
  },
  loop: false,

  grabCursor: true,
  a11y: false,
  spaceBetween: 30,
  allowTouchMove: true,
  navigation: {
    nextEl: "#right-button",
    prevEl: "#left-button"
  },
  breakpoints: {
    0: {
      /* when window >=0px - webflow mobile landscape/portriat */
      slidesPerView: 1.5,
      slidesPerGroup: 1,
      pagination: {
        el: ".module-4-pagination",
        dynamicBullets: true,
        clickable: true
      },
      spaceBetween: 20
    },
    480: {
      /* when window >=0px - webflow mobile landscape/portriat */
      slidesPerView: 1.5,
      slidesPerGroup: 1,
      spaceBetween: 20
    },
    767: {
      /* when window >= 767px - webflow tablet */ slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 28
    }
  }
});

// swiper JS - Shop page Module 5 //

var mySwiper = new Swiper(".shop__module-5", {
  slidesPerView: 4,
  slidesPerGroup: 4,
  pagination: {
    el: ".module-5-pagination",
    dynamicBullets: true,
    clickable: true
  },
  loop: false,

  grabCursor: true,
  a11y: false,
  spaceBetween: 30,
  allowTouchMove: true,
  navigation: {
    nextEl: "#right-button",
    prevEl: "#left-button"
  },
  breakpoints: {
    0: {
      /* when window >=0px - webflow mobile landscape/portriat */
      slidesPerView: 1.5,
      slidesPerGroup: 1,
      pagination: {
        el: ".module-5-pagination",
        dynamicBullets: true,
        clickable: true
      },
      spaceBetween: 20
    },
    480: {
      /* when window >=0px - webflow mobile landscape/portriat */
      slidesPerView: 1.5,
      slidesPerGroup: 1,
      spaceBetween: 20
    },
    767: {
      /* when window >= 767px - webflow tablet */ slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 28
    }
  }
});

// swiper JS - Shop page Module 5 //

var mySwiper = new Swiper(".shop__module-6", {
  slidesPerView: 4,
  slidesPerGroup: 4,
  pagination: {
    el: ".module-6-pagination",
    dynamicBullets: true,
    clickable: true
  },
  loop: false,

  grabCursor: true,
  a11y: false,
  spaceBetween: 30,
  allowTouchMove: true,
  navigation: {
    nextEl: "#right-button",
    prevEl: "#left-button"
  },
  breakpoints: {
    0: {
      /* when window >=0px - webflow mobile landscape/portriat */
      slidesPerView: 1.5,
      slidesPerGroup: 1,
      pagination: {
        el: ".module-6-pagination",
        dynamicBullets: true,
        clickable: true
      },
      spaceBetween: 20
    },
    480: {
      /* when window >=0px - webflow mobile landscape/portriat */
      slidesPerView: 1.5,
      slidesPerGroup: 1,
      spaceBetween: 20
    },
    767: {
      /* when window >= 767px - webflow tablet */ slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 28
    }
  }
});

// swiper JS - Product 4 Column Initialize //

var mySwiper = new Swiper(".swiper6", {
  slidesPerView: 3,
  slidesPerGroup: 3,
  pagination: {
    el: ".pagination6",
    dynamicBullets: true,
    clickable: true
  },
  loop: false,

  grabCursor: true,
  a11y: false,
  spaceBetween: 30,
  allowTouchMove: true,
  navigation: {
    nextEl: "#right-button",
    prevEl: "#left-button"
  },
  breakpoints: {
    0: {
      /* when window >=0px - webflow mobile landscape/portriat */
      slidesPerView: 1.5,
      slidesPerGroup: 1,
      pagination: {
        el: ".pagination6",
        dynamicBullets: true,
        clickable: true
      },
      spaceBetween: 20
    },
    480: {
      /* when window >=0px - webflow mobile landscape/portriat */
      slidesPerView: 1.5,
      slidesPerGroup: 1,
      spaceBetween: 20
    },
    767: {
      /* when window >= 767px - webflow tablet */ slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 28
    },
    992: {
      /* when window >= 988px - webflow desktop */ slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 20
    }
  }
});
