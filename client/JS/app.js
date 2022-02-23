import { assembly, webtoonAssembly } from "./assembly.js";

const startPage = "웹툰";
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

const drawWithAssembly = (assembly, type) => {
  assembly[type].forEach((part) => (main.innerHTML += part));
};

const drawMainPart = (type) => {
  drawWithAssembly(assembly, type);
};

const drawWebtoonPart = (type) => {
  const newPart = document.createElement("section");
  main.append(newPart);
  drawWithAssembly(webtoonAssembly, type);
};

const removeAndDrawView = (target, name) => {
  const type = typeof target === "string" ? target : target.innerHTML;
  const navPalette = {
    header__nav: () => {
      removeMainPart();
      drawMainPart(type);
    },
    webtoon__nav: () => {
      removeWebtoonPart(name);
      drawWebtoonPart(type);
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

const clickEventHandler = (event) => {
  event.preventDefault();
  const { target } = event;
  const nav = target.closest("nav");
  if (nav) filterNav(target, nav);
};

const init = () => {
  drawMainPart(startPage);
  document.addEventListener("click", clickEventHandler);
};

init();
