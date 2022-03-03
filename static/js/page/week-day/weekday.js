import * as datas from "/js/data/datas.js";
import { render } from "/js/tools/renderer.js";

import { Weekday } from "/js/views/views.js";

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
