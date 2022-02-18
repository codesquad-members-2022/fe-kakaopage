const headerNav = document.querySelector(".header_nav");
const headerNavChildren = headerNav.querySelectorAll("span");
const mainNav = document.querySelector(".main_nav");
const mainNavChildren = mainNav.querySelectorAll("span");
const main = document.querySelector("main");

const clickSelectedNavEvent = (event) => {
  event.preventDefault();
  const SELECTED = "selected";
  const { parentNode } = event.target;
  const previousSelectedTarget = parentNode.querySelector(`.${SELECTED}`);
  if (previousSelectedTarget) previousSelectedTarget.classList.remove(SELECTED);
  event.target.classList.add(SELECTED);
};

const getSelectedNavEvent = (children) => {
  children.forEach((child) => {
    child.addEventListener("click", clickSelectedNavEvent);
  });
};
getSelectedNavEvent(headerNavChildren);
getSelectedNavEvent(mainNavChildren);
