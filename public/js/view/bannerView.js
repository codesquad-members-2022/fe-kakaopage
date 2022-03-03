import { domUtil } from "./util.js.js";
import { getBannerHtml } from "../component/BannerComponent.js";
import { onClickBannerController } from "./slider.js.js";

// 패치 빼기 패치는 onclick에서 담당하게하자 네트워크통신도 따로 netWork 폴더를 만들어야할까?
const renderBanner = (bannerUrl) => {
  domUtil.$(".recommand__image").innerHTML = getBannerHtml(bannerUrl);
  domUtil
    .$(".recommand__image--controller")
    .addEventListener("click", onClickBannerController);
};

const setBannerDisplayByDefault = () => {
  domUtil.$(".recommand__image--wrapper").style.transform = `translate(-${
    domUtil.$(".recommand__image--wrapper").offsetWidth
  }px)`;
};

export { renderBanner, setBannerDisplayByDefault };
