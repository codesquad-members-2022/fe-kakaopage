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
  // `http://localhost:3000/${req.path}`
  fetch(`https://kakapage-nanjeong.herokuapp.com/${req.path}`)
    .then((res) => res.json())
    .then((data) => req.createBlock(data))
    .catch((err) => console.log(err));
};

const renderHome = () => {
  const curTab = "home";

  fillWithData({
    path: `${curTab}/webtoons/banner`,
    createBlock: createBanner,
  });
  fillWithData({
    path: `${curTab}/category-btn`,
    createBlock: createCateBtnBlock,
  });
  fillWithData({
    path: `${curTab}/webtoons/promotion`,
    createBlock: createPromotionBlock,
  });
  fillWithData({
    path: `${curTab}/webtoons/days`,
    createBlock: createDaysBlock,
  });
  fillWithData({
    path: `${curTab}/webtoons/banner/small`,
    createBlock: createSmallBannerBlock,
  });
  fillWithData({
    path: `${curTab}/webtoons/drama`,
    createBlock: createGenreBlock,
  });
  fillWithData({
    path: `${curTab}/webtoons/top3`,
    createBlock: createDailyRankBlock,
  });
  fillWithData({
    path: `${curTab}/webtoons/event`,
    createBlock: createEventBlock,
  });
};

const renderDailyContents = () => {
  const curTab = "daily-contents";

  fillWithData({
    path: `${curTab}/webtoons/banner`,
    createBlock: createBanner,
  });
  fillWithData({
    path: `${curTab}/webtoons/days`,
    createBlock: createDailyContents,
  });
};

export { renderHome, renderDailyContents };
