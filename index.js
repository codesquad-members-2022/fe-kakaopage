import { createEventListnerGenreNav } from "./genre-nav.js";
import { createEventListenerMenu } from "./menu-nav.js";

const mainContainer = document.querySelector('main .container');
const webtoonMain = mainContainer.innerHTML;

createEventListenerMenu();
createEventListnerGenreNav();

export { mainContainer, webtoonMain };