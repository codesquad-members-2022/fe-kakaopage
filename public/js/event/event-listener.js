import { handleCategory } from "../handle-cateogry.js";
import { scrollDowSerialization } from "../blocks/dow-serialization.js";
import { slideShow } from "./event-slide.js";

const initEventListener = () => {
  document.querySelectorAll(".nav__list").forEach((e) => {
    e.addEventListener("click", handleCategory);
  });

  window.addEventListener("scroll", scrollDowSerialization);

  document.querySelectorAll(".main-ad-banner button").forEach((e) => {
    e.addEventListener("click", slideShow);
  });
};

export { initEventListener };
