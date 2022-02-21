import { createAdSlide } from "../components/adSlide/index.js";
import { createBanner } from "../components/banner/index.js";
import { createCategory } from "../components/category/index.js";
import { createDayTop } from "../components/dayTop/index.js";
import { createGenreTop } from "../components/genreTop/index.js";
import { createNewTop } from "../components/newTop/index.js";
import { createRecommend } from "../components/recommend/index.js";
import {
  BANNER,
  CATEGORIES,
  GENRE_TOP,
  RECOMMEND_BUTTONS,
} from "./constants.js";

function $(selector) {
  return document.querySelector(selector);
}

const category = createCategory(CATEGORIES);
const largeBanner = createBanner(BANNER.LARGE);
const recommend = createRecommend(RECOMMEND_BUTTONS);
const adSlide = createAdSlide();
const dayTop = createDayTop();
const newTop = createNewTop();
const romanceTop = createGenreTop(GENRE_TOP.ROMANCE);
const dramaTop = createGenreTop(GENRE_TOP.DRAMA);
const BLGLTop = createGenreTop(GENRE_TOP.BLGL);
const boyTop = createGenreTop(GENRE_TOP.BOY);
const actionTop = createGenreTop(GENRE_TOP.ACTION);

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
