import { preventHyperLinks } from "./tools/tools.js";

import { bindSubMenuEvent } from "./page/subMenu.js";
import { bindCaroulselEvent } from "./page/carousel.js";
import { bindWeekdayMenuEvent } from "./page/weekday.js";

import { renderHome } from "./page/renderer.js";

const bindEventListeners = () => {
    bindSubMenuEvent();
    bindCaroulselEvent();
    bindWeekdayMenuEvent();
};

const init = () => {
    preventHyperLinks();
    renderHome();
    bindEventListeners();
};

init();
