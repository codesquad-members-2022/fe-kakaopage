import { domUtil } from "/js/Util/util.js";
import { getBannerHtml } from "/js/component/BannerComponent.js";
import { onclickBannerController } from "/js/eventJS/BannerEvent.js";

// 패치 빼기 패치는 onclick에서 담당하게하자 네트워크통신도 따로 netWork 폴더를 만들어야할까?
const renderBanner = (bannerUrl) => {
  domUtil.$(".recommand__image").innerHTML = getBannerHtml(bannerUrl);
  domUtil
    .$(".recommand__image--controller")
    .addEventListener("click", onclickBannerController);
};

const setBannerDisplayByDefault = () => {
  domUtil.$(".recommand__image--wrapper").style.transform = `translate(-${
    domUtil.$(".recommand__image--wrapper").offsetWidth
  }px)`;
};

export { renderBanner, setBannerDisplayByDefault };
