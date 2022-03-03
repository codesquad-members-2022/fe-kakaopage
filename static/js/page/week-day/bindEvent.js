import { $ } from "/js/utils/dom.js";
import { toggleWeekDayMenu } from "/js/tools/toggleClass.js";
import { renderWeekday } from "./weekday.js";

export const bindWeekdayMenuEvent = () => {
    $("#app").addEventListener("click", ({ target }) => {
        if ($(".week-day-menu")?.contains(target)) {
            const today = target.innerText;
            toggleWeekDayMenu(target);
            renderWeekday(today);
        }
    });
};
