import { weekMap } from "./variable.mjs";
import { info } from "./info.js";
import { changeContent } from "./changeContent.mjs";

const init = (className) => {
  const today = new Date();
  const $tab = [...document.querySelectorAll(className)];
  $tab[(today.getDay() + 6) % 7].classList.add(
    "selected-color",
    "selected-box"
  );
  const dayInfo = info[(today.getDay() + 6) % 7];
  const items = document.querySelectorAll(".top__inner .itemBox");
  changeContent(items, dayInfo);
};

export { init };
