import { webtoons } from "./fixing-webtoons.js";

const $ = (selector) => document.querySelector(selector);

const renderingWebtoon = (day) => {
  const dayWebtoons = webtoons
    .filter((e) => e.day === day)
    .map(
      (e) => `<div class="webtoon-card">
        <div class="webtoon-card__img">
          <img
            src=${e.img}
            alt="dow-webtoon"
          />
          <div class="webtoon-card__img-bar">
            <span>${
              isNaN(e.info)
                ? e.info
                : `<img src="https://static-page.kakao.com/static/common/badge-thumbnail-star.svg?c4d2181b65253b0259cfa219fe4506ac"/> ` +
                  e.info
            }</span>
            <img
              class="clock-icon"
              src="https://static-page.kakao.com/static/common/bmbadge_waitfree.svg?53cf25c84253dee8d32e66da7524dbaf"
            />
          </div>
        </div>
        <div class="webtoon-card__title">${e.title}</div>
        <div class="webtoon-card__details">
          <img
            class="up-icon"
            src="https://static-page.kakao.com/static/common/icon_up.svg?51cfaf512283ca0e1eaca53414e35a3f"
          />
          <img
            class="user-icon"
            src="https://static-page.kakao.com/static/common/icon_read_count.png?817b1f83aa0dd8de232a68ac82efd871"
          />
          <div class="webtoon-card__user">${e.user}</div>
        </div>
      </div>`
    )
    .reduce((acc, cur) => acc + cur);
  $(".dow-top__contents").innerHTML = dayWebtoons;
};

const renderingNav = (nav, selected) => {
  initEventListener();
  document.querySelectorAll(`.${nav} li`).forEach((e) => {
    e.id = "";
  });
  selected.id = "selected";
};

const initEventListener = () => {
  document.querySelectorAll(".nav__list").forEach((e) => {
    e.addEventListener("click", (e) => {
      if (e.target.nodeName !== "LI") return;
      const selectedNav = e.target.parentNode.parentNode
        .getAttribute("class")
        .split(" ")[0];
      renderingNav(selectedNav, e.target);
      if (selectedNav === "dow__nav") renderingWebtoon(e.target.innerText);
    });
  });
};

const renderingDefault = () => {
  const dow = ["일", "월", "화", "수", "목", "금", "토"];
  const today = dow[new Date().getDay()];

  const dayElements = document.querySelectorAll(".dow__nav li");
  const mainNavElements = document.querySelectorAll(".main__nav li");
  dayElements.forEach((e) => {
    if (e.innerText === today) renderingNav("dow__nav", e);
  });
  mainNavElements.forEach((e) => {
    if (e.innerText === "홈") renderingNav("main__nav", e);
  });
  renderingWebtoon(today);
};

renderingDefault();
