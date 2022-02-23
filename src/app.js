import { getToday } from './utility.js';
import { renderPage, addEvent } from './controller.js';
import { INITIAL_PAGE } from "./constant.js";

async function init() {
    renderPage(INITIAL_PAGE)
    .then((currentPageData) => addEvent(currentPageData));
}

init();