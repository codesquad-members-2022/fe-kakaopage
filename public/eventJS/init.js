import { renderMainSecHome, renderMainSecWoD } from "./recEvent.js";
import { domUtil } from "./util.js";
import { data } from "../component/data.js";

const init = () => {
  renderMainSecHome("홈");

  domUtil.$(".recommand__nav--ul").addEventListener("click", function (event) {
    const clickedNav = event.target.textContent;
    const { contentsChecker } = data;
    if (clickedNav === "홈" && clickedNav !== contentsChecker) {
      renderMainSecHome(clickedNav);
    } else if (clickedNav === "요일연재" && clickedNav !== contentsChecker) {
      renderMainSecWoD(clickedNav);
    }
  });

  domUtil.$(".recommand__image--wrapper").style.transform = `translate(-${
    domUtil.$(".recommand__image--wrapper").offsetWidth
  }px)`;
};

export { init };
