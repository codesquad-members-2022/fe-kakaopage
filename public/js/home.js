import * as common from "./common.js";

const promotionWebtoonList = await common.fetchURL("promotionWebtoonList");

function createHomeTemplate() {
  const todayCategoryList = ["오늘 UP", "오늘 신작", "오리지널", "완결까지 정주행", "독립운동가 웹툰", "오늘 랭킹 1위"];
  const homePromotionWebtoon = common.createPromotionWebtoonSection(promotionWebtoonList["home"]);
  const todayCategorySection = common.createTodayCategorySection(todayCategoryList);
  const homeTemplate = homePromotionWebtoon + todayCategorySection;
  return homeTemplate;
}

export const homeTemplate = createHomeTemplate();