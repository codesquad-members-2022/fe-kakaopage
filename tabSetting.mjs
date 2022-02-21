import { weekMap } from "./variable.mjs";
import { info } from "./info.js";
import { changeContent } from "./changeContent.mjs";

const tabMoving = (className) => {
  const $tab = [...document.querySelectorAll(className)];
  $tab.forEach((elem) => {
    elem.addEventListener("click", () => {
      const dayInfo = info[weekMap.get(elem.firstChild.nodeValue)];
      const items = document.querySelectorAll(".top__inner .itemBox");
      $tab.forEach((val) => {
        val.classList.remove("selected-color", "selected-box");
      });
      elem.classList.add("selected-color", "selected-box");
      changeContent(items, dayInfo);
    });
  });
};

export { tabMoving };
