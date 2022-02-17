import { createAdSlide } from "../components/adSlide/index.js";
import { createBanner } from "../components/banner/index.js";
import { createCategory } from "../components/category/index.js";
import { createRecommend } from "../components/recommend/index.js";
import { CATEGORIES, RECOMMEND_BUTTONS } from "./constants.js";

function $(selector) {
  return document.querySelector(selector);
}

const category = createCategory(CATEGORIES);
const banner = createBanner({
  title: "내가 죽였다",
  type: "웹툰",
  views: 20.5,
  progress: "1/4",
  ad: "누가 아군이고, 누가 적인가.",
});
const recommend = createRecommend(RECOMMEND_BUTTONS);
const adSlide = createAdSlide();

$(".contents").insertAdjacentHTML("beforeend", category);
$(".contents").insertAdjacentHTML("beforeend", banner);
$(".contents").insertAdjacentHTML("beforeend", recommend);
$(".contents").insertAdjacentHTML("beforeend", adSlide);
