import { createHTMLElement, createImageElement, createFormElement, createTextElement, createCategoryNavigation, createUnorderedList } from "./util.js";

const documentFragment = new DocumentFragment();
const header = createHeader();
const subCategoryNavigation = createSubCategoryNavigation();
const promotionWebtoonSection = createPromotionWebtoonSection();
const webtoonCategorySection = createWebtoonCategorySection();
const webtoonBoardSection = createWebtoonBoardSection();
documentFragment.append(header, subCategoryNavigation, promotionWebtoonSection, webtoonCategorySection, webtoonBoardSection);
export const weeklyPublicationTemplate = documentFragment;

function createHeader() {
  const header = document.createElement("header");
  const logoImage = createImageElement("./image/kakaopage_logo.svg");
  const mainMenuContainer = createMainMenuContainer();
  const mainCategoryNavigation = createMainCategoryNavigation();
  header.append(logoImage, mainMenuContainer, mainCategoryNavigation);
  return header;
}

function createMainMenuContainer() {
  const mainMenuContainer = createHTMLElement("div", "main_menu_container");
  const searchBox = createSearchBox();
  const stageImage = createImageElement("./image/stage.svg");
  const cashChargeDiv = createTextElement("div", "main_menu", "캐쉬충전");
  const loginDiv = createTextElement("div", "main_menu", "로그인");
  mainMenuContainer.append(searchBox, stageImage, cashChargeDiv, loginDiv);
  return mainMenuContainer;
}

function createSearchBox() {
  const searchBox = createHTMLElement("div", "main_menu");
  searchBox.classList.add("search_box");
  const searchInput = createFormElement("input", "search_bar", "text");
  const searchButton = createFormElement("button", "search_button", "button");
  const searchButtonImage = createImageElement("./image/searchButton.png");
  searchButton.appendChild(searchButtonImage);
  searchBox.append(searchInput, searchButton);
  return searchBox;
}

function createMainCategoryNavigation() {
  const mainCategoryList = ["홈", "웹툰", "웹소설", "영화", "방송", "책"];
  const mainCategoryNavigation = createCategoryNavigation("main_category_navigation", "main_category",mainCategoryList);
  const mainCategories = mainCategoryNavigation.children;
  const waitSignImage1 = createImageElement("./image/wait_sign.svg");
  const waitSignImage2 = createImageElement("./image/wait_sign.svg");
  mainCategories[1].appendChild(waitSignImage1);
  mainCategories[2].appendChild(waitSignImage2);
  return mainCategoryNavigation;
}

function createSubCategoryNavigation() {
  const subCategoryList = ["홈", "요일연재", "웹툰", "소년", "드라마", "로맨스", "로판", "액션무협", "BL"];
  const subCategoryNavigation = createCategoryNavigation("sub_category_navigation", "sub_category",subCategoryList);
  return subCategoryNavigation;
}

function createPromotionWebtoonSection() {
  const promotionWebtoonSection = createHTMLElement("section", "promotion_webtoon");
  const promotionImage = createImageElement("./image/궁에 숨은 꽃.png");
  const promotionPhraseDiv = createTextElement("div", "promotion_webtoon_phrase", "남장하고 입궐한 사실을 들켰다?");
  promotionWebtoonSection.append(promotionImage, promotionPhraseDiv);
  return promotionWebtoonSection;
}

function createWebtoonCategorySection() {
  const webtoonCategorySection = createHTMLElement("section", "webtoon_category_container");
  const weekdayCategoryList = ["월", "화", "수", "목", "금", "토", "일", "완결"];
  const weekdayCategoryNav = createCategoryNavigation("weekday_category_navigation", "weekday_category", weekdayCategoryList);
  const webtoonTypeCategoryNav = createWebtoonTypeCategoryNav();
  webtoonCategorySection.append(weekdayCategoryNav, webtoonTypeCategoryNav);
  return webtoonCategorySection;
}

function createWebtoonTypeCategoryNav() {
  const webtoonTypeCategoryNav = createHTMLElement("nav", "webtoon_type_navigation");
  webtoonTypeCategoryNav.classList.add("category_align");
  const webtoonTypeFilterNav = createWebtoonTypeFilterNav();
  const webtoonGenreFilterUl = createWebtoonGenreFilterUl();
  webtoonTypeCategoryNav.append(webtoonTypeFilterNav, webtoonGenreFilterUl);
  return webtoonTypeCategoryNav;
}

function createWebtoonTypeFilterNav() {
  const webtoonTypeList = ["전체", "웹툰", "웹툰"];
  const waitSignImage = createImageElement("./image/wait_sign.svg");
  const webtoonTypeFilterNav = createCategoryNavigation("webtoon_type_filter", "webtoon_type", webtoonTypeList);
  const lastWebtoonType = webtoonTypeFilterNav.lastElementChild;
  webtoonTypeFilterNav.insertBefore(waitSignImage, lastWebtoonType);
  return webtoonTypeFilterNav;
}

function createWebtoonGenreFilterUl() {
  const webtoonGenreList = ["전체", "소년", "드라마", "로맨스","로판", "액션무협","BL"];
  const webtoonGenreFilterUl = createUnorderedList("webtoon_genre_filter", "webtoon_genre", webtoonGenreList);
  const webtoonGEenreFilterTotal = createTextElement("span", "webtoon_genre_total", "전체 (152)");
  const firstWebtoonGenre = webtoonGenreFilterUl.firstElementChild;
  webtoonGenreFilterUl.insertBefore(webtoonGEenreFilterTotal, firstWebtoonGenre);
  return webtoonGenreFilterUl;
}


function createWebtoonBoardSection() {
  const webtoonBoardSection = createHTMLElement("section", "webtoon_board");
  let webtoonCount = 5;
  while (webtoonCount) {
    const webtoonElement = createWebtoonElement();
    webtoonBoardSection.append(webtoonElement);
    webtoonCount--;
  }
  return webtoonBoardSection;
}

function createWebtoonElement() {
  const webtoonElement = createHTMLElement("div", "webtoon");
  const webtoonPreviewDiv = createWebtoonPreviewDiv();
  const webtoonTitleDiv = createTextElement("div", "webtoon_title", "흑막을 버리는 데 실패했다");
  const webtoonDetailsDiv = createWebtoonDetailsDiv();
  webtoonElement.append(webtoonPreviewDiv, webtoonTitleDiv, webtoonDetailsDiv);
  return webtoonElement;
}

function createWebtoonPreviewDiv() {
  const webtoonPreviewDiv = createHTMLElement("div", "webtoon_preview");
  const webtoonScoreDiv = createTextElement("div", "webtoon_score", "1위");
  const webtoonPreviewImage = createImageElement("./image/1위.png");
  const waitSignImage = createImageElement("./image/wait_sign.svg");
  webtoonScoreDiv.classList.add("category_align")
  webtoonScoreDiv.appendChild(waitSignImage);
  webtoonPreviewDiv.append(webtoonPreviewImage, webtoonScoreDiv);
  return webtoonPreviewDiv;
}

function createWebtoonDetailsDiv() {
  const webtoonDetailsDiv = createHTMLElement("div", "webtoon_details");
  const updateImage = createImageElement("./image/update_webtoon.svg");
  const fifteenImage = createImageElement("./image/15years.png");
  const readCountIconImage = createImageElement("./image/read_count.png")
  const readCountSpan = createTextElement("span", "read_count", "29.1만명");
  webtoonDetailsDiv.append(updateImage, fifteenImage, readCountIconImage, readCountSpan);
  return webtoonDetailsDiv;
}
