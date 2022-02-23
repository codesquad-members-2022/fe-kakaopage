import {
  createCateNav,
  createBanner,
  createCateBtnBlock,
  createPromotionBlock,
  createDaysBlock,
  createSmallBannerBlock,
  createGenreBlock,
  createDailyRankBlock,
  createEventBlock,
} from "./render.js";
import { $ } from "./utils.js";
import { dataOfDrama } from "./data/home/drama.js";

$(".main-header-nav").addEventListener("click", (e) => {
  const currentTab = $(".current-tab", ".underline-thick");
  if (currentTab !== null) {
    currentTab.classList.remove("current-tab", "underline-thick");
  }

  e.target.classList.add("current-tab", "underline-thick");

  if (e.target.dataset.mainNav === "1") {
    createCateNav();
    createBanner();
    createCateBtnBlock();
    createPromotionBlock();
    createDaysBlock();
    createSmallBannerBlock();
    createGenreBlock(dataOfDrama);
    createDailyRankBlock();
    createEventBlock();
  } else {
    $("main").innerHTML = "";
  }
});
