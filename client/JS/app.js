import { ads, days, newThings, listContents, dummy, mainNav } from "./parts.js";

const startPage = "웹툰";
const main = document.querySelector("main");
const assembly = {
  홈: [ads, newThings, listContents, ads],
  웹툰: [mainNav, ads, days],
  웹소설: [dummy],
  영화: [dummy],
  소설: [dummy],
  책: [dummy],
};

const showSelectedHeaderNav = (target) => {
  let type = "";
  let text = "";
  if (typeof target === "string") {
    type = target;
  } else {
    main.innerHTML = "";
    type = target.innerHTML;
  }
  assembly[type].forEach((part) => {
    return (text += part);
  });
  main.innerHTML = text;
};

const markSelectedNav = (target) => {
  target.parentNode.querySelector(".selected").classList.remove("selected");
  target.classList.add("selected");
};

const specifyNavClass = (target, nav) => {
  if (target.tagName !== "SPAN") return;
  markSelectedNav(target);
  const name = nav.className;
  const getNavContents = {
    header__nav: showSelectedHeaderNav(target),
  };
  getNavContents[name];
};

const clickEventHandler = (event) => {
  event.preventDefault();
  const { target } = event;
  const nav = target.closest("nav");
  if (nav) specifyNavClass(target, nav);
};

const init = () => {
  main.innerHTML = "";
  showSelectedHeaderNav(startPage);
  document.addEventListener("click", clickEventHandler);
};

init();
