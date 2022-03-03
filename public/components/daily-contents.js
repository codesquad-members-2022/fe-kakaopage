import { $, $$, insertIntoMain, getDay } from "../utils.js";
import { getDayWebtoon } from "./days.js";

const makeRoundTodayTab = (day) => {
  $$(".nav-days li").forEach((it) => {
    const tab = it.firstChild;

    if (tab.dataset.day === String(day)) {
      tab.classList.add("current-tab--round", "text-color--black");
    }
  });
};

const addDaysEvL = (dataOfDays) => {
  $(".nav-days").addEventListener("click", ({ target }) => {
    const days = target.closest("ul").childNodes;

    [...days]
      .filter((node) => node.nodeType === 1)
      .forEach((node) => {
        const tab = node.firstChild;

        tab.classList.remove("current-tab--round", "text-color--black");
      });

    if (target.tagName === "LI") {
      target = target.firstChild;
    }

    target.classList.add("current-tab--round", "text-color--black");

    $("#daily-contents").innerHTML = getDayWebtoon(
      dataOfDays,
      target.dataset.day
    );
  });
};

const createDailyContents = (dataOfDays) => {
  const day = getDay();

  const dailyContentsBlock = `<div class="center container">
  <nav class="nav-days">
    <ul class="nav-item-sort text-color--light-gray">
      <li><span data-day='1'>월</span></li>
      <li><span data-day='2'>화</span></li>
      <li><span data-day='3'>수</span></li>
      <li><span data-day='4'>목</span></li>
      <li><span data-day='5'>금</span></li>
      <li><span data-day='6'>토</span></li>
      <li><span data-day='0'>일</span></li>
      <li><span data-day='7'>완결</span></li>
    </ul>
  </nav>

  <div
    class="layout-center text-color--light-gray tab-font-size border-b contents-container"
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

  <div class="grid-5col contents-container" id='daily-contents'>
  ${getDayWebtoon(dataOfDays, day)}
  </div>
</div>`;

  insertIntoMain(dailyContentsBlock);
  makeRoundTodayTab(day);
  addDaysEvL(dataOfDays);
};

export { createDailyContents };
