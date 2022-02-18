const documentFragment = new DocumentFragment();
const webtoonCategorySection = createWebtoonCategorySection();
const webtoonBoardSection = createWebtoonBoardSection();
documentFragment.append(webtoonCategorySection, webtoonBoardSection);
//export let weeklyPublicationTemplate = documentFragment;

function createHTMLElement(tagName, className) {
  const HTMLElement = document.createElement(tagName);
  HTMLElement.classList.add(className);
  return HTMLElement;
}

function createWebtoonCategorySection() {
  const webtoonCategorySection = createHTMLElement("section", "webtoon_category");
  const weekdayCategoryNav = createWeekdayCategoryNav();
  const webtoonTypeCategoryNav = createWebtoonTypeCategoryNav();
  webtoonCategorySection.append(weekdayCategoryNav, webtoonTypeCategoryNav);
  return webtoonCategorySection;
}

function createWeekdayCategoryNav() {
  const weekdayCategoryNav = createHTMLElement("nav", "weekday_category");
  weekdayCategoryNav.classList.add("category_align");
  const weekdayCategories = ["월", "화", "수", "목", "금", "토", "일", "완결"];
  weekdayCategories.forEach((weekdayCategory) => {
    const weekdayCategoryDiv = createHTMLElement("div", "weekday_category");
    weekdayCategoryDiv.textContent = weekdayCategory;
    weekdayCategoryNav.append(weekdayCategoryDiv);
  });
  return weekdayCategoryNav;
}

function createWebtoonTypeCategoryNav() {
  const webtoonTypeCategoryNav = createHTMLElement("nav", "webtoon_type_conatiner");
  webtoonTypeCategoryNav.classList.add("category_align");
  const webtoonTypeFilterDiv = createWebtoonTypeFilterDiv();
  const webtoonGenreFilterUl = createWebtoonGenreFilterUl();
}

function createWebtoonTypeFilterDiv() {
  const webtoonTypeFilterDiv = createHTMLElement("div", "webtoon_type_filter");
  const waitSignImageTemplate = `<img src="./image/wait_sign.svg" alt="wait_sign"/>`;
  const webtoonTypes = ["전체", "웹툰", "웹툰"];
  webtoonTypes.forEach((webtoonType, index) => {
    const webtoonTypeDiv = createHTMLElement("div", "webtoon_type");
    if (index === webtoonTypes.length - 1) {
      webtoonTypeDiv.insertAdjacentHTML("afterbegin", waitSignImageTemplate);
    }
    webtoonTypeDiv.textContent = webtoonType;
    webtoonTypeFilterDiv.append(webtoonTypeDiv);
  });
  return webtoonTypeFilterDiv;
}

function createWebtoonGenreFilterUl() {
  const webtoonGenreFiterUl = createHTMLElement("ul", "webtoon_genre_filter");
  webtoonGenreFiterUl.textContent = "전체 (152)";
  const webtoonGenres = ["전체", "소년", "드라마", "로맨스","로판", "액션무협","BL"];
  webtoonGenres.forEach((webtoonGenre) => {
    const webtoonGenreLi = createHTMLElement("li", "webtoon_genre");
    webtoonGenreLi.classList.add("none");
    webtoonGenreLi.textContent = webtoonGenre;
    webtoonGenreFiterUl.append(webtoonGenreLi);
  });
  return webtoonGenreFiterUl;
}

function createWebtoonBoardSection() {
  const webtoonBoardSection = createHTMLElement("section", "webtoon_board");
  const webtoonElement = createWebtoonElement();
  const webtoonCount = 5;
  while (webtoonCount) {
    webtoonBoardSection.append(webtoonElement);
  }
  return webtoonBoardSection;
}

function createWebtoonElement() {
  const webtoonElement = createHTMLElement("div", "webtoon");
  const webtoonPreviewDiv = createWebtoonPreviewDiv();
  const webtoonTitleDiv = createWebtoonTitleDiv();
  const webtoonDetailsDiv = createWebtoonDetailsDiv();
  webtoonElement.append(webtoonPreviewDiv, webtoonTitleDiv, webtoonDetailsDiv);
  return webtoonElement;
}

function createWebtoonPreviewDiv() {
  const webtoonPreviewDiv = createHTMLElement("div", "webtoon_preview");
  const webtoonScoreDiv = createHTMLElement("div", "webtoon_score");
  webtoonScoreDiv.textContent = "1위";
  const webtoonPreviewImageTemplate = `<img src="./image/1위.png" alt="first_score" />`;
  const waitSignImageTemplate = `<img src="./image/wait_sign.svg" alt="wait_sign"/>`;
  webtoonPreviewDiv.insertAdjacentHTML("afterbegin", webtoonPreviewImageTemplate);
  webtoonScoreDiv.insertAdjacentHTML("beforeend", waitSignImageTemplate);
  webtoonPreviewDiv.append(webtoonScoreDiv);
  return webtoonPreviewDiv;
}

function createWebtoonTitleDiv() {
  const webtoonTitleDiv = createHTMLElement("div", "webtoon_title");
  webtoonTitleDiv.textContent = "흑막을 버리는 데 실패했다";
  return webtoonTitleDiv;
}

function createWebtoonDetailsDiv() {
  const webtoonDetailsDiv = createHTMLElement("div", "webtoon_details");
  const readCountSpan = createHTMLElement("span", "read_count");
  readCountSpan.textContent = "29.1만명";
  const updateImageTemplate = `<img src="./image/update_webtoon.svg" alt="update_webtoon" />`;
  const fifteenImageTemplate = `<img src="./image/15years.png" alt="15years_webtoon" />`;
  const readCountImageTemplate = `<img src="./image/read_count.png" alt="read_count_icon" />`;
  webtoonDetailsDiv.append(updateImageTemplate, fifteenImageTemplate, readCountImageTemplate, readCountSpan);
  return webtoonDetailsDiv;
}