import { dataOfEvent } from "../data/home/event.js";
import { insertIntoMain } from "../utils.js";

const getEventImg = () => {
  const imgs = [];

  dataOfEvent.forEach((data) => {
    const img = `<img
    class="event-img"
    src="${data.img}"
    alt="${data.desc}"
  />`;

    imgs.push(img);
  });

  return imgs.join("");
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
    <div class="round-container side-by-side">
      ${getEventImg()}
    </div>
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
      <span class="event-count">1/${dataOfEvent.length}</span>
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

export { createEventBlock };
