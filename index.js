import { createEventListnerGenreNav } from "./genre-nav.js";
import { renderWebtoonMain } from "./mainHTML/webtoon.js";
import { createEventListenerMenu } from "./menu-nav.js";

const mainContainer = document.querySelector('main .container');
const webtoonMain = mainContainer.innerHTML;

createEventListenerMenu();
renderWebtoonMain();

export { mainContainer, webtoonMain };