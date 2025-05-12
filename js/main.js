"use strict";
// NavMenu
const menuBar = document.querySelector(".nav__hamburger");
const menuIcon = document.querySelector(".nav__burgerIcon");
const navItems = document.querySelector(".nav__list");

menuBar?.addEventListener("click", () => {
  navItems.classList.toggle("active");
  menuIcon.classList.toggle("fa-times");
  menuIcon.classList.toggle("fa-bars");
});

// Gift Buttons
const giftButton = document.querySelector(".giftButton__gifts");
const seeMoreBtn = document.querySelector(".giftButton__SeeMore");

// Pass the path prefix like './' or '../' depending on where the HTML file is
const giftButtonBox = (pathPrefix = "./") => {
  return `
    <div class="blogGifts__box">
      <img
        src="${pathPrefix}Images/giftbox-1.webp"
        class="blogGifts__img"
        alt="Giftbox"
      />
      <div class="blogGifts__caption">
        <p class="blogCaption__text">March 20, 2025</p>
        <p class="blogCaption__text">Portable Charger</p>
      </div>
      <div class="blogGifts__title">
        <a href="${pathPrefix}blogPost.html">
          How to Maintain Your Hybrid Inverter for Maximum Efficiency
        </a>
      </div>
    </div>
    <div class="blogGifts__box">
      <img
        src="${pathPrefix}Images/giftbox-2.webp"
        class="blogGifts__img"
        alt="Giftbox"
      />
      <div class="blogGifts__caption">
        <p class="blogCaption__text">March 20, 2025</p>
        <p class="blogCaption__text">Outdoor Power</p>
      </div>
      <div class="blogGifts__title">
        <a href="${pathPrefix}blogPost.html">
          How Solar Charging Improves Automotive Battery Performance in Nigeria
        </a>
      </div>
    </div>
    <div class="blogGifts__box">
      <img
        src="${pathPrefix}Images/giftbox-3.webp"
        class="blogGifts__img"
        alt="Giftbox"
      />
      <div class="blogGifts__caption">
        <p class="blogCaption__text">March 20, 2025</p>
        <p class="blogCaption__text">Portable Charger</p>
      </div>
      <div class="blogGifts__title">
        <a href="${pathPrefix}blogPost.html">
          Harnessing Solar Energy: Top Innovations in Renewable Power Solutions
        </a>
      </div>
    </div>`;
};

seeMoreBtn?.addEventListener("click", () => {
  giftButton.innerHTML += giftButtonBox("./");
});

// Scroll to top buttons
const scrollToTop = document.querySelector(".scrollToTop");
// Displaying the scroll to top button when window gets scrolled by 500px
const ScrollUp = () => {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    scrollToTop.style.display = "flex";
  } else {
    scrollToTop.style.display = "none";
  }
};
if (ScrollUp) {
  window.addEventListener("scroll", ScrollUp);
}
// When the user clicks on the button, scroll to the top of the document
scrollToTop?.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// FAQ PAGE
const faqQuestions = document.querySelectorAll(".faq__question");
const faqAnswers = document.querySelectorAll(".faq__answer");

// Initialize the first FAQ block for the FAQ page
faqQuestions?.forEach((question, index) => {
  question.addEventListener("click", () => {
    // Close all FAQ blocks except the clicked one
    faqQuestions.forEach((q, i) => {
      if (i !== index) {
        q.classList.remove("faq__question--active");
        faqAnswers[i].classList.remove("faq__answer--active");
      }
    });

    // Toggle the clicked FAQ block
    question.classList.toggle("faq__question--active");
    faqAnswers[index].classList.toggle("faq__answer--active");
  });
});

//Open the first faq initially for blog post page
const blogPostFirstFaqQues = document.querySelector("#blogPost__faqQuestion");
const blogPostFirstFaqAns = document.querySelector("#blogPost__faqAnswer");
blogPostFirstFaqQues?.classList.add("faq__question--active");
blogPostFirstFaqAns?.classList.add("faq__answer--active");

