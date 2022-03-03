import { setBannerDisplayByDefault } from "/js/view/bannerView.js";
import { onclickDowNav } from "/js/eventJS/mainEvent.js";
import { domUtil } from "/js/Util/util.js";
import {
  onclickBannerNav,
  onclickBannerController,
} from "/js/eventJS/BannerEvent.js";
const initMainPage = () => {
  const INIT_PAGE = "홈";
  renderMainSecHome(INIT_PAGE);
  renderBanner(INIT_PAGE);

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
