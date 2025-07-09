// $(document).ready(function () {
//       $(".testimonial-slider").slick({
//         dots: false,
//         arrows: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         adaptiveHeight: true,
//         autoplay: false, // 🔄 Enable autoplay
//         autoplaySpeed: 4000, // ⏱ Change slide every 4 seconds
//         prevArrow:
//           '<button type="button" class="slick-prev"><img src="asset/home/pre.svg" /></button>',
//         nextArrow:
//           '<button type="button" class="slick-next"><img src="asset/home/next.svg" /></button>',
//       });
//     });

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


    // Moblie Menu
    document.addEventListener("DOMContentLoaded", function () {
      const toggleBtn = document.getElementById("menuToggle");
      const mobileNav = document.getElementById("navbar");

      if (toggleBtn && mobileNav) {
        // Toggle menu on button click
        toggleBtn.addEventListener("click", (e) => {
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
    });



    // scroll functionality

     document.addEventListener("DOMContentLoaded", () => {
      const wrapper = document.getElementById("dentalWrapper");
      const leftScroll = document.getElementById("leftScroll");
      const rightScroll = document.getElementById("rightScroll");

      const scrollStep = 295;
      let isScrollLocked = false;
      let isWrapperVisible = false;
      let isMouseOverWrapper = false;

      // Scroll right section to bottom initially
      rightScroll.scrollTop = rightScroll.scrollHeight;

      const isAtTop = () => leftScroll.scrollTop <= 0;

      const isAtBottom = () =>
        Math.ceil(leftScroll.scrollTop) >=
        leftScroll.scrollHeight - leftScroll.clientHeight;

      const trapScroll = (e) => {
        // 👇 Activate scroll only if wrapper is visible AND mouse is over wrapper
        if (!isWrapperVisible || !isMouseOverWrapper) return;

        const direction = e.deltaY > 0 ? 1 : -1;

        if (
          (isAtTop() && direction === -1) ||
          (isAtBottom() && direction === 1)
        ) {
          return; // Let page scroll naturally
        }

        e.preventDefault();

        if (!isScrollLocked) {
          isScrollLocked = true;

          leftScroll.scrollTop += scrollStep * direction;
          rightScroll.scrollTop -= scrollStep * direction;

          setTimeout(() => {
            isScrollLocked = false;
          }, 300);
        }
      };

      // IntersectionObserver to check if dentalWrapper is in viewport
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            isWrapperVisible = entry.isIntersecting;
          });
        },
        {
          threshold: 0.7, // At least 70% should be visible
        }
      );

      observer.observe(wrapper);

      // Mouse enter/leave listeners
      wrapper.addEventListener("mouseenter", () => {
        isMouseOverWrapper = true;
      });

      wrapper.addEventListener("mouseleave", () => {
        isMouseOverWrapper = false;
      });

      // Global scroll listener
      window.addEventListener("wheel", trapScroll, { passive: false });
    });
  


