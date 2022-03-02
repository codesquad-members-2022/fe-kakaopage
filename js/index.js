import { setSelectedSNB } from "./render.js";
import { tabWebtoonHome } from "../components/tab/global/webtoon.js";
import { addEventCarousel, addEventDay, addEventGNB } from "./event.js";

function init() {
  tabWebtoonHome.render();
  setSelectedSNB();
  addEventGNB();
  tabWebtoonHome.addEvent();
  addEventDay();
  addEventCarousel();
}
init();
