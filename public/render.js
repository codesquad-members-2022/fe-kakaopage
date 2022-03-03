import { createBanner } from "./components/banner.js";
import { createCateBtnBlock } from "./components/category-btn.js";
import { createPromotionBlock } from "./components/promotion.js";
import { createDaysBlock } from "./components/days.js";
import { createSmallBannerBlock } from "./components/banner.js";
import { createGenreBlock } from "./components/webtoon.js";
import { createDailyRankBlock } from "./components/daily-rank.js";
import { createEventBlock } from "./components/event.js";
import { createDailyContents } from "./components/daily-contents.js";

const fillWithData = (req) => {
  fetch(`http://localhost:3000/${req.path}`)
    .then((res) => res.json())
    .then((data) => req.createBlock(data))
    .catch((err) => console.log(err));
};

const renderHome = async () => {
  fillWithData({
    path: "webtoons/banner",
    createBlock: createBanner,
  });
  fillWithData({
    path: "category-btn",
    createBlock: createCateBtnBlock,
  });
  fillWithData({
    path: "webtoons/promotion",
    createBlock: createPromotionBlock,
  });
  fillWithData({
    path: "webtoons/days",
    createBlock: createDaysBlock,
  });
  fillWithData({
    path: "webtoons/banner/small",
    createBlock: createSmallBannerBlock,
  });
  fillWithData({
    path: "webtoons/drama/home",
    createBlock: createGenreBlock,
  });
  fillWithData({
    path: "webtoons/top3",
    createBlock: createDailyRankBlock,
  });
  fillWithData({
    path: "webtoons/event",
    createBlock: createEventBlock,
  });
};

const renderDailyContents = () => {
  createBanner();
  createDailyContents();
};

export { renderHome, renderDailyContents };
