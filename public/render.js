import { dataOfDays } from "./data/home/days.js";
import { dataOfsBanner } from "./data/home/smallBanner.js";
import { dataOfDailyRank } from "./data/home/dailyRank.js";
import { $, range } from "./utils.js";

const insertIntoMain = (component) => {
  $("main").insertAdjacentHTML("beforeend", component);
};

const createCateNav = () => {
  const cateNav = `<nav class="center container webtoon-category">
  <ul class="nav-item-sort text-color--light-gray">
    <li class="text-color--black" data-cate='home'>홈</li>
    <li data-cate='days'>요일연재</li>
    <li data-cate='webtoon'>웹툰</li>
    <li data-cate='boy'>소년</li>
    <li data-cate='drama'>드라마</li>
    <li data-cate='romance'>로맨스</li>
    <li data-cate='rofan'>로판</li>
    <li data-cate='action'>액션무협</li>
    <li data-cate='bl'>BL</li>
  </ul>
</nav>`;

  insertIntoMain(cateNav);

  $(".webtoon-category").addEventListener("click", (e) => {
    const cateList = e.target.closest("ul").childNodes;
    cateList.forEach((node) => {
      if (node.nodeType === 1) {
        node.classList.remove("text-color--black");
      }
    });
    e.target.classList.add("text-color--black");

    const children = [...$("main").childNodes].slice(1);
    children.forEach((child) => $("main").removeChild(child));

    switch (e.target.dataset.cate) {
      case "home": {
        createBanner();
        createCateBtnBlock();
        createPromotionBlock();
        createDaysBlock();
        createSmallBannerBlock();
        createGenreBlock(dataOfDrama);
        createDailyRankBlock();
        createEventBlock();
        break;
      }
    }
  });
};

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

const createCateBtnBlock = () => {
  const cateBtnBlock = `<div class="center container category-buttons-container">
  <div class="round-container grid-3col">
    <button class="category-button">오늘 UP</button>
    <button class="category-button">오늘 신작</button>
    <button class="category-button">오리지널</button>
    <button class="category-button">완결까지 정주행</button>
    <button class="category-button">독립운동가 웹툰</button>
    <button class="category-button">오늘 랭킹</button>
  </div>
</div>`;

  insertIntoMain(cateBtnBlock);
};

const createPromotionBlock = () => {
  const promotion = `<div class="center container promotion-container">
  <svg
    class="arrow-icon arrow--round-border arrow--gray"
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
  <img
    src="https://dn-img-page.kakao.com/download/resource?kid=gPEB1/hzhOklLHwx/b9atKBc9aVXCF3Gu9KKKHK"
  />
  <svg
    class="arrow-icon arrow--round-border arrow--gray"
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
</div>`;

  insertIntoMain(promotion);
};

const createDaysBlock = () => {
  const date = new Date();
  const day = date.getDay();

  const webtoons = [];
  range(5).forEach((_, idx) => {
    webtoons.push(createWebtoonWithRank(dataOfDays[day], idx));
  });
  range(5).forEach(() => {
    webtoons.push(createWebtoonWithGrade(dataOfDays[day]));
  });

  const daysBlock = `<div class="center container contents-container">
  <header class="header-container">
    <h2 class="mr--auto">요일 연재 TOP</h2>
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
  <nav class="nav-days">
    <ul class="nav-item-sort text-color--light-gray">
      <li data-day='1'>월</li>
      <li data-day='2'>화</li>
      <li data-day='3'>수</li>
      <li data-day='4'>목</li>
      <li data-day='5'>금</li>
      <li data-day='6'>토</li>
      <li data-day='0'>일</li>
      <li data-day='7'>완결</li>
    </ul>
  </nav>
  <div id="daysTop" class="grid-5col">
    ${webtoons.join("")}
  </div>
</div>`;

  insertIntoMain(daysBlock);

  $(".nav-days ul").childNodes.forEach((it) => {
    if (it.nodeType === 1 && it.dataset.day === String(day)) {
      it.classList.add("current-tab", "underline-thin", "text-color--black");
    }
  });

  $(".nav-days").addEventListener("click", (e) => {
    const days = e.target.closest("ul").childNodes;
    days.forEach((node) => {
      if (node.nodeType === 1) {
        node.classList.remove(
          "current-tab",
          "underline-thin",
          "text-color--black"
        );
      }
    });

    e.target.classList.add(
      "current-tab",
      "underline-thin",
      "text-color--black"
    );

    const webtoons = [];
    range(5).forEach((_, idx) => {
      webtoons.push(
        createWebtoonWithRank(dataOfDays[e.target.dataset.day], idx)
      );
    });
    range(5).forEach(() => {
      webtoons.push(createWebtoonWithGrade(dataOfDays[e.target.dataset.day]));
    });
    $("#daysTop").innerHTML = webtoons.join("");
  });
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

const createWebtoonWithGrade = (data) => {
  const webtoon = `<div class="webtoon-container">
    <div class="webtoon-img-container round-container">
      <img
        class="webtoon-img"
        src="${data.img}"
        alt="${data.title}"
      />
      <div class="layout-center webtoon-img-bar">
        <img
          class="star-img"
          src="https://static-page.kakao.com/static/common/badge-thumbnail-star.svg?c4d2181b65253b0259cfa219fe4506ac"
        />
        <span class="mr--auto">${data.grade}</span>
        <img
          class="watch-img"
          src="https://static-page.kakao.com/static/common/bmbadge_waitfree.svg?53cf25c84253dee8d32e66da7524dbaf"
        />
      </div>
    </div>
    <h3 class="webtoon-title">${data.title}</h3>
    <div class="layout-center">
      <img
        class="webtoon-state-img"
        src="https://static-page.kakao.com/static/common/icon_up.svg?51cfaf512283ca0e1eaca53414e35a3f"
        alt="업데이트"
      />
      <img
        class="people-img"
        src="https://static-page.kakao.com/static/common/icon_read_count.png?817b1f83aa0dd8de232a68ac82efd871"
      />
      <span class="text-color--gray webtoon-details-text">${data.readers}만명</span>
    </div>
  </div>`;

  return webtoon;
};

const createWebtoonWithRank = (data, i) => {
  const webtoon = `<div class="webtoon-container">
    <div class="webtoon-img-container round-container">
      <img
        class="webtoon-img"
        src="${data.img}"
        alt="${data.title}"
      />
      <div class="layout-center webtoon-img-bar">
        <span class="mr--auto ml--small">${i + 1}위</span>
        <img
          class="watch-img"
          src="https://static-page.kakao.com/static/common/bmbadge_waitfree.svg?53cf25c84253dee8d32e66da7524dbaf"
        />
      </div>
    </div>
    <h3 class="webtoon-title">${data.title}</h3>
    <div class="layout-center">
      <img
        class="webtoon-state-img"
        src="https://static-page.kakao.com/static/common/icon_up.svg?51cfaf512283ca0e1eaca53414e35a3f"
        alt="업데이트"
      />
      <img
        class="people-img"
        src="https://static-page.kakao.com/static/common/icon_read_count.png?817b1f83aa0dd8de232a68ac82efd871"
      />
      <span class="text-color--gray webtoon-details-text">${
        data.readers
      }만명</span>
    </div>
  </div>`;

  return webtoon;
};

const createGenreBlock = (genre) => {
  const webtoons = [];
  range(5).forEach(() => {
    webtoons.push(createWebtoonWithGrade(genre));
  });

  const genreBlock = `<div class="center container contents-container">
  <header class="header-container">
    <h2 class="mr--auto">드라마 TOP</h2>
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
  <div class="grid-5col">
  ${webtoons.join("")}
  </div>
</div>`;

  insertIntoMain(genreBlock);
};

const createDailyRank = (data, i) => {
  const dailyRank = `<li class="layout-center">
  <p class="daily-ranking">${i + 1}</p>
  <div class="daily-rank-img-container round-container">
    <img
      class="daily-rank-img"
      src="${data.img}"
      alt="${data.title}"
    />
    <img
      class="clock-img--yellow"
      src="https://static-page.kakao.com/static/common/badge_time.png?4f8e2321988f4826b438a4ab2509e82a"
    />
  </div>
  <div class="daily-rank-details">
    <div>
      <h3 class="webtoon-title daily-rank-title">${data.title}</h3>
      <span class="webtoon-details-text text-color--gray"
        ><img
          class="people-img"
          src="https://static-page.kakao.com/static/common/icon_read_count.png?817b1f83aa0dd8de232a68ac82efd871"
        />${data.desc}</span
      >
    </div>
    <p class="text-color--gray webtoon-details-text">${data.day} 연재</p>
  </div>
</li>`;
  return dailyRank;
};

const createDailyRankBlock = () => {
  const dailyRank = [];
  range(3).forEach((_, idx) => {
    dailyRank.push(createDailyRank(dataOfDailyRank[idx], idx));
  });
  const dailyRankBlock = `<div class="center container contents-container">
  <header class="header-container">
    <h2 class="mr--auto">일간 랭킹 TOP</h2>
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
  <div>
    <ol class="daily-rank-list">
      ${dailyRank.join("")}
    </ol>
  </div>
</div>`;
  insertIntoMain(dailyRankBlock);
};

const createEventBlock = () => {
  const eventBlock = `<div class="center container contents-container">
  <header class="header-container">
    <h2 class="mr--auto">추천 이벤트</h2>
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
  <div class="event-img-container">
    <img
      class="event-img round-container"
      src="https://dn-img-page.kakao.com/download/resource?kid=FIep1/hzmU3sGhNi/ltEgI1VyEMT2RwQZYdXhqk"
      alt="왕실교사 하이네 기다무 런칭 기념, 경품 이벤트!"
    />
    <div
      class="layout-center event-count-container text-color--transparent-white"
    >
      <svg
        class="arrow-icon"
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
      <span class="event-count">1/8</span>
      <svg
        class="arrow-icon"
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
    </div>
  </div>
</div>`;
  insertIntoMain(eventBlock);
};

export {
  createCateNav,
  createBanner,
  createCateBtnBlock,
  createPromotionBlock,
  createDaysBlock,
  createSmallBannerBlock,
  createGenreBlock,
  createDailyRankBlock,
  createEventBlock,
};
