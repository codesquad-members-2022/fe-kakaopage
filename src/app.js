import { renderDayTopContent } from './render/dayTop.js';
import { addDayTopTabEvent } from "./eventListener.js";

function init() {
    const date = new Date();
    let today = date.getDay() - 1;
    if(today === -1) today = 6;
    renderDayTopContent(today);
    addDayTopTabEvent();
}

init();