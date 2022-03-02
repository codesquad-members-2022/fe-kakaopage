import { $ } from "./utils/dom.js";
import { toggleWeekDayMenu } from "./tools.js";
import { renderWeekday } from "./renderer.js";

export const bindWeekdayMenuEvent = () => {
    $("#app").addEventListener("click", ({ target }) => {
        if ($(".week-day-menu")?.contains(target)) {
            const today = target.innerText;
            toggleWeekDayMenu(target);
            renderWeekday(today);
        }
    });
};
