import { insertIntoMain, range } from "../utils.js";

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

const getTop3 = (dataOfDailyRank) => {
  const TOP3 = 3;
  const dailyRank = range(TOP3).reduce((acc, i) => {
    return acc + createDailyRank(dataOfDailyRank[i], i);
  }, "");

  return dailyRank;
};

const createDailyRankBlock = (dataOfDailyRank) => {
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
      ${getTop3(dataOfDailyRank)}
    </ol>
  </div>
</div>`;
  insertIntoMain(dailyRankBlock);
};

export { createDailyRankBlock };
