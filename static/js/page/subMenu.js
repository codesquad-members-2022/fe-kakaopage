import { $ } from "../utils/dom.js";

import { toggleClass } from "../tools/tools.js";
import * as datas from "../data/datas.js";

import { render, renderHome, renderWeekday } from "./renderer.js";
import { renderCarousel } from "./carousel.js";

// 현재 subMenu는 webtoon만 작동되는 것을 가정하고 작성됨
const subMenus = datas.subMenu.webtoon;
const renderItem = (item) => {
    switch (item) {
        case "Home":
            renderHome();
            renderCarousel(datas.carouselImgs[item]);
            break;
        case "Weekday":
            renderWeekday();
            renderCarousel(datas.carouselImgs[item]);
            break;
        default:
            render("");
            break;
    }
};

const bindSubMenuEvent = () => {
    $(".sub-menu").addEventListener("click", ({ target }) => {
        const curEl = target.parentNode;
        const targetPage = target.dataset.link;
        const renderTargets = subMenus.menuTargets[targetPage];

        toggleClass(curEl, "active");
        renderTargets.forEach((item) => {
            renderItem(item);
        });
    });
};

export { bindSubMenuEvent };
