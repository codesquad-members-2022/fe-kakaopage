import { createEventListnerGenreNav } from "../genre-nav.js";
import { webtoonMain } from "../index.js"

function renderWebtoonMain() {
    const mainContainer = document.querySelector('main .container');
    mainContainer.innerHTML = webtoonMain;
    createEventListnerGenreNav();
}

export { renderWebtoonMain };