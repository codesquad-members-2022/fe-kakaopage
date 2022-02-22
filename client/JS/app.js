import { ads, days, newThings, listContents, dummy, mainNav } from "./parts.js";

const startPage = "웹툰";
const main = document.querySelector("main");
const headerNav = document.querySelector(".header__nav");
const navs = [headerNav, mainNav];
const assembly = {
  홈: [ads, newThings, listContents],
  웹툰: [mainNav, ads, days],
  웹소설: [dummy],
  영화: [dummy],
  소설: [dummy],
  책: [dummy],
};

const showSelectedNav = (event) => {
  let type = "";
  let text = "";
  if (typeof event === "string") {
    type = event;
  } else {
    event.preventDefault();
    main.innerHTML = "";
    type = event.target.innerHTML;
  }
  assembly[type].forEach((part) => {
    return (text += part);
  });
  main.innerHTML = text;
};

const clickEventHandler = (event) => {
  event.preventDefault();
  const { target } = event;
  if (target.tagName === "SPAN" && target.parentNode.tagName === "NAV") {
    target.parentNode.querySelector(".selected").classList.remove("selected");
    target.classList.add("selected");
  }
};

const init = () => {
  main.innerHTML = "";
  showSelectedNav(startPage);
  headerNav.querySelectorAll("span").forEach((child) => {
    child.addEventListener("click", showSelectedNav);
  });
  document.addEventListener("click", clickEventHandler);
};

init();
