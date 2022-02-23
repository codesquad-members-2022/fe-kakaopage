import { mainAssembly } from "./assembly.js";
import { drawWithAssembly, clickEventHandler } from "./clickEventHandler.js";

const startPage = "웹툰";

const init = () => {
  drawWithAssembly(mainAssembly, startPage);
  document.addEventListener("click", clickEventHandler);
};

init();
