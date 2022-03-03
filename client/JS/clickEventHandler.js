import { onNavClickHandler } from "./onNavClickHandler.js";
import { selector } from "./utility.js";

const onAdsRightClick = () => {
  const image = selector(".ads__image");
  let length = 0;
  setInterval(() => {
    image.style.transform = `translateX(${length}px)`;
    if (length !== 33) length++;
  }, 10);
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
  if (ul && nav) onNavClickHandler(ul, nav.className);
  if (section) if (section.className === "ads") onAdsClickHandler(target);
};

export { clickEventHandler };
