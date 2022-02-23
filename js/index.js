import { render, setSelectedSNB } from "./render.js";
import { addEvent } from "./event.js";
import { createTabWebtoonHome } from "../components/tabWebtoonHome/index.js";

function init() {
  render(createTabWebtoonHome());
  setSelectedSNB();
  addEvent();
}

init();
