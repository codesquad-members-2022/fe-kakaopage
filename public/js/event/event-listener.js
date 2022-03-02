import { handleCategory } from "../handle-cateogry.js";
import { scrollDowSerialization } from "../blocks/dow-serialization.js";
import { slideShow, autoPlayStart, autoPlayStop } from "./event-slide.js";
import { $ } from "../utils.js";

const initEventListener = () => {
  document.querySelectorAll(".nav__list").forEach((e) => {
    e.addEventListener("click", handleCategory);
  });

  window.addEventListener("scroll", scrollDowSerialization);

  $(".main-ad-banner").addEventListener("click", slideShow);
  $(".main-ad-banner").addEventListener("mouseenter", autoPlayStop);
  $(".main-ad-banner").addEventListener("mouseleave", autoPlayStart);
};

export { initEventListener };
