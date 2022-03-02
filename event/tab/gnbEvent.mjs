import { renderDailySer } from "../../render/all/dailySer.mjs";
import { renderHome } from "../../render/all/home.mjs";
import { $ } from "../../util/util.mjs";

const addLnbEvent = () => {
  $(".lnb__ul").addEventListener("click", (e) => {
    document.querySelectorAll(".lnb__li").forEach((val) => {
      val.classList.remove("selected-color");
    });
    e.target.classList.add("selected-color");
    while ($(".main__inner").children.length > 1) {
      $(".main__inner").removeChild($(".main__inner").lastElementChild);
    }
    switch (e.target.firstChild.nodeValue) {
      case "홈":
        renderHome();
        break;
      case "요일연재":
        renderDailySer();
        break;
    }
  });
};

export { addLnbEvent };
