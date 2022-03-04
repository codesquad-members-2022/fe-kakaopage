import { $ } from "./util/dom-lib.js";
import { Render } from "./render.js";

Render.fixedHeader();
Render.toon_main();
Render.footerContent();

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
