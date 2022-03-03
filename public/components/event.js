import { $, $$, insertIntoMain } from "../utils.js";

const getEventImgs = (dataOfEvent) => {
  const imgs = dataOfEvent.reduce((acc, data, idx) => {
    const img = `<img
    class="event-img"
    src="${data.img}"
    alt="${data.desc}"
    data-index="${idx}"
  />`;

    return acc + img;
  }, "");

  return imgs;
};

const updateCountText = (count) => {
  $("#event-count").textContent = count;
};

const relocateEventImg = (location) => {
  $$(".event-img").forEach((img) => {
    img.style.transform = `translateX(${-670 * location}px)`;
  });
};

const slideEvent = (target, dataOfEvent) => {
  const start = 1;
  const end = dataOfEvent.length;
  const direction = target.id;
  const curIdx = Number($("#event-count").textContent);

  if (direction === "left") {
    if (curIdx === start) return;
    updateCountText(curIdx - 1);
    relocateEventImg(curIdx - 2);
  } else {
    if (curIdx === end) return;
    updateCountText(curIdx + 1);
    relocateEventImg(curIdx);
  }
};

const addSlideEvL = (dataOfEvent) => {
  $("#left").addEventListener("click", ({ target }) =>
    slideEvent(target, dataOfEvent)
  );
  $("#right").addEventListener("click", ({ target }) =>
    slideEvent(target, dataOfEvent)
  );
};

const createEventBlock = (dataOfEvent) => {
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
  <div class="position-rel">
    <div class="round-container side-by-side">
      ${getEventImgs(dataOfEvent)}
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
      <span class="event-count" id="event-count">1</span><span class="event-count">/${
        dataOfEvent.length
      }</span>
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
  addSlideEvL(dataOfEvent);
};

export { createEventBlock };
