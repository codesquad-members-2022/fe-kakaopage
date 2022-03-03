import { renderMainSecHome, renderMainSecWoD } from "../view/recView";
import { bannerSlide } from "../animation/sliderAnimation";

const onclickBannerNav = ({ target: { textContent } }) => {
  const { contentsChecker } = data;
  if (textContent === "홈" && textContent !== contentsChecker) {
    renderMainSecHome(textContent);
    renderBanner(textContent);
  } else if (textContent === "요일연재" && textContent !== contentsChecker) {
    renderMainSecWoD(textContent);
    renderBanner(textContent);
  }
};

const onclickBannerController = ({ target: { textContent } }) => {
  bannerSlide(textContent);
};

export { onclickBannerNav, onclickBannerController };
