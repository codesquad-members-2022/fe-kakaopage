import {
  onclickBannerNav,
  onclickBannerController,
  setBannerDisplayByDefault,
} from "../view/bannerView.js";
import { onclickDowNav } from "../eventJS/mainEvent.js";
import { domUtil } from "./util.js";

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
