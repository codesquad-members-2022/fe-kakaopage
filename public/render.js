import { createBanner } from "./components/banner.js";
import { createCateBtnBlock } from "./components/category-btn.js";
import { createPromotionBlock } from "./components/promotion.js";
import { createDaysBlock } from "./components/days.js";
import { createSmallBannerBlock } from "./components/banner.js";
import { createGenreBlock } from "./components/webtoon.js";
import { createDailyRankBlock } from "./components/daily-rank.js";
import { createEventBlock } from "./components/event.js";
import { dataOfDrama } from "./data/home/drama.js";

const renderHome = () => {
  createBanner();
  createCateBtnBlock();
  createPromotionBlock();
  createDaysBlock();
  createSmallBannerBlock();
  createGenreBlock(dataOfDrama);
  createDailyRankBlock();
  createEventBlock();
};

export { renderHome };
