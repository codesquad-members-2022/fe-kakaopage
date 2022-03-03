import { $, insertIntoMain } from "../utils.js";

const BANNER_WIDTH = 700;
let curBanner;
let autoSlideTimer;
let clickable;

const resetSlideTimer = () => {
  curBanner = 1;
  if (autoSlideTimer) {
    clearTimeout(autoSlideTimer);
  }
  if (clickable) {
    clickable = null;
  }
};

const getBannerImg = (data, idx) => {
  const img = `<div class="position-rel banner" data-index="${idx + 1}">
  <div class="banner-img-container">
    <img class="banner-img" src="${data.img}" alt="${data.title}"/>
  </div>
  <div class="banner-detail-container text-color--white">
    <h3 class="banner-title">${data.title}</h3>
    <div class="layout-center banner-detail-text-container">
      <img class="banner-detail-img" src="${data.tag}"/>
      <span class="layout-center banner-detail-text">
        <img class="banner-detail-icon"
        src="https://static-page.kakao.com/static/pc/ico-bigthum-wait.svg?aeb2837e99c7d1055cbc3444433f4858"/>
      ${data.category}</span>
      <span>|</span>
      <span class="layout-center banner-detail-text">
        <img class="banner-detail-icon"
        src="https://static-page.kakao.com/static/pc/ico-bigthum-person.svg?100328455b1454b0ffff555caf02e71e"/>
      ${data.readers}만명</span>
    </div>
  </div>
  <p class="banner-bottom-text">${data.desc}</p>
</div>`;

  return img;
};

const getBannerImgs = (dataOfBanner) => {
  const imgs = dataOfBanner.reduce((acc, data, idx) => {
    const img = getBannerImg(data, idx);
    return acc + img;
  }, "");

  return imgs;
};

const insertBannerImgs = (dataOfBanner) => {
  const imgs = getBannerImgs(dataOfBanner);

  const bannersContainer = $("#banners-container");
  bannersContainer.innerHTML = imgs;

  const firstBanner = bannersContainer.firstChild;
  const firstBannerClone = firstBanner.cloneNode(true);
  firstBannerClone.dataset.index = dataOfBanner.length + 1;

  const lastBanner = bannersContainer.lastChild;
  const lastBannerClone = lastBanner.cloneNode(true);
  lastBannerClone.dataset.index = 0;

  bannersContainer.insertBefore(lastBannerClone, firstBanner);
  bannersContainer.appendChild(firstBannerClone);
};

const slideLeft2Right = (dataOfBanner) => {
  onAnimation();
  curBanner -= 1;
  let curIdx = Number($("#banner-count").textContent);

  moveBanners(curIdx - 1);

  if (curIdx === 1) {
    curIdx = dataOfBanner.length + 1;
  }

  $("#banner-count").textContent = curIdx - 1;
};

const slideRight2Left = (dataOfBanner) => {
  onAnimation();
  curBanner += 1;
  let curIdx = Number($("#banner-count").textContent);

  moveBanners(curIdx + 1);

  if (curIdx === dataOfBanner.length) {
    curIdx = 0;
  }

  $("#banner-count").textContent = curIdx + 1;
};

const startAutoSlide = (dataOfBanner) => {
  autoSlideTimer = setTimeout(() => {
    slideRight2Left(dataOfBanner);
    startAutoSlide(dataOfBanner);
  }, 3000);
};

const relocateBanner = (dataOfBanner) => {
  if (curBanner === dataOfBanner.length + 1) {
    offAnimation();
    moveBanners();
    curBanner = 1;
  }

  if (curBanner === 0) {
    offAnimation();
    moveBanners(dataOfBanner.length);
    curBanner = dataOfBanner.length;
  }
};

const slideEvent = (target, dataOfBanner) => {
  clearTimeout(autoSlideTimer);
  startAutoSlide(dataOfBanner);
  if (!clickable) {
    if (target.id === "banner-left") {
      slideLeft2Right(dataOfBanner);
    } else {
      slideRight2Left(dataOfBanner);
    }
    clickable = setTimeout(() => {
      clickable = null;
    }, 300);
  }
};

