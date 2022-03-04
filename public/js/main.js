import * as common from "./common.js";
import {weeklyPublicationTemplate} from "./weeklyPublication.js";
import {homeTemplate} from "./home.js";
const weeklyWebtoonList = await common.fetchData("weeklyWebtoonList");
let previousSubCategory = document.createElement("div");
let previousWeekdayCategory = document.createElement("div");
let webtoonSlideIndex = 0;
let isMovable = true;
let isAutoSlideScheduled = null;

init();

function init() {
  const initialSubCategory = "요일연재";
  renderSubCategory(initialSubCategory);
  attachSubCategoryHandler();
}

function renderSubCategory(subCategory) {
  const subCategorySection = document.querySelector(".sub_category_section");
  switch (subCategory) {
    case "요일연재":
      subCategorySection.innerHTML = weeklyPublicationTemplate;
      attachWebtoonBoardHandler();
      attachSlideButtonHandler();
      executeAutoSlide();
      break;
    case "홈":
      subCategorySection.innerHTML = homeTemplate;
      attachSlideButtonHandler();
      executeAutoSlide();
      break;
    case "웹툰": case "소년": case "드라마": case "로맨스": case "로판": case "액션무협": case "BL":
      subCategorySection.innerHTML = "";
      break;
  }
}

function renderWebtoonBoard(weekday) {
  const webtoonBoardSection = document.querySelector(".webtoon_board");
  const webtoonBoardTemplate = common.createWebtoonBoardSection(weeklyWebtoonList[weekday]);
  webtoonBoardSection.innerHTML = webtoonBoardTemplate;
}

function attachSubCategoryHandler() {
  const subCategoryNav = document.querySelector(".sub_category_navigation");
  common.delegateEventListener(subCategoryNav, clickSubCategoryNav);
}

function attachWebtoonBoardHandler() {
  const weekdayCategoryNav = document.querySelector(".weekday_category_navigation");
  common.delegateEventListener(weekdayCategoryNav, clickWeekdayCategoryNav);
}

function attachSlideButtonHandler() {
  const slideButtonDiv = document.querySelector(".slide_button");
  slideButtonDiv.addEventListener("click", ({target}) => {
    isMovable = false;
    if (target.closest(".next_button")) {
      webtoonSlideIndex++;
      moveWebtoonSlide();
      return;
    }
    if (target.closest(".previous_button")) {
      webtoonSlideIndex--;
      moveWebtoonSlide();
      return;
    }
  });
}

function clickSubCategoryNav(subCategoryNav) {
  previousSubCategory.classList.remove("bold");
  subCategoryNav.classList.add("bold");
  previousSubCategory = subCategoryNav;
  renderSubCategory(subCategoryNav.innerText);
}

function clickWeekdayCategoryNav(weekdayCategoryNav) {
  previousWeekdayCategory.classList.remove("paint_yellow");
  weekdayCategoryNav.classList.add("paint_yellow");
  previousWeekdayCategory = weekdayCategoryNav;
  renderWebtoonBoard(weekdayCategoryNav.innerText);
}

function moveWebtoonSlide() {
  const promotionWebtoonSection = document.querySelector(".promotion_webtoon_section");
  if (!promotionWebtoonSection) {
    return; // "웹툰", "소년", "드라마", "로맨스", "로판", "액션무협", "BL"의 promotionWebtoonSection은 구현하지 않았으므로 막아두었습니다.
  }
  const slideSize = promotionWebtoonSection.clientWidth;
  const promotionWebtoonSlide = document.querySelector(".promotion_webtoon_slide");
  const promotionWebtoons = promotionWebtoonSlide.children;
  if (webtoonSlideIndex < 0) {
    webtoonSlideIndex = promotionWebtoons.length;
    promotionWebtoonSlide.style.transform = `translateX(${- slideSize * (promotionWebtoons.length - 1)}px)`;
    isMovable = true;
    return;
  }
  if (webtoonSlideIndex >= promotionWebtoons.length) {
    promotionWebtoonSlide.style.transform = "";
    webtoonSlideIndex = 0;
    isMovable = true;
    return;
  }
  promotionWebtoonSlide.style.translate = "transform 1s ease-in-out";
  promotionWebtoonSlide.style.transform = `translateX(${-slideSize * webtoonSlideIndex}px)`;
  isMovable = true;
}

function executeAutoSlide() {
  const delayTime = 3000;
  if (!isMovable || isAutoSlideScheduled) {
    return;
  }
  isAutoSlideScheduled = setTimeout(() => {
    autoWebtoonSlide();
  }, delayTime);
}

function autoWebtoonSlide() {
  webtoonSlideIndex++;
  moveWebtoonSlide();
  isAutoSlideScheduled = null;
  executeAutoSlide();
}
