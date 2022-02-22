import { handleCategory } from "./handle-cateogry.js";
import { scrollDowSerialization } from "./blocks/dow-serialization.js";

const initEventListener = () => {
  document.querySelectorAll(".nav__list").forEach((e) => {
    e.addEventListener("click", handleCategory);
  });

  window.addEventListener("scroll", scrollDowSerialization);
};

export { initEventListener };
