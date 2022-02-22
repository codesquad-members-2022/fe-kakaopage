import { ads, days, newThings, listContents, dummy, mainNav } from "./parts.js";

const startPage = "웹툰";
const main = document.querySelector("main");
// const ads = document.querySelector(".ads");
// const days = document.querySelector(".days");
// const newThings = document.querySelector(".new-things");
// const listContents = document.querySelector(".list-contents");
// const dummy = document.querySelector(".dummy");
// const mainNav = document.querySelector(".main__nav");
// const daysNav = document.querySelector(".days__nav");
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

const markSelectedNav = (event) => {
  event.preventDefault();
  const { parentNode } = event.target;
  const previousSelectedTarget = parentNode.querySelector(".selected");
  if (previousSelectedTarget)
    previousSelectedTarget.classList.remove("selected");
  event.target.classList.add("selected");
};

const markSelectedNavEvent = (nav) => {
  const children = nav.querySelectorAll("span");
  children.forEach((child) => {
    child.addEventListener("click", markSelectedNav);
  });
};

const init = () => {
  main.innerHTML = "";
  showSelectedNav(startPage);
  headerNav.querySelectorAll("span").forEach((child) => {
    child.addEventListener("click", showSelectedNav);
  });
  navs.forEach((nav) => markSelectedNavEvent(nav));
};

init();
