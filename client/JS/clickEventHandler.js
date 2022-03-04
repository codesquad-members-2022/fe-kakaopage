import { onNavClickHandler } from "./onNavClickHandler.js";
import { onAdsClickHandler } from "./onAdsClickHandler.js";

const clickEventHandler = ({ target }) => {
  const section = target.closest("section");
  const ul = target.closest("UL");
  const nav = target.closest("nav");
  if (ul && nav) onNavClickHandler(ul, nav.className);
  if (section) if (section.className === "ads") onAdsClickHandler(target);
};

export { clickEventHandler };
