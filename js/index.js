import { handleCategory } from "./handle-cateogry.js";

export const initEventListener = () => {
  document.querySelectorAll(".nav__list").forEach((e) => {
    e.addEventListener("click", handleCategory);
  });
};

initEventListener();