// Landing Page title change every 1 sec
// const landingPageTitle = document.querySelector(".landingPage__dynamicTitle");
// const landingPageTitles = [
//   "Banker",
//   "Mom",
//   "Dad",
//   "Brother",
//   "Teacher",
//   "Pastor",
//   "Uncle",
//   "Aunt",
//   "Friend",
//   "Sister",
//   "Coach",
// ];

// const rotateLandingPageTitle = () => {
//   let currentIndex = 0;

//   const updateTitle = () => {
//     landingPageTitle.innerText = landingPageTitles[currentIndex];
//     currentIndex = (currentIndex + 1) % landingPageTitles.length;
//   };

//   setInterval(updateTitle, 1000); // Change title every 1 seconds
// };

// if (landingPageTitle) {
//   rotateLandingPageTitle();
// }

//Blog Post popup
const blogPopupBtn = document.querySelector(".blogPost__amazonButton");
const blogPopupClose = document.querySelector(".buyFromStore__popupClose");
const blogPopupContent = document.querySelector(
  ".buyFromStore__popupContainer"
);

blogPopupBtn?.addEventListener("click", () => {
  blogPopupContent.classList.add("buyFromStore__popupShow");
});

blogPopupClose?.addEventListener("click", () => {
  blogPopupContent.classList.remove("buyFromStore__popupShow");
});

// ABOUT PAGE
const aboutFAQ_Questions = document.querySelectorAll("#what__weOffer__title");
const aboutFAQ_answers = document.querySelectorAll(".what__weOffer__answer");

aboutFAQ_Questions?.forEach((question, index) => {
  question.addEventListener("click", () => {
    question.classList.toggle("what__weOffer__title--active");
    aboutFAQ_answers[index].classList.toggle("what__weOffer__answer--active");
  });
});

//For header searchBar

const searchBtns = document.querySelectorAll(".navSearchBar");
const searchBar = document.querySelector(".headerSearchBar__input");

searchBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    searchBar.classList.add("showSearchBar");
  });
});

document.addEventListener("click", (e) => {
  if (
    !searchBar.contains(e.target) &&
    ![...searchBtns].some((btn) => btn.contains(e.target))
  ) {
    searchBar.classList.remove("showSearchBar");
  }
});

searchBar.addEventListener("click", (e) => {
  e.stopPropagation();
});

document.addEventListener("DOMContentLoaded", function () {
  const searchButton = document.querySelector(".navSearchBar");
  const searchForm = document.querySelector(".headerSearchBar__input");

  searchButton.addEventListener("click", function () {
    searchForm.classList.toggle("show");
  });
});

//Landing Page choose gifts scroll container
const landingScrollContainer = document.querySelector(
  ".landingPage__giftBlocks"
);
const landingScrollLeft = document.querySelector(".scroll__leftBtn");
const landingScrollRight = document.querySelector(".scroll__rightBtn");

landingScrollLeft?.addEventListener("click", () => {
  landingScrollContainer.scrollLeft -= 150;
});

landingScrollRight?.addEventListener("click", () => {
  landingScrollContainer.scrollLeft += 150;
});

// Virtual Gift Ideas
function toggleClass(element, className) {
  element.classList.toggle(className);
}

function addClass(element, className) {
  element.classList.add(className);
}

function removeClass(element, className) {
  element.classList.remove(className);
}

// Scrolling the blog button groups
const blogButtonGroups = document.querySelector(".blog__buttonGroups");
const blogButtonLeft = document.querySelector("#blog__buttonScrollLeft");
const blogButtonRight = document.querySelector("#blog__buttonScrollRight");

blogButtonLeft?.addEventListener("click", () => {
  blogButtonGroups.scrollLeft -= 150;
});

blogButtonRight?.addEventListener("click", () => {
  blogButtonGroups.scrollLeft += 150;
});

//Video Page youtubeShorts scroll container
const youtubeScrollContainer = document.querySelector(
  ".youtubeShorts__scrollContent"
);
const shortsScrollLeft = document.querySelector("#youtubeShorts__scrollLeft");
const shortsScrollRight = document.querySelector("#youtubeShorts__scrollRight");

