import { setSelectedSNB } from "./render.js";
import { tabWebtoonHome } from "../components/tab/global/webtoon.js";
import { addEventGNB } from "./event.js";
import { $ } from "./utils.js";
import { dayHandler } from "./handler.js";

function init() {
  tabWebtoonHome.render();
  setSelectedSNB();
  addEventGNB();
  tabWebtoonHome.addEvent();

  $(".days").addEventListener("click", dayHandler);
}

init();
