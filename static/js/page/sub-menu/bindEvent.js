import { $ } from "/js/utils/dom.js";

import * as datas from "/js/data/datas.js";
import { toggleClass } from "/js/tools/toggleClass.js";
import { render } from "/js/tools/renderer.js";

import { renderHome } from "/js/page/home/render.js";
import { renderWeekday } from "/js/page/week-day/weekday.js";
import { renderCarousel } from "/js/page/carousel/carousel.js";

// 현재 subMenu는 webtoon만 작동되는 것을 가정하고 작성됨
const subMenus = datas.subMenu.webtoon;
const renderSelectedPage = (item) => {
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
            renderSelectedPage(item);
        });
    });
};

export { bindSubMenuEvent };
