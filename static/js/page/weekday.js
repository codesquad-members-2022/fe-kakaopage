import { $ } from "../utils/dom.js";

import * as datas from "../data/datas.js";
import { toggleWeekDayMenu } from "../tools/toggleClass.js";
import { render } from "../tools/renderer.js";

import { Weekday } from "../views/views.js";

export const renderWeekday = (today = new Date().getDay()) => {
    const days = ["일", "월", "화", "수", "목", "금", "토"];
    const weekday = new Weekday(
        datas.weekdayData,
        days[today] ? days[today] : today
    );

    let html = "";
    html += weekday.getHtml();

    render(html);
};

export const bindWeekdayMenuEvent = () => {
    $("#app").addEventListener("click", ({ target }) => {
        if ($(".week-day-menu")?.contains(target)) {
            const today = target.innerText;
            toggleWeekDayMenu(target);
            renderWeekday(today);
        }
    });
};
