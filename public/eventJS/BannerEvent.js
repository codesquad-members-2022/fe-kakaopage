import { renderMainSecHome, renderMainSecWoD } from "../view/recView";

const onclickBannerNav = ({ target: { textContent } }) => {
  const { contentsChecker } = data;
  if (textContent === "홈" && textContent !== contentsChecker) {
    renderMainSecHome(textContent);
  } else if (textContent === "요일연재" && textContent !== contentsChecker) {
    renderMainSecWoD(textContent);
  }
};

export { onclickBannerNav };
