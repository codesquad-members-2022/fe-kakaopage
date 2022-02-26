import {
  drawWithAssembly,
  headerAssembly,
  webtoonAssembly,
  daysAssembly,
} from "./assembly.js";
import { selector, addClass, removeClass } from "./utility.js";
import { selectedNav } from "./nav.js";

const removePart = (part, remain) => {
  const remainedPart = selector(`.${remain}`);
  selector(part).innerHTML = "";
  if (remainedPart) selector(part).append(remainedPart);
};

const removeAndDrawView = (target, name) => {
  let type = typeof target === "string" ? target : target.innerHTML;
  let view = "main";
  switch (name) {
    case "header__nav":
      removePart("main");
      drawWithAssembly(headerAssembly, type);
      break;
    case "webtoon__nav":
      removePart("main", name);
      drawWithAssembly(webtoonAssembly, type);
      break;
    case "days__nav":
      view = selector(".column-contents");
      removePart(".column-contents");
      drawWithAssembly(daysAssembly, type, view);
      break;
    case "days__menu--nav":
      type = selectedNav[".days__nav"];
      view = selector(".column-contents");
      removePart(".column-contents");
      drawWithAssembly(daysAssembly, type, view);
      break;
  }
};

const markSelectedNav = (target) => {
  const parentNav = target.parentNode;
  const previousSelectedNav = selector(".selected", parentNav);
  removeClass(previousSelectedNav, "selected");
  addClass(target, "selected");
  selectedNav[`.${parentNav.className}`] = target.innerHTML;
};

const onNavClickHandler = (target, className) => {
  markSelectedNav(target);
  removeAndDrawView(target, className);
};

const clickEventHandler = (event) => {
  event.preventDefault();
  const { target } = event;
  const ul = target.closest("UL");
  const nav = target.closest("nav");
  if (ul && nav) onNavClickHandler(ul, nav.className);
};

export { clickEventHandler };
