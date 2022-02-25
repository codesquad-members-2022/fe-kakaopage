import { $ } from "./dom-lib.js";
import { Render } from "./render.js";

Render.fixedHeader();
Render.header_toon();
Render.toon_main();
Render.footerContent();

(function addEvent() {
  $("body").addEventListener("click", ({ target }) => {
    let action = target.dataset.action;

    if (!action) {
      action = target.parentNode.dataset.action;
      target = target.parentNode;
    }

    //? render 클래스에 함수가 없을 때 오류
    if (action) {
      Render[action](target);
    }
  });
})();
