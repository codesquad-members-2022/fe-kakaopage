import { setSelectedSNB } from "./render.js";
import { tabWebtoonHome } from "../components/tab/global/webtoon.js";
import { addEventDay, addEventGNB } from "./event.js";

function init() {
  tabWebtoonHome.render();
  setSelectedSNB();
  addEventGNB();
  tabWebtoonHome.addEvent();
  addEventDay();
}

init();
