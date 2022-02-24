import { render, setSelectedSNB } from "./render.js";
<<<<<<< HEAD
import { addEvent } from "./event.js";
import { createTabWebtoonHome } from "../components/tabWebtoonHome/index.js";

function init() {
  render(createTabWebtoonHome());
  setSelectedSNB();
  addEvent();
=======
import { addEventGNB, addEventSNB } from "./event.js";
import { createTabWebtoonHome } from "../components/tabWebtoonHome/index.js";

function init() {
  render({ to: ".contents", el: createTabWebtoonHome() });
  setSelectedSNB();
  addEventGNB();
  addEventSNB();
>>>>>>> step3
}

init();
