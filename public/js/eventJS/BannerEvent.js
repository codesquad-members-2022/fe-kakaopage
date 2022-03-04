import { renderMainSecHome, renderMainSecWoD } from "/js/view/mainView.js";
import { bannerSlide } from "/js/animation/sliderAnimation.js";
import { domUtil } from "/js/Util/util.js";
import { WHOLE_DATA } from "/index.js";
import { renderBanner } from "/js/view/bannerView.js";

const onclickBannerNav = ({ target: { textContent } }) => {
  const { contentsChecker } = WHOLE_DATA;

  if (textContent === "홈" && textContent !== contentsChecker) {
    domUtil.getDataAndRender(`/main/${textContent}`, renderMainSecHome);
    domUtil.getDataAndRender(`/banner/${textContent}`, renderBanner);
    return;
  }

  if (textContent === "요일연재" && textContent !== contentsChecker) {
    domUtil.getDataAndRender(`/main/${textContent}`, renderMainSecWoD);
    domUtil.getDataAndRender(`/banner/${textContent}`, renderBanner);
    return;
  }
};

const onclickBannerController = ({ target: { textContent } }) => {
  bannerSlide(textContent);
};

export { onclickBannerNav, onclickBannerController };
