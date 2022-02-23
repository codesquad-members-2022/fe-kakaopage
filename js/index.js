import { renderWebtoon, setSelectedSNB } from "./render.js";
import { addEvent } from "./event.js";

function init() {
  renderWebtoon();
  setSelectedSNB();
  addEvent();
}

init();
