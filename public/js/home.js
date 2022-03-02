import * as common from "./common.js";


async function getHomeTemplate() {
  const homeTemplate = await fetchURL();
  return homeTemplate;
}

function fetchURL() {
  const DATA_URL = "http://localhost:3000/weeklyPromotionWebtoonList";
  return fetch(DATA_URL).then(response => response.json()).then(data=> createHomeTemplate(data));
}

function createHomeTemplate(data) {
  let HTMLTemplate = "";
  const todayCategoryList = ["오늘 UP", "오늘 신작", "오리지널", "완결까지 정주행", "독립운동가 웹툰", "오늘 랭킹 1위"];
  let weeklyPromotionWebtoonList;
  weeklyPromotionWebtoonList = data["home"];
  const promotionWebtoonSection = common.createPromotionWebtoonSection(weeklyPromotionWebtoonList);
  const todayCategorySection = common.createTodayCategorySection(todayCategoryList);
  HTMLTemplate += promotionWebtoonSection + todayCategorySection;
  return HTMLTemplate;
}

export const homeTemplate = getHomeTemplate();
