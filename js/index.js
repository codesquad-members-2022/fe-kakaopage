import { createAdSlide } from "../components/adSlide/index.js";
import { createBanner } from "../components/banner/index.js";
import { createBox } from "../components/box/index.js";
import { createCategory } from "../components/category/index.js";
import { createDayTOP } from "../components/dayTOP/index.js";
import { createNewTOP } from "../components/newTOP/index.js";
import { createRecommend } from "../components/recommend/index.js";
import { createWorkSmall } from "../components/workSmall/index.js";
import { CATEGORIES, RECOMMEND_BUTTONS } from "./constants.js";

function $(selector) {
  return document.querySelector(selector);
}

const category = createCategory(CATEGORIES);
const largeBanner = createBanner({
  size: "large",
  title: "large banner",
  type: "웹툰",
  views: 20.5,
  ad: "누가 아군이고, 누가 적인가.",
});
const recommend = createRecommend(RECOMMEND_BUTTONS);
const adSlide = createAdSlide();
const dayTOP = createDayTOP();
const newTOP = createNewTOP();

$(".contents").insertAdjacentHTML("beforeend", category);
$(".contents").insertAdjacentHTML("beforeend", largeBanner);
$(".contents").insertAdjacentHTML("beforeend", recommend);
$(".contents").insertAdjacentHTML("beforeend", adSlide);
$(".contents").insertAdjacentHTML("beforeend", dayTOP);
$(".contents").insertAdjacentHTML("beforeend", newTOP);
