import { createBanner } from "./components/banner.js";
import { createCateBtnBlock } from "./components/category-btn.js";
import { createPromotionBlock } from "./components/promotion.js";
import { createDaysBlock } from "./components/days.js";
import { createSmallBannerBlock } from "./components/banner.js";
import { createGenreBlock } from "./components/webtoon.js";
import { createDailyRankBlock } from "./components/daily-rank.js";
import { createEventBlock } from "./components/event.js";
import { createDailyContents } from "./components/daily-contents.js";

const renderHome = async () => {
  createBanner();
  createCateBtnBlock();
  createPromotionBlock();
  createDaysBlock();
  createSmallBannerBlock();
  await fetch("http://localhost:3000/webtoons/drama/home")
    .then((res) => res.json())
    .then((dataOfDrama) => createGenreBlock(dataOfDrama));
  createDailyRankBlock();
  createEventBlock();
};

const renderDailyContents = () => {
  createBanner();
  createDailyContents();
};

export { renderHome, renderDailyContents };
