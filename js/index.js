import { $ } from "./utils/dom.js";
import { toggleClass, toggleWeekDayMenu, preventDefaults } from "./tools.js";
import { bindCaroulselEvent } from "./carousel.js";
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

const bindEventListeners = () => {
    bindSubMenuEvent();
    bindCaroulselEvent();

    $("#app").addEventListener("click", ({ target }) => {
        if ($(".week-day-menu")?.contains(target)) {
            const today = target.innerText;
            toggleWeekDayMenu(target);
            renderWeekday(today);
        }
    });
};

const init = () => {
    preventDefaults();
    renderHome();
    bindEventListeners();
};

init();
