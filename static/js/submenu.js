import { $ } from "./utils/dom.js";
import { toggleClass } from "./tools.js";
import { render, renderHome, renderWeekday } from "./renderer.js";

const bindSubMenuEvent = () => {
    $(".sub-menu").addEventListener("click", ({ target }) => {
        const curEl = target.parentNode;
        const targetPage = target.innerText;

        toggleClass(curEl, "active");

        if (targetPage === "홈") {
            renderHome();
            return;
        }
        if (targetPage === "요일연재") {
            renderWeekday();
            return;
        }
        render("");
    });
};

export { bindSubMenuEvent };
