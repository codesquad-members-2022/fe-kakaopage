const main = document.querySelector("main");
const ads = document.querySelector(".ads");
const days = document.querySelector(".days");
const headerNav = document.querySelector(".header__nav");
const mainNav = document.querySelector(".main__nav");
const daysNav = document.querySelector(".days__nav");

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

headerNav.querySelectorAll("span").forEach((child) => {
  child.addEventListener("click", showSelectedNav);
});

markSelectedNavEvent(headerNav);
markSelectedNavEvent(mainNav);
markSelectedNavEvent(daysNav);
showSelectedNav("홈");
