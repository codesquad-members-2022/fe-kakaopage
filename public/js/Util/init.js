import {
  setBannerDisplayByDefault,
  renderBanner,
} from "/js/view/bannerView.js";
import { onclickDowNav } from "/js/eventJS/mainEvent.js";
import { domUtil } from "/js/Util/util.js";
import {
  onclickBannerNav,
  onclickBannerController,
} from "/js/eventJS/BannerEvent.js";
import { renderMainSecHome } from "/js/view/mainView.js";

const initMainPage = () => {
  const INIT_PAGE = "홈"; // 무엇이 문제이지?
  // uri 한글 인코딩 문제 이것만 해결하면 정상작동인데...
  domUtil.getDataAndRender(
    `/main/${encodeURIComponent(INIT_PAGE)}`,
    renderMainSecHome
  );
  domUtil.getDataAndRender(
    `/banner/${encodeURIComponent(INIT_PAGE)}`,
    renderBanner
  );

  domUtil.eventsAdder(".recommand__nav--ul", "click", onclickBannerNav);
  domUtil.eventsAdder(".main__nav__dow", "click", onclickDowNav);
  domUtil.eventsAdder(
    ".recommand__image--controller",
    "click",
    onclickBannerController
  );

  setBannerDisplayByDefault();
};

export { initMainPage };
