import { onNavClickHandler } from "./onNavClickHandler.js";

const clickEventHandler = (event) => {
  event.preventDefault();
  const { target } = event;
  const ul = target.closest("UL");
  const nav = target.closest("nav");
  if (ul && nav) onNavClickHandler(ul, nav.className);
};

export { clickEventHandler };
