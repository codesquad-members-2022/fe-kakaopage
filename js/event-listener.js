import { handleCategory } from "./handle-cateogry.js";

const initEventListener = () => {
  document.querySelectorAll(".nav__list").forEach((e) => {
    e.addEventListener("click", handleCategory);
  });
};

export { initEventListener };
