import * as common from "./common.js";
import * as data from "./data.js";

let HTMLTemplate = "";
const promotionWebtoonSection = common.createPromotionWebtoonSection(data.weeklyPromotionWebtoonList);
const todayCategoryList = ["오늘 UP", "오늘 신작", "오리지널", "완결까지 정주행", "독립운동가 웹툰", "오늘 랭킹 1위"];
const todayCategorySection = common.createTodayCategorySection(todayCategoryList);
HTMLTemplate += promotionWebtoonSection + todayCategorySection;
export const homeTemplate = HTMLTemplate;
