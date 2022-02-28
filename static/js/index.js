import { $ } from "./utils/dom.js";
import { toggleWeekDayMenu, preventDefaults } from "./tools.js";
import { bindSubMenuEvent } from "./submenu.js";
import { bindCaroulselEvent } from "./carousel.js";
import { renderHome, renderWeekday } from "./renderer.js";

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