shortsScrollLeft?.addEventListener("click", () => {
  youtubeScrollContainer.scrollLeft -= 250;
});

shortsScrollRight?.addEventListener("click", () => {
  youtubeScrollContainer.scrollLeft += 250;
});

//Video Page Category
const youtubeAllVideos = document.querySelector("#allYoutubeVideos");

const youtubeVideos = document.querySelector("#youtubeVideos");

const youtubeShorts = document.querySelector("#youtubeShorts");

const youtubeShortsContainer = document.querySelector(
  "#youTubeShorts__mainContainer"
);

const youtubeVideosContainer = document.querySelector(
  "#youtubeVideos__mainContainer"
);

const handleVideoTypeClick = (event) => {
  const target = event.target;

  if (target === youtubeAllVideos) {
    youtubeShortsContainer.style.display = "block";
    youtubeVideosContainer.style.display = "block";
  } else if (target === youtubeVideos) {
    youtubeShortsContainer.style.display = "none";
    youtubeVideosContainer.style.display = "block";
  } else if (target === youtubeShorts) {
    youtubeShortsContainer.style.display = "block";
    youtubeVideosContainer.style.display = "none";
  }

  youtubeAllVideos.classList.toggle(
    "videoPage__type__link--active",
    target === youtubeAllVideos
  );
  youtubeVideos.classList.toggle(
    "videoPage__type__link--active",
    target === youtubeVideos
  );
  youtubeShorts.classList.toggle(
    "videoPage__type__link--active",
    target === youtubeShorts
  );
};

document.addEventListener("click", handleVideoTypeClick);

// SWIPER
document.addEventListener("DOMContentLoaded", function () {
  const giftSwiper = new Swiper(".giftSwiper", {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: ".scroll__rightBtn",
      prevEl: ".scroll__leftBtn",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
});

let reviewSwiper = null;

function handleReviewSwiper() {
  const container = document.querySelector(".landingPage__reviewsBlock");
  const wrapper = container.querySelector(".reviews-wrapper");
  const isMobile = window.innerWidth <= 805;

  if (isMobile && !reviewSwiper) {
    // Initialize Swiper for mobile screens
    container.classList.add("swiper");
    wrapper.classList.add("swiper-wrapper");
    wrapper
      .querySelectorAll(".landingPage__review")
      .forEach((el) => el.classList.add("swiper-slide"));

    reviewSwiper = new Swiper(container, {
      slidesPerView: 1, // 1 slide for mobile
      spaceBetween: 20,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
    });
  } else if (!isMobile && !reviewSwiper) {
    // Initialize Swiper for larger screens (greater than 805px)
    container.classList.add("swiper");
    wrapper.classList.add("swiper-wrapper");
    wrapper
      .querySelectorAll(".landingPage__review")
      .forEach((el) => el.classList.add("swiper-slide"));

    reviewSwiper = new Swiper(container, {
      slidesPerView: 2, // 2 slides for larger screens
      spaceBetween: 20,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
    });
  } else if (isMobile && reviewSwiper) {
    // Destroy Swiper on mobile screens
    reviewSwiper.destroy(true, true);
    reviewSwiper = null;

    // Remove Swiper classes
    container.classList.remove("swiper");
    wrapper.classList.remove("swiper-wrapper");
    wrapper
      .querySelectorAll(".landingPage__review")
      .forEach((el) => el.classList.remove("swiper-slide"));
  } else if (!isMobile && reviewSwiper) {
    // Update Swiper configuration for larger screens (greater than 805px)
    reviewSwiper.params.slidesPerView = 2; // 2 slides for large screens
    reviewSwiper.update();
  }
}

// Initialize Swiper on page load and handle resizing
document.addEventListener("DOMContentLoaded", () => {
  handleReviewSwiper();
  window.addEventListener("resize", handleReviewSwiper);
});

//END OF SWIPER

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".dropdown__toggle");
  const content = document.querySelector(".dropdown__content");

  toggle.addEventListener("click", () => {
    content.classList.toggle("active");
    toggle.classList.toggle("open");
  });
});
