import { setSelectedSNB } from "./render.js";
import { addEventGNB, addEventSNB } from "./event.js";
import { tabWebtoonHome } from "../components/tab/global/webtoon.js";

function init() {
  tabWebtoonHome.render();
  setSelectedSNB();
  addEventGNB();
  addEventSNB();
}

init();
