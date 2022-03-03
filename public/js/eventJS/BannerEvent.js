import { renderMainSecHome, renderMainSecWoD } from "../view/bannerView";
import { bannerSlide } from "../animation/sliderAnimation";
import { domUtil } from "../Util/util";

const onclickBannerNav = ({ target: { textContent } }) => {
  const { contentsChecker } = data;
  if (textContent === "홈" && textContent !== contentsChecker) {
    // renderMainSecHome(textContent);
    domUtil.getDataAndRender(`/main/${clickedNav}`, renderMainSecHome);
    domUtil.getDataAndRender(`/banner/${clickedNav}`, renderBanner);
  } else if (textContent === "요일연재" && textContent !== contentsChecker) {
    // renderMainSecWoD(textContent);
    domUtil.getDataAndRender(`/main/${clickedNav}`, renderMainSecHome);
    domUtil.getDataAndRender(`/banner/${clickedNav}`, renderBanner);
  }
};

const onclickBannerController = ({ target: { textContent } }) => {
  bannerSlide(textContent);
};

export { onclickBannerNav, onclickBannerController };
