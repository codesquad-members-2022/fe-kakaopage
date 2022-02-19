const main = document.querySelector("main");
const ads = document.querySelector(".ads");
const days = document.querySelector(".days");
const headerNav = document.querySelector(".header__nav");
const mainNav = document.querySelector(".main__nav");
const daysNav = document.querySelector(".days__nav");
const headerNavChildren = headerNav.querySelectorAll("span");
const mainNavChildren = mainNav.querySelectorAll("span");
const daysNavChildren = daysNav.querySelectorAll("span");

const markSelectedNav = (event) => {
  event.preventDefault();
  const { parentNode } = event.target;
  const previousSelectedTarget = parentNode.querySelector(".selected");
  if (previousSelectedTarget)
    previousSelectedTarget.classList.remove("selected");
  event.target.classList.add("selected");
};

const showSelectedNav = (event) => {
  let type = "";
  if (typeof event === "string") {
    type = event;
  } else {
    event.preventDefault();
    main.innerHTML = "";
    type = event.target.innerHTML;
  }
  const appendedParts = {
    홈: [ads],
    웹툰: [mainNav, ads, days],
  };
  appendedParts[type].forEach((part) => {
    return main.append(part);
  });
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
showSelectedNav("홈");
