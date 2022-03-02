import { onNavClickHandler } from "./onNavClickHandler.js";
import { selector } from "./utility.js";

const onAdsRightClick = () => {
  const image = selector(".ads__image");
  setInterval(() => {
    image.style.transform = "translateX(100%)";
  }, 1000);
};

const onAdsClickHandler = (target) => {
  const { className } = target;
  if (className.includes("right")) onAdsRightClick();
};

const clickEventHandler = (event) => {
  event.preventDefault();
  const { target } = event;
  const section = target.closest("section");
  const ul = target.closest("UL");
  const nav = target.closest("nav");
  if (ul && nav) return onNavClickHandler(ul, nav.className);
  if (section.className === "ads") return onAdsClickHandler(target);
};

export { clickEventHandler };
