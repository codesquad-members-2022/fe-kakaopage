const headerNav = document.querySelector(".header_nav");
const headerNavChildren = headerNav.querySelectorAll("span");
const main = document.querySelector("main");

const clickNavEvent = (event) => {
  event.preventDefault();
  const SELECTED = "selected";
  const { parentNode } = event.target;
  const previousSelectedTarget = parentNode.querySelector(`.${SELECTED}`);
  if (previousSelectedTarget) previousSelectedTarget.classList.remove(SELECTED);
  event.target.classList.add(SELECTED);
};

headerNavChildren.forEach((child) =>
  child.addEventListener("click", clickNavEvent)
);
