import { dataOfEvent } from "../data/home/event.js";
import { $, $$, insertIntoMain } from "../utils.js";

const getEventImg = () => {
  const imgs = [];

  dataOfEvent.forEach((data, idx) => {
    const img = `<img
    class="event-img"
    src="${data.img}"
    alt="${data.desc}"
    data-index="${idx}"
  />`;

    imgs.push(img);
  });

  return imgs.join("");
};

const addSlideEvL = () => {
  $("#left").addEventListener("click", () => {
    const curIdx = Number($("#event-count").textContent);
    if (curIdx === 1) return;

    $("#event-count").textContent = curIdx - 1;

    $$(".event-img").forEach((img) => {
      img.style.transform = `translateX(${-670 * (curIdx - 2)}px)`;
    });
  });

  $("#right").addEventListener("click", () => {
    const curIdx = Number($("#event-count").textContent);
    if (curIdx === dataOfEvent.length) return;

    $("#event-count").textContent = curIdx + 1;

    $$(".event-img").forEach((img) => {
      img.style.transform = `translateX(${-670 * curIdx}px)`;
    });
  });
};

const createEventBlock = () => {
  const currIdx = 0;
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
    <div class="round-container side-by-side">
      ${getEventImg()}
    </div>
    <div
      class="layout-center event-count-container text-color--transparent-white"
    >
      <svg
        class="arrow-icon" id="left"
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
      <span class="event-count" id="event-count">${
        currIdx + 1
      }</span><span class="event-count">/${dataOfEvent.length}</span>
      <svg
        class="arrow-icon" id="right"
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
  addSlideEvL();
};

export { createEventBlock };
