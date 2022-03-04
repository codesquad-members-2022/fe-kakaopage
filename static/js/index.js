import { preventHyperLinks } from "./tools/preventHyperLinks.js";

import { bindSubMenuEvent } from "./page/sub-menu/bindEvent.js";
import { bindCaroulselEvent } from "./page/carousel/carousel.js";
import { bindWeekdayMenuEvent } from "./page/week-day/bindEvent.js";
import { renderHome } from "./page/home/render.js";

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
