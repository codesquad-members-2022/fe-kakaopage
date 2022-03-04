import { $ } from "./util/dom-lib.js";
import { Render } from "./render.js";

Render.fixedHeader();
Render.toon_main();
Render.footerContent();

// 메뉴-초기선택
Render.header_toon();
Render.toonCategory();
Render.toonDaySeriesTop();

(function addEvent() {
  $("body").addEventListener("click", ({ target }) => {
    let action = target.dataset.action;

    if (!action) {
      action = target.parentNode.dataset.action;
      target = target.parentNode;
    }

    if (action) {
      Render[action](target);
    }
  });
})();