const addSlideEvL = (dataOfBanner) => {
  $("#banner-left").addEventListener("click", ({ target }) =>
    slideEvent(target, dataOfBanner)
  );
  $("#banner-right").addEventListener("click", ({ target }) =>
    slideEvent(target, dataOfBanner)
  );
  $("#banners-container").addEventListener("transitionend", () =>
    relocateBanner(dataOfBanner)
  );
};

const moveBanners = (loc = 1) => {
  $("#banners-container").style.transform = `translateX(${
    -BANNER_WIDTH * loc
  }px)`;
};

const onAnimation = () => {
  $("#banners-container").style.transitionDuration = "0.3s";
};

const offAnimation = () => {
  $("#banners-container").style.transitionDuration = "0s";
};

const createBanner = (dataOfBanner) => {
  const banner = `<div class="center container position-rel">
  <svg
    class="arrow-icon arrow--round-border arrow-left arrow--white" id="banner-left"
    xmlns="http://www.w3.org/2000/svg"
    class="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor">
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M15 19l-7-7 7-7"/>
  </svg>
  <svg
    class="arrow-icon arrow--round-border arrow-right arrow--white" id="banner-right"
    xmlns="http://www.w3.org/2000/svg"
    class="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor">
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M9 5l7 7-7 7"/>
  </svg>
  <div>
    <div class="overflow-hd">
      <div class="side-by-side" id="banners-container">
      </div>
    </div>
  </div>
  <div class="banner-count-container">
    <span class="banner-count text-color--light-gray" id="banner-count">
      1</span><span class="banner-count text-color--light-gray">/${dataOfBanner.length}
    </span>
  </div>
</div>`;

  resetSlideTimer();
  insertIntoMain(banner);
  insertBannerImgs(dataOfBanner);
  moveBanners();
  addSlideEvL(dataOfBanner);
  startAutoSlide(dataOfBanner);
};

const createSmallBanner = (data) => {
  const smallBanner = `<div class="position-rel round-container">
  <img
    class="banner-img"
    src="${data.img}"
    alt="${data.title}"
  />
  <div class="banner-detail-container--small text-color--white">
    <h3 class="banner-title--small">${data.title}</h3>
    <div class="layout-center banner-detail-text-container">
      <img
        class="banner-detail-img--small"
        src="https://static-page.kakao.com/static/pc/badge-bigthum-event.svg?2c00fc6eb18517e8f006adfaf464530b"
      />
      <span
        class="layout-center banner-detail-text banner-detail-text--small"
        ><img
          class="banner-detail-icon banner-detail-icon--small"
          src="https://static-page.kakao.com/static/pc/ico-bigthum-wait.svg?aeb2837e99c7d1055cbc3444433f4858"
        />${data.category}</span
      >
      <span class="banner-detail-text--small">|</span>
      <span
        class="layout-center banner-detail-text banner-detail-text--small"
      >
        <img
          class="banner-detail-icon banner-detail-icon--small"
          src="https://static-page.kakao.com/static/pc/ico-bigthum-person.svg?100328455b1454b0ffff555caf02e71e"
        />${data.readers}만명</span
      >
    </div>
  </div>
  <p class="banner-bottom-text banner-bottom-text--small">
    ${data.desc}
  </p>
</div>`;

  return smallBanner;
};

const createSmallBannerBlock = (dataOfsBanner) => {
  const smallBanner = createSmallBanner(dataOfsBanner);
  const smallBannerBlock = `<div class="center container contents-container">
  <header class="header-container">
    <h2 class="mr--auto">기대신작 TOP</h2>
    <span class="text-color--gray">더보기</span>
    <svg
      class="arrow-with-text arrow--light-gray"
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9 5l7 7-7 7"
      />
    </svg>
  </header>
  <div class="grid-2col">
    ${smallBanner}
  </div>
</div>`;
  insertIntoMain(smallBannerBlock);
};

export { createBanner, createSmallBannerBlock };
