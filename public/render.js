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
  return fetch(`https://kakapage-nanjeong.herokuapp.com/${req.path}`)
    .then((res) => res.json())
    .then((data) => req.createBlock(data));
};

const renderHome = () => {
  const curTab = "home";
  fillWithData({
    path: `${curTab}/webtoons/banner`,
    createBlock: createBanner,
  })
    .then(
      fillWithData({
        path: `${curTab}/category-btn`,
        createBlock: createCateBtnBlock,
      })
    )
    .then(
      fillWithData({
        path: `${curTab}/webtoons/promotion`,
        createBlock: createPromotionBlock,
      })
    )
    .then(
      fillWithData({
        path: `${curTab}/webtoons/days`,
        createBlock: createDaysBlock,
      })
    )
    .then(
      fillWithData({
        path: `${curTab}/webtoons/banner/small`,
        createBlock: createSmallBannerBlock,
      })
    )
    .then(
      fillWithData({
        path: `${curTab}/webtoons/drama`,
        createBlock: createGenreBlock,
      })
    )
    .then(
      fillWithData({
        path: `${curTab}/webtoons/top3`,
        createBlock: createDailyRankBlock,
      })
    )
    .then(
      fillWithData({
        path: `${curTab}/webtoons/event`,
        createBlock: createEventBlock,
      })
    )
    .catch((err) => console.log(err));
};

const renderDailyContents = () => {
  const curTab = "daily-contents";

  fillWithData({
    path: `${curTab}/webtoons/banner`,
    createBlock: createBanner,
  })
    .then(
      fillWithData({
        path: `${curTab}/webtoons/days`,
        createBlock: createDailyContents,
      })
    )
    .catch((err) => console.log(err));
};

export { renderHome, renderDailyContents };
