import { insertIntoMain } from "../utils.js";
import { dataOfsBanner } from "../data/home/smallBanner.js";

const createBanner = () => {
  const banner = `<div class="center container banner-container">
  <img
    class="banner-img"
    src="https://dn-img-page.kakao.com/download/resource?kid=boPfot/hzacdN1xHr/Erv1JHofHUV7eK46ofjynk"
    alt="도사강호"
  />
  <svg
    class="arrow-icon arrow--round-border arrow-left arrow--white"
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
      d="M15 19l-7-7 7-7"
    />
  </svg>
  <svg
    class="arrow-icon arrow--round-border arrow-right arrow--white"
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
  <div class="banner-detail-container text-color--white">
    <h3 class="banner-title">도사강호</h3>
    <div class="layout-center banner-detail-text-container">
      <img
        class="banner-detail-img"
        src="https://static-page.kakao.com/static/pc/badge-bigthum-event.svg?2c00fc6eb18517e8f006adfaf464530b"
      />
      <span class="layout-center banner-detail-text"
        ><img
          class="banner-detail-icon"
          src="https://static-page.kakao.com/static/pc/ico-bigthum-wait.svg?aeb2837e99c7d1055cbc3444433f4858"
        />웹툰</span
      >
      <span>|</span>
      <span class="layout-center banner-detail-text">
        <img
          class="banner-detail-icon"
          src="https://static-page.kakao.com/static/pc/ico-bigthum-person.svg?100328455b1454b0ffff555caf02e71e"
        />39.1만명</span
      >
    </div>
  </div>
  <div class="banner-count-container">
    <span class="banner-count text-color--light-gray">1/3</span>
  </div>
  <p class="banner-bottom-text">시각이 다르면 무공도 다르다</p>
</div>`;

  insertIntoMain(banner);
};

const createSmallBanner = (data) => {
  const smallBanner = `<div class="banner-container round-container">
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

const createSmallBannerBlock = () => {
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