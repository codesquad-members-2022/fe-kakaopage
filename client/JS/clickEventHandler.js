import {
  drawWithAssembly,
  headerAssembly,
  webtoonAssembly,
  daysAssembly,
} from "./assembly.js";
import { selector, addClass, removeClass } from "./utility.js";
import { selectedNav } from "./nav.js";

const removeMainPart = () => {
  selector("main").innerHTML = "";
};

const removeWebtoonPart = (name) => {
  const parts = Array.from(selector("main").children);
  parts.forEach((part) => {
    if (part.className !== name) part.remove();
  });
};

const removeDaysPart = () => {
  const columncontents = selector(".column-contents");
  columncontents.innerHTML = "";
};

const removeAndDrawView = (target, name) => {
  let type = typeof target === "string" ? target : target.innerHTML;
  const navPalette = {
    header__nav: () => {
      removeMainPart();
      drawWithAssembly(headerAssembly, type);
    },
    webtoon__nav: () => {
      removeWebtoonPart(name);
      drawWithAssembly(webtoonAssembly, type);
    },
    days__nav: () => {
      const view = selector(".column-contents");
      removeDaysPart();
      drawWithAssembly(daysAssembly, type, view);
    },
    "days__menu--nav": () => {
      // type = selector("selected", selector(".days__nav"));
      type = document
        .querySelector(".days__nav")
        .querySelector(".selected").innerHTML;
      const view = selector(".column-contents");
      removeDaysPart();
      drawWithAssembly(daysAssembly, type, view);
    },
  };
  const selectedPalette = navPalette[name];
  selectedPalette();
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
