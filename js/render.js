import { createAdSlide } from "../components/adSlide/index.js";
import { createBanner } from "../components/banner/index.js";
import { createButton } from "../components/Button/index.js";
import { createCategory } from "../components/category/index.js";
import { createDayRankingTop } from "../components/dayRankingTop/index.js";
import { createDayTop } from "../components/dayTop/index.js";
import { createGenreTop } from "../components/genreTop/index.js";
import { createNewTop } from "../components/newTop/index.js";
import { createRecommend } from "../components/recommend/index.js";
import { createRecommendEvent } from "../components/recommendEvent/index.js";
import {
  BANNER,
  CATEGORIES,
  GENRE_TOP,
  RECOMMEND_BUTTONS,
} from "./constants.js";
import { $ } from "./utils.js";

const category = createCategory(CATEGORIES, "snb");
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
const dayRankingTop = createDayRankingTop();
const recommendEvent = createRecommendEvent();
const button = createButton();

const nodes = [
  category,
  largeBanner,
  recommend,
  adSlide,
  dayTop,
  newTop,
  romanceTop,
  dramaTop,
  BLGLTop,
  boyTop,
  actionTop,
  dayRankingTop,
  recommendEvent,
  button,
];

const contents = nodes.reduce((acc, node) => acc + node);

export function renderWebtoon() {
  $(".contents").innerHTML = contents;
  setSelectedSNB();
}

export function renderNothing() {
  $(".contents").innerHTML = "";
}

export function setSelectedSNB() {
  $(".snb ul").firstElementChild.classList = "snb__selected";
  $(".days ul").firstElementChild.classList = "snb__selected";
}

export function renderSNB() {
  $(".contents").innerHTML = category;
}
