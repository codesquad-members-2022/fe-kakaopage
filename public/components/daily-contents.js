import { insertIntoMain, range } from "../utils.js";
import { dataOfDays } from "../data/home/days.js";
import { createWebtoonWithGrade, createWebtoonWithRank } from "./webtoon.js";

const createDailyContents = () => {
  const webtoons = [];
  range(5).forEach((_, idx) => {
    webtoons.push(createWebtoonWithRank(dataOfDays[0], idx));
  });
  range(15).forEach(() => {
    webtoons.push(createWebtoonWithGrade(dataOfDays[0]));
  });

  const dailyContentsBlock = `<div class="center container contents-container">
  <nav class="nav-days">
    <ul class="nav-item-sort text-color--light-gray">
      <li><span>월</span></li>
      <li><span>화</span></li>
      <li>
        <span class="current-tab--round text-color--black">수</span>
      </li>
      <li><span>목</span></li>
      <li><span>금</span></li>
      <li><span>토</span></li>
      <li><span>일</span></li>
      <li><span>완결</span></li>
    </ul>
  </nav>

  <div
    class="layout-center text-color--light-gray tab-font-size"
  >
    <div class="mr--auto layout-center">
      <span class="text-color--black">전체</span>
      <span class="ml--m">|</span>
      <span class="ml--m">웹툰</span>
      <span class="ml--m">|</span>
      <span class="layout-center ml--m">
        <svg
          class="watch-img"
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
      <span>웹툰 </span>
    </div>
    <div class="layout-center"></div>
    <span>전체(149)</span
    ><img
      class="ml--small"
      src="https://static-page.kakao.com/static/common/ico_sorting_arrow.svg?167b1295f93ba9f9d84cac7a5b830345"
    />
  </div>

  <div class="grid-5col mt--m">
  ${webtoons.join("")}
  </div>
</div>`;
  insertIntoMain(dailyContentsBlock);
};

export { createDailyContents };
