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
  const INIT_PAGE = "홈";
  domUtil.getDataAndRender("/main/home", renderMainSecHome);
  domUtil.getDataAndRender(`/banner/${INIT_PAGE}`, renderBanner);

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
