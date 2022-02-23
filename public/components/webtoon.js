import { insertIntoMain, range } from "../utils.js";

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
  <div class="grid-5col mt--m">
  ${webtoons.join("")}
  </div>
</div>`;

  insertIntoMain(genreBlock);
};

export { createWebtoonWithGrade, createWebtoonWithRank, createGenreBlock };
