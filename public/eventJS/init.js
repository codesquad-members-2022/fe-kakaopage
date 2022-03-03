import {
  renderMainSecHome,
  renderMainSecWoD,
  onclickBannerNav,
} from "./recEvent.js";
import { domUtil } from "./util.js";
import { data } from "../component/data.js";

const initMainPage = () => {
  renderMainSecHome("홈");

  domUtil.eventsAdder(".recommand__nav--ul", "click", onclickBannerNav);
  domUtil.eventsAdder(".main__nav__dow", "click", onclickDowNav);

  // 이부분도 세팅 하게 바꿔야함
  domUtil.$(".recommand__image--wrapper").style.transform = `translate(-${
    domUtil.$(".recommand__image--wrapper").offsetWidth
  }px)`;
};

export { initMainPage };
