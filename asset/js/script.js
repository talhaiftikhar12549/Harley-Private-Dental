
var testimonialSwiper = new Swiper(".testimonial-slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  speed: 500,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var ourPractice = new Swiper(".ourPractice", {
  slidesPerView: 6,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    // When window width is >= 1200px
    1200: {
      slidesPerView: 6,
    },
    // When window width is >= 1024px
    1024: {
      slidesPerView: 4,
    },
    // When window width is >= 768px
    768: {
      slidesPerView: 3,
    },
    // When window width is >= 480px
    480: {
      slidesPerView: 2,
    },
    // When window width is < 480px
    0: {
      slidesPerView: 1,
    },
  },
});

var swiper = new Swiper(".teamSwiperSlider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  initialSlide: 2,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 20,
    stretch: -20,
    depth: 120,
    modifier: 2,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

//Gallery
lightGallery(document.getElementById("aniimated-thumbnials"), {
  thumbnail: true,
});

// Moblie Menu
$(document).ready(function () {
  const toggleBtn = document.getElementById("menuToggle");
  const mobileNav = document.getElementById("navbar");

  if (toggleBtn && mobileNav) {
    // Toggle menu on button click
    toggleBtn.addEventListener("click", (e) => {
      console.log("hello");
      e.stopPropagation(); // prevent document click
      const isOpen = mobileNav.classList.toggle("open");
      toggleBtn.innerHTML = isOpen ? "&times;" : "&#9776;";
    });

    // Close menu if click is outside
    document.addEventListener("click", (e) => {
      const isClickInsideMenu = mobileNav.contains(e.target);
      const isClickOnToggle = toggleBtn.contains(e.target);

      if (
        !isClickInsideMenu &&
        !isClickOnToggle &&
        mobileNav.classList.contains("open")
      ) {
        mobileNav.classList.remove("open");
        toggleBtn.innerHTML = "&#9776;";
      }
    });
  } else {
    console.warn("menuToggle or navbar not found in DOM");
  }
})
// scroll functionality

