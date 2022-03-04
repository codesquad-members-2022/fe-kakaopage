import * as common from "./common.js";
import * as slide from "./slideController.js";
import {weeklyPublicationTemplate} from "./weeklyPublication.js";
import {homeTemplate} from "./home.js";
const weeklyWebtoonList = await common.fetchData("weeklyWebtoonList");
let previousSubCategory = document.createElement("div");
let previousWeekdayCategory = document.createElement("div");

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
      slide.attachSlideButtonHandler();
      slide.executeAutoSlide();
      break;
    case "홈":
      subCategorySection.innerHTML = homeTemplate;
      slide.attachSlideButtonHandler();
      slide.executeAutoSlide();
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
