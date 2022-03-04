import { dowTopDefault } from "./views/blocks/dow-top.js";
import { renderingDowNavDefault } from "./views/render/nav.js";
import { renderingMainAd } from "./views/render/main-ad-banner.js";
import { handleCategory } from "./controllers/handle-cateogry.js";

const renderingDefault = () => {
  renderingMainAd("홈");
  renderingDowNavDefault();
  dowTopDefault();
};

const setNavEvent = () => {
  document.querySelectorAll(".nav__list").forEach((e) => {
    e.addEventListener("click", handleCategory);
  });
};

renderingDefault();
setNavEvent();
