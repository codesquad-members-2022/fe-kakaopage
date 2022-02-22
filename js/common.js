export function createPromotionWebtoonSection(weeklyPromotionWebtoonList) {
  let promotionWebtoonTemplate = `<section class="promotion_webtoon_section">`;
  weeklyPromotionWebtoonList.forEach((weeklyPromotionWebtoon) => {
    const promotionWebtoonDiv = createPromotionWebtoonDiv(weeklyPromotionWebtoon);
    promotionWebtoonTemplate += promotionWebtoonDiv;
  });
  promotionWebtoonTemplate += "</section>";
  return promotionWebtoonTemplate;
}

function createPromotionWebtoonDiv(promotionWebtoon) {
  return `<div class="promotion_webtoon">
    <img src="${promotionWebtoon.url}">
    <div class="promotion_webtoon_phrase">
      ${promotionWebtoon.phrase}
    </div>
  </div>`;
}

export function createWeekdayCategoryNav() {
  const weekdayCategoryList = ["월", "화", "수", "목", "금", "토", "일", "완결"];
  let weekdayCategoryTemplate = `<nav class="weekday_category_navigation category_align">`;
  weekdayCategoryList.forEach((weekdayCategory) => {
    weekdayCategoryTemplate += `<div class="weekday_category">${weekdayCategory}</div>`;
  });
  weekdayCategoryTemplate += "</nav>";
  return weekdayCategoryTemplate;
}


export function createWebtoonBoardSection(webtoonList) {
  let webtoonBoardTemplate = `<section class="webtoon_board">`;
  webtoonList.forEach((webtoon) => {
    webtoonBoardTemplate += createWebtoonElement(webtoon);
  });
  webtoonBoardTemplate += `</section>`;
  return webtoonBoardTemplate;
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
      <img src="./image/wait_sign.svg">
    </div>
  </div>`;
}

function createWebtoonDetailsDiv(readCount) {
  return `<div class="webtoon_details">
    <img src="./image/update_webtoon.svg" alt="update" />
    <img src="./image/read_count.png" alt="read_count_icon" />
    <span class="read_count">${readCount}</span>
  </div>`;
}

  export function createTodayCategorySection(todayCategotyList) {
    let todayCategoryTemplate = `<section class="today_category_container grid_container">`;
    todayCategotyList.forEach((todayCategory) => {
      todayCategoryTemplate += `<div class="today_category grid_item">${todayCategory}</div>`;
    })
    todayCategoryTemplate += "</section>";
    return todayCategoryTemplate;
  }