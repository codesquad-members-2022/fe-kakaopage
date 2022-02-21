import { createAdSlide } from "../components/adSlide/index.js";
import { createBanner } from "../components/banner/index.js";
import { createBox } from "../components/box/index.js";
import { createCategory } from "../components/category/index.js";
import { createDayTop } from "../components/dayTop/index.js";
import { createGenreTop } from "../components/genreTop/index.js";
import { createNewTop } from "../components/newTop/index.js";
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
const dayTop = createDayTop();
const newTop = createNewTop();
const romanceTop = createGenreTop({ title: "로맨스 Top" });
const dramaTop = createGenreTop({ title: "드라마 Top" });
const BLGLTop = createGenreTop({ title: "BL/GL Top" });
const boyTop = createGenreTop({ title: "소년 Top" });
const actionTop = createGenreTop({ title: "액션무협 Top" });

$(".contents").insertAdjacentHTML("beforeend", category);
$(".contents").insertAdjacentHTML("beforeend", largeBanner);
$(".contents").insertAdjacentHTML("beforeend", recommend);
$(".contents").insertAdjacentHTML("beforeend", adSlide);
$(".contents").insertAdjacentHTML("beforeend", dayTop);
$(".contents").insertAdjacentHTML("beforeend", newTop);
$(".contents").insertAdjacentHTML("beforeend", romanceTop);
$(".contents").insertAdjacentHTML("beforeend", dramaTop);
$(".contents").insertAdjacentHTML("beforeend", BLGLTop);
$(".contents").insertAdjacentHTML("beforeend", boyTop);
$(".contents").insertAdjacentHTML("beforeend", actionTop);
