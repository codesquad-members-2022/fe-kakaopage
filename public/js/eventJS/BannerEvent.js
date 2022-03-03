import { renderMainSecHome, renderMainSecWoD } from "/js/view/mainView.js";
import { bannerSlide } from "/js/animation/sliderAnimation.js";
import { domUtil } from "/js/Util/util.js";

const onclickBannerNav = ({ target: { textContent } }) => {
  const { contentsChecker } = data;

  if (textContent === "홈" && textContent !== contentsChecker) {
    domUtil.getDataAndRender(`/main/${clickedNav}`, renderMainSecHome);
    domUtil.getDataAndRender(`/banner/${clickedNav}`, renderBanner);
    return;
  }

  if (textContent === "요일연재" && textContent !== contentsChecker) {
    domUtil.getDataAndRender(`/main/${clickedNav}`, renderMainSecWoD);
    domUtil.getDataAndRender(`/banner/${clickedNav}`, renderBanner);
    return;
  }
};

const onclickBannerController = ({ target: { textContent } }) => {
  bannerSlide(textContent);
};

export { onclickBannerNav, onclickBannerController };
