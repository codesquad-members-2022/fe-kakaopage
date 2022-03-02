import { drawWithAssembly, headerAssembly } from "./assembly.js";
import { markAllSelectedNav, selectedNav } from "./nav.js";
import { addEvent } from "./utility.js";
import { clickEventHandler } from "./clickEventHandler.js";

const startPage = selectedNav[".header__nav"];

const render = () => {
  drawWithAssembly(headerAssembly, startPage);
  markAllSelectedNav();
  addEvent("click", clickEventHandler);
};

export { render };
