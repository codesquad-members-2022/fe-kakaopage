import { setSelectedSNB } from "./render.js";
import { tabWebtoonHome } from "../components/tab/global/webtoon.js";
import { addEventGNB } from "./event.js";

function init() {
  tabWebtoonHome.render();
  setSelectedSNB();
  addEventGNB();
  tabWebtoonHome.addEvent();
}

init();
