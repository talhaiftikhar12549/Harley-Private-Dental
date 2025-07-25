
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

var aboutUSSwiper = new Swiper(".about-us-swiper", {
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 0,
  mousewheel: true,
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  // breakpoints: {
  //   768: {
  //     slidesPerView: 2,
  //   },
  //   1024: {
  //     slidesPerView: 3,
  //   },
  // },
});

//Gallery
lightGallery(document.getElementById("aniimated-thumbnials"), {
  thumbnail: true,
});

// Moblie Menu
// $(document).ready(function () {
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
// });

//acordian
const accordionButtons = document.querySelectorAll(".accordion-button");

accordionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.parentElement;
    item.classList.toggle("active");
  });
});

// about page menu
const abMenuToggle = document.getElementById("ab-menu-toggle");
const abSidebarMenu = document.getElementById("ab-sidebar-menu");
const abMenuBackdrop = document.getElementById("ab-menu-backdrop");

abMenuToggle.addEventListener("click", function () {
  alert("Menu Toggle Clicked");
  abSidebarMenu.classList.toggle("ab-active");
  abMenuBackdrop.classList.toggle("ab-active");
  this.classList.toggle("ab-open");
});

abMenuBackdrop.addEventListener("click", function () {
  abSidebarMenu.classList.remove("ab-active");
  abMenuBackdrop.classList.remove("ab-active");
  abMenuToggle.classList.remove("ab-open");
});

// GSAP

// window.addEventListener("DOMContentLoaded", () => {
// gsap.registerPlugin(ScrollTrigger);
// const scrollSections = document.querySelectorAll(".scroll-section");
// scrollSections.forEach((section) => {
//   const scrollwrapper = section.querySelector(".scrollwrapper");
//   const items = scrollwrapper.querySelectorAll(".scrollitem");
//   let direction = null;
//   if (section.classList.contains("vertical-section")) {
//     direction = "vertical";
//   } else if (section.classList.contains("horizontal-section")) {
//     direction = "horizontal";
//   }

//   initScroll(section, items, direction);
// });
// function initScroll(section, items, direction) {
//   // Set initial transform
//   items.forEach((item, index) => {
//     if (index !== 0) {
//       direction === "horizontal"
//         ? gsap.set(item, { xPercent: 100 })
//         : gsap.set(item, { yPercent: 100 });
//     }
//   });
//   // Calculate scroll length
//   const scrollLength = items.length * window.innerHeight;
//   // Fix overlap issue: add padding bottom dynamically
//   section.style.paddingBottom = `${scrollLength}px`;
//   // Timeline animation
//   const timeline = gsap.timeline({
//     scrollTrigger: {
//       trigger: section,
//       pin: true,
//       start: "top top",
//       end: `+=${scrollLength}`,
//       scrub: 1,
//       invalidateOnRefresh: true,
//       // markers: true, // Uncomment for debugging
//     },
//     defaults: { ease: "none" },
//   });
//   // Animate each item
//   items.forEach((item, index) => {
//     timeline.to(item, {
//       scale: 0.9,
//       borderRadius: "10px",
//     });

//     if (index + 1 < items.length) {
//       direction === "horizontal"
//         ? timeline.to(items[index + 1], { xPercent: 0 }, "<")
//         : timeline.to(items[index + 1], { yPercent: 0 }, "<");
//     }
//   });
// }
// // Animate all .section elements except scroll sections
// document
//   .querySelectorAll(".section:not(.vertical-section):not(.horizontal-section)")
//   .forEach((section) => {
//     gsap.from(section.children, {
//       opacity: 0,
//       y: 50,
//       duration: 1,
//       stagger: 0.2,
//       ease: "power2.out",
//       scrollTrigger: {
//         trigger: section,
//         start: "top 85%",
//         toggleActions: "play none none reverse",
//       },
//     });
//   });
// });

window.addEventListener("DOMContentLoaded", () => {
  alert("Script loaded successfully!");
});