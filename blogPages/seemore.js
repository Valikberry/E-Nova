const giftButton = document.querySelector(".giftButton__gifts");
const seeMoreBtn = document.querySelector(".giftButton__SeeMore");

// Pass the path prefix like './' or '../' depending on where the HTML file is
const giftButtonBox = (pathPrefix = './') => {
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

// Example usage for root HTML file

seeMoreBtn?.addEventListener("click", () => {
    giftButton.innerHTML += giftButtonBox('../'); // for root HTML
  });


  const searchBtns = document.querySelectorAll(".navSearchBar");
const searchBar = document.querySelector(".headerSearchBar__input");

searchBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation(); 
    searchBar.classList.add("showSearchBar");
  });
});


document.addEventListener("click", (e) => {
  if (!searchBar.contains(e.target) && ![...searchBtns].some(btn => btn.contains(e.target))) {
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

const menuBar = document.querySelector(".nav__hamburger");
const menuIcon = document.querySelector(".nav__burgerIcon");
const navItems = document.querySelector(".nav__list");

menuBar?.addEventListener("click", () => {
  navItems.classList.toggle("active");
  menuIcon.classList.toggle("fa-times");
  menuIcon.classList.toggle("fa-bars");
});