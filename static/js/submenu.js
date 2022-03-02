import { $ } from "./utils/dom.js";

import { toggleClass } from "./tools.js";
import * as datas from "./data/datas.js";

import { render, renderHome, renderWeekday } from "./renderer.js";
import { renderCarousel } from "./carousel.js";

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
            renderCarousel(datas.carouselImgs["요일연재"]);
            return;
        }
        render("");
    });
};

export { bindSubMenuEvent };
