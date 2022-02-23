import { createCategory } from "../category/index.js";
import { createBanner } from "../banner/index.js";
import { createButton } from "../Button/index.js";
import { createDayRankingTop } from "../dayRankingTop/index.js";
import { createDayTop } from "../dayTop/index.js";
import { createGenreTop } from "../genreTop/index.js";
import { createNewTop } from "../newTop/index.js";
import { createRecommend } from "../recommend/index.js";
import { createRecommendEvent } from "../recommendEvent/index.js";
import { createAdSlide } from "../adSlide/index.js";
import {
  BANNER,
  CATEGORIES,
  GENRE_TOP,
  RECOMMEND_BUTTONS,
} from "../../js/constants.js";

export function createTabWebtoonHome() {
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

  return nodes.reduce((acc, node) => acc + node);
}
