import { preventHyperLinks } from "./tools.js";

import { bindSubMenuEvent } from "./submenu.js";
import { bindCaroulselEvent } from "./carousel.js";
import { bindWeekdayMenuEvent } from "./weekday.js";

import { renderHome } from "./renderer.js";

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
