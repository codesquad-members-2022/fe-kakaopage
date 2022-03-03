function createPromotionWebtoonDiv(promotionWebtoon, slideNumber, totalSlideNumber) {
  return `<div class="promotion_webtoon" data-number="${slideNumber}">
    <img class="promotion_webtoon_image" src="${promotionWebtoon.url}">
    <div class="promotion_webtoon_details">
      <div class="promotion_webtoon_title">${promotionWebtoon.title}</div>
      <div>
        <img src="./image/updatePromotion.svg" alt="promotionUpdate"/>
        <img src="./image/waitSign.svg" alt="waitSign" />
        <span class="font_white">웹툰</span>
        <img src="./image/readCount.png" alt="readCountIcon" />
        <span class="font_white">${promotionWebtoon.readCount}</span>
      </div>
      <div class="slide_number">${slideNumber + 1} / ${totalSlideNumber}</div>
    </div>
    <div class="promotion_webtoon_phrase">
      ${promotionWebtoon.phrase}
    </div>
  </div>`;
}

function createWebtoonElement(webtoon) {
  let webtoonElementTemplate = `<div class="webtoon">`;
  const webtoonTitleDiv = `<div class="webtoon_title">${webtoon.title}</div>`;
  const webtoonPreviewDiv = createWebtoonPreviewDiv(webtoon.url, webtoon.score);
  const webtoonDetailsDiv = createWebtoonDetailsDiv(webtoon.readCount);
  webtoonElementTemplate += webtoonPreviewDiv + webtoonTitleDiv + webtoonDetailsDiv + "</div>";
  return webtoonElementTemplate;
}

function createWebtoonPreviewDiv(imgURL, webtoonScore) {
  return `<div class="webtoon_preview">
    <img src="${imgURL}">
    <div class="webtoon_score">
      ${webtoonScore}
      <img src="./image/waitSign.svg" alt="waitSign" />
    </div>
  </div>`;
}

function createWebtoonDetailsDiv(readCount) {
  return `<div class="webtoon_details">
    <img src="./image/updateWebtoon.svg" alt="update" />
    <img src="./image/readCount.png" alt="readCountIcon" />
    <span class="read_count">${readCount}</span>
  </div>`;
}

export function createPromotionWebtoonSection(weeklyPromotionWebtoonList) {
  let promotionWebtoonTemplate = `<section class="promotion_webtoon_section">
  <div class="slide_button align_space_between">
    <img class="previous_button" src="./image/previousButton.svg" alt="previousButton" />
    <img class="next_button" src="./image/nextButton.svg" alt="nextButton" />
  </div>
  <div class="promotion_webtoon_slide">`;
  const totalSlideNumber = weeklyPromotionWebtoonList.length;
  weeklyPromotionWebtoonList.forEach((weeklyPromotionWebtoon, slideNumber) => {
    const promotionWebtoonDiv = createPromotionWebtoonDiv(weeklyPromotionWebtoon, slideNumber, totalSlideNumber);
    promotionWebtoonTemplate += promotionWebtoonDiv;
  });
  promotionWebtoonTemplate += "</div></section>";
  return promotionWebtoonTemplate;
}

export function createWeekdayCategoryNav() {
  const weekdayCategoryList = ["월", "화", "수", "목", "금", "토", "일", "완결"];
  let weekdayCategoryTemplate = `<nav class="weekday_category_navigation align_spce_around">`;
  weekdayCategoryTemplate += weekdayCategoryList.map((weekdayCategory) => `<div class="weekday_category">${weekdayCategory}</div>`).join('');
  weekdayCategoryTemplate += "</nav>";
  return weekdayCategoryTemplate;
}

export function createWebtoonBoardSection(webtoonList) {
  let webtoonBoardTemplate = `<section class="webtoon_board">`;
  webtoonBoardTemplate += webtoonList.map((webtoon) => createWebtoonElement(webtoon)).join('');
  webtoonBoardTemplate += `</section>`;
  return webtoonBoardTemplate;
}

export function createTodayCategorySection(todayCategotyList) {
  let todayCategoryTemplate = `<section class="today_category_container grid_container">`;
  todayCategoryTemplate += todayCategotyList.map((todayCategory) => `<div class="today_category grid_item">${todayCategory}</div>`).join('');
  todayCategoryTemplate += "</section>";
  return todayCategoryTemplate;
}

export function calculateWeekday() {
  const today = new Date();
  const weekdayIndex = today.getDay();
  const weekdayList = ["일","월", "화", "수", "목", "금", "토"];
  const weekday = weekdayList[weekdayIndex];
  return weekday;
}

export function fetchURL(dataName) {
  const DATA_URL = `http://localhost:3000/${dataName}`;
  return fetch(DATA_URL)
  .then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}
