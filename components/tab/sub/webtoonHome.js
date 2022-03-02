import { createBanner } from "../../common/banner/index.js";
import { createButton } from "../../common/Button/index.js";
import { createDayRankingTop } from "../../common/dayRankingTop/index.js";
import { createDayTop } from "../../common/dayTop/index.js";
import { createGenreTop } from "../../common/genreTop/index.js";
import { createNewTop } from "../../common/newTop/index.js";
import { createRecommend } from "../../common/recommend/index.js";
import { createRecommendEvent } from "../../common/recommendEvent/index.js";
import { createAdSlide } from "../../common/adSlide/index.js";
import { BANNER, GENRE_TOP, RECOMMEND_BUTTONS } from "../../../js/constants.js";
import { createCarousel } from "../../common/carousel/index.js";

export function createTabWebtoonHome() {
  const carousel = createCarousel(BANNER.LARGE);
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
    carousel,
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
