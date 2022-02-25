import {weeklyPublicationTemplate} from "./weeklyPublication.js";
import {homeTemplate} from "./home.js";
import {createWebtoonBoardSection} from "./common.js";
import {weeklyWebtoonList} from "./data.js";
let previousSubCategory = document.createElement("div");
let previousWeekdayCategory = document.createElement("div");
let clickButtonCount = 0;

init();

function init() {
  renderSubCategory("요일연재");
  attachSubCategoryHandler();
}

function attachSubCategoryHandler() {
  const subCategoryNav = document.querySelector(".sub_category_navigation");
  delegateEventListener(subCategoryNav, clickSubCategoryNav);
}

function attachWebtoonBoardHandler() {
  const weekdayCategoryNav = document.querySelector(".weekday_category_navigation");
  delegateEventListener(weekdayCategoryNav, clickWeekdayCategoryNav);
}

function delegateEventListener(parentElement, func) {
  parentElement.addEventListener("click", ({target}) => {
    if (target.tagName === "DIV") {
      func(target);
    }
  });
}

function attachButtonHandler() {
  const slideButtonDiv = document.querySelector(".slide_button");
  const slideSize = slideButtonDiv.clientWidth;
  slideButtonDiv.addEventListener("click", ({target}) => {
    if (target.closest(".next_button")) {
      clickButtonCount++;
      moveWebtoonSlide(slideSize);
      return;
    }
    if (target.closest(".previous_button")) {
      clickButtonCount--;
      moveWebtoonSlide(slideSize);
      return;
    }
  });
}

function moveWebtoonSlide(slideSize) {
  console.log(clickButtonCount);
  const promotionWebtoonSlide = document.querySelector(".promotion_webtoon_slide");
  const promotionWebtoons = promotionWebtoonSlide.children;
  if (clickButtonCount < 0) {
    clickButtonCount = promotionWebtoons.length;
    promotionWebtoonSlide.style.transform = `translateX(${- slideSize * (promotionWebtoons.length - 1)}px)`;
    return;
  }
  if (clickButtonCount >= promotionWebtoons.length) {
    promotionWebtoonSlide.style.transform = "";
    clickButtonCount = 0;
    return;
  }
  promotionWebtoonSlide.style.translate = "transform 0.3s ease-in-out";
  promotionWebtoonSlide.style.transform = `translateX(${-slideSize * clickButtonCount}px)`;
}

function clickSubCategoryNav(subCategoryNav) {
  previousSubCategory.classList.remove("bold");
  subCategoryNav.classList.add("bold");
  previousSubCategory = subCategoryNav;
  renderSubCategory(subCategoryNav.innerText);
}

function renderSubCategory(subCategory) {
  const subCategorySection = document.querySelector(".sub_category_section");
  switch (subCategory) {
    case "요일연재":
      subCategorySection.innerHTML = weeklyPublicationTemplate;
      attachWebtoonBoardHandler();
      attachButtonHandler();
      break;
    case "홈":
      subCategorySection.innerHTML = homeTemplate;
      attachButtonHandler();
      break;
    case "웹툰": case "소년": case "드라마": case "로맨스": case "로판": case "액션무협": case "BL":
      subCategorySection.innerHTML = "";
      break;
  }
}

function clickWeekdayCategoryNav(weekdayCategoryNav) {
  previousWeekdayCategory.classList.remove("paint_yellow");
  weekdayCategoryNav.classList.add("paint_yellow");
  previousWeekdayCategory = weekdayCategoryNav;
  renderWebtoonBoard(weekdayCategoryNav.innerText);
}

function renderWebtoonBoard(weekday) {
  const webtoonBoardSection = document.querySelector(".webtoon_board");
  const webtoonBoardTemplate = createWebtoonBoardSection(weeklyWebtoonList[weekday]);
  webtoonBoardSection.innerHTML = webtoonBoardTemplate;
}
