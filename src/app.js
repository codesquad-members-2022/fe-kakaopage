import { renderDayTopContent, addDayTopTabEvent } from "./list.js";

function init() {
    const date = new Date();
    const today = date.getDay() - 1;
    if(today === -1) today = 6;
    renderDayTopContent(today);
    addDayTopTabEvent();
}

init();