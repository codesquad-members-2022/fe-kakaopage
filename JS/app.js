const headerNav = document.querySelector(".header__nav");
const mainNav = document.querySelector(".main_nav");
const daysNav = document.querySelector(".days_nav");
const main = document.querySelector("main");
const headerNavChildren = headerNav.querySelectorAll("span");
const mainNavChildren = mainNav.querySelectorAll("span");
const daysNavChildren = daysNav.querySelectorAll("span");

const markSelectedNav = (event) => {
  event.preventDefault();
  const SELECTED = "selected";
  const { parentNode } = event.target;
  const previousSelectedTarget = parentNode.querySelector(`.${SELECTED}`);
  if (previousSelectedTarget) previousSelectedTarget.classList.remove(SELECTED);
  event.target.classList.add(SELECTED);
};

const showSelectedNav = (event) => {
  event.preventDefault();
  const type = event.target.classList[0];
  main.querySelector("section").classList.add("hidden");
  main.querySelector(`.${type}`).classList.remove("hidden");
};

const markSelectedNavEvent = (children) => {
  children.forEach((child) => {
    child.addEventListener("click", markSelectedNav);
  });
};

headerNavChildren.forEach((child) => {
  child.addEventListener("click", showSelectedNav);
});

markSelectedNavEvent(headerNavChildren);
markSelectedNavEvent(mainNavChildren);
markSelectedNavEvent(daysNavChildren);

// TEST
