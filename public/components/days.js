import { insertIntoMain, range, $ } from "../utils.js";
import { createWebtoonWithGrade, createWebtoonWithRank } from "./webtoon.js";
import { dataOfDays } from "../data/home/days.js";

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

export { createDaysBlock };
