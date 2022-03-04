import { fetchData } from "./fetchData.js";
import { renderWebtoonMain } from "./mainHTML/webtoon.js";
import { createEventListenerMenu } from "./menu-nav.js";

const mainContainer = document.querySelector("main .container");

createEventListenerMenu();
renderWebtoonMain();

export { mainContainer };
