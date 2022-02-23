import { webtoonContents, week } from "./data/contents.js";

const makeWeekTapTemplate = (day) => {
  return `
    <li>${day}</li>
  `;
};

const createdWeekTapTemplate = week.map((day) => makeWeekTapTemplate(day));

const $weekTap = createdWeekTapTemplate.join("");

const makeTuesdayTapTemplate = (imageUrl, title, star, read) => {
  return `
      <div>
        <div>
          <div class="toon__box">
            <img
              class="toon"
              src=${imageUrl}
              alt="toon"
            />
          </div>
          <img
            src="https://static-page.kakao.com/static/common/badge-thumbnail-star.svg?c4d2181b65253b0259cfa219fe4506ac"
          />
          <span>${star}</span>
          <img
            src="https://static-page.kakao.com/static/common/bmbadge_waitfree.svg?53cf25c84253dee8d32e66da7524dbaf"
          />
        </div>
        <h2 class="title">${title}</h2>
        <div header__container>
          <img
            class="read__icon"
            src="https://static-page.kakao.com/static/common/icon_read_count.png?817b1f83aa0dd8de232a68ac82efd871"
            alt="read count"
          />
          <span>${read}</span>
        </div>
      </div>
`;
};

const createdTuesdayTapTemplate = webtoonContents.map(
  ({ imageUrl, title, star, read }) =>
    makeTuesdayTapTemplate(imageUrl, title, star, read)
);

const $tuesdayWebtoons = createdTuesdayTapTemplate.join("");

const $weekWebtoons = `
  <section>
    <nav>
      <ul class="main__navigation__menu main__week__menu interval">
        ${$weekTap}
      </ul>
    </nav>

    <section
      class="header__container main__toon__category container__space__between"
    >
      <div>
        <button>전체</button>
        <span>|</span>
        <button>웹툰</button>
        <span>|</span>
        <button><span>clock</span>웹툰</button>
      </div>

      <div>
        <span>전체 (180)</span>
        <span>▼</span>
      </div>
    </section>
    <div class="main__toon__category toon__grid toons__box">
      ${$tuesdayWebtoons}
    </div>
  </section>
`;

export default $weekWebtoons;