import * as common from "./common.js";
import * as data from "./data.js";

let HTMLTemplate = "";
const promotionWebtoonSection = common.createPromotionWebtoonSection(data.weeklyPromotionWebtoonList);
const webtoonCategorySection = createWebtoonCategorySection();
const webtoonBoardSection = common.createWebtoonBoardSection(data.weeklyWebtoonList["화"]);
HTMLTemplate += promotionWebtoonSection + webtoonCategorySection + webtoonBoardSection;
export const weeklyPublicationTemplate = HTMLTemplate;

function createWebtoonCategorySection() {
  let webtoonCategoryTemplate = `<section class="webtoon_category_container">`;
  const weekdayCategoryNav = common.createWeekdayCategoryNav();
  const webtoonTypeCategoryNav = createWebtoonTypeCategoryNav();
  webtoonCategoryTemplate += weekdayCategoryNav + webtoonTypeCategoryNav + "</section>";
  return webtoonCategoryTemplate;
}

function createWebtoonTypeCategoryNav() {
  let webtoonTypeCategoryTemplate = `<nav class="webtoon_type_navigation category_align">`;
  const webtoonTypeFilterNav = createWebtoonTypeFilterNav();
  const webtoonGenreFilterUl = createWebtoonGenreFilterUl();
  webtoonTypeCategoryTemplate += webtoonTypeFilterNav + webtoonGenreFilterUl + "</nav>";
  return webtoonTypeCategoryTemplate;
}

function createWebtoonTypeFilterNav() {
  return `<nav class="webtoon_type_filter category_align">
    <div class="webtoon_type">전체</div>
    <div class="webtoon_type">웹툰</div>
    <div class="webtoon_type"><img src="./image/wait_sign.svg">웹툰</div>
  </nav>`;
}

function createWebtoonGenreFilterUl() {
  let webtoonGenreFilterTemplate = `<ul class="webtoon_genre_filter">
  <span class="webtoon_genre_total">전체 (152)</span>`;
  const webtoonGenreList = ["전체", "소년", "드라마", "로맨스","로판", "액션무협","BL"];
  webtoonGenreList.forEach((webtoonGenre) => {
    webtoonGenreFilterTemplate+= `<li class="webtoon_genre">${webtoonGenre}</li>`;
  });
  webtoonGenreFilterTemplate += `</ul>`;
  return webtoonGenreFilterTemplate;
}
