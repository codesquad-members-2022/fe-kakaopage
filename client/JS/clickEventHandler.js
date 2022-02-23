import { mainAssembly, webtoonAssembly, daysAssembly } from "./assembly.js";

const main = document.querySelector("main");

const removeMainPart = () => {
  main.innerHTML = "";
};

const removeWebtoonPart = (name) => {
  const parts = Array.from(main.children);
  parts.forEach((part) => {
    if (part.className !== name) part.remove();
  });
};

const removeDaysPart = () => {
  const columncontents = document.querySelector(".column-contents");
  columncontents.innerHTML = "";
};

const removeAndDrawView = (target, name) => {
  const type = typeof target === "string" ? target : target.innerHTML;
  const navPalette = {
    header__nav: () => {
      removeMainPart();
      drawWithAssembly(mainAssembly, type);
    },
    webtoon__nav: () => {
      removeWebtoonPart(name);
      drawWithAssembly(webtoonAssembly, type);
    },
    days__nav: () => {
      const target = document.querySelector(".column-contents");
      removeDaysPart();
      drawWithAssembly(daysAssembly, type, target);
    },
  };
  const selectedPalette = navPalette[name];
  selectedPalette();
};

const markSelectedNav = (target) => {
  target.parentNode.querySelector(".selected").classList.remove("selected");
  target.classList.add("selected");
};

const filterNav = (target, nav) => {
  if (target.tagName !== "SPAN") return;
  const name = nav.className;
  markSelectedNav(target);
  removeAndDrawView(target, name);
};

export const drawWithAssembly = (assembly, type, target = main) => {
  assembly[type].forEach((part) => (target.innerHTML += part));
};

export const clickEventHandler = (event) => {
  event.preventDefault();
  const { target } = event;
  const nav = target.closest("nav");
  if (nav) filterNav(target, nav);
};
