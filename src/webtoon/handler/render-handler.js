import { webtoonWeeklyContent } from "../render/weekly/render-webtoon-weekly.js";
import { webtoonHomeContent } from "../render/home/render-webtoon-home.js";
import { webtoonWebtoonContent } from "../render/webtoon/render-webtoon-webtoon.js";
import { webtoonBoyContent } from "../render/boy/render-webtoon-boy.js";
import { webtoonDramaContent } from "../render/drama/render-webtoon-drama.js";
import { webtoonRomanceContent } from "../render/romance/render-webtoon-romance.js";
import { webtoonRomanceFantasyContent } from "../render/romance-fantasy/render-webtoon-romance-fantasy.js";
import { webtoonActionContent } from "../render/action/render-webtoon-action.js";
import { webtoonBlContent } from "../render/bl/render-webtoon-bl.js";
import { textSelectedPositionChange } from "../../../js/text-selected-position-change.js";

const app = document.querySelector(".app");
const webtoonUl = document.querySelector(".nav-box__list");
const navBox = document.querySelector(".nav-box");
const tabNameObj = {
  홈: webtoonHomeContent,
  요일연재: webtoonWeeklyContent,
  웹툰: webtoonWebtoonContent,
  소년: webtoonBoyContent,
  드라마: webtoonDramaContent,
  로맨스: webtoonRomanceContent,
  로판: webtoonRomanceFantasyContent,
  액션무협: webtoonActionContent,
  BL: webtoonBlContent,
};
const tabIdx = {
  홈: 0,
  요일연재: 1,
  웹툰: 2,
  소년: 3,
  드라마: 4,
  로맨스: 5,
  로판: 6,
  액션무협: 7,
  BL: 8,
};
const renderHandler = (tabName) => {
  app.firstElementChild.remove();
  const currentTag = app.firstElementChild;
  app.insertBefore(tabNameObj[tabName], currentTag);
  textSelectedPositionChange(navBox.querySelectorAll("li"), tabIdx[tabName]);
};

webtoonUl.addEventListener("click", (evt) => {
  if (evt.target.nodeName === "LI") {
    renderHandler(evt.target.innerHTML);
  }
});

const init = () => {
  app.firstElementChild.remove();
  const currentTag = app.firstElementChild;
  app.insertBefore(webtoonWeeklyContent, currentTag);
};
init();
