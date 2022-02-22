import { getToday } from './utility.js';
import { renderPage } from './controller.js';

function init() {
    const today = getToday();
    renderPage(today);
}

init();