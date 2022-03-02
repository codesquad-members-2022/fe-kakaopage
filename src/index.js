import { renderWebtoonMain } from "./mainHTML/webtoon.js";
import { createEventListenerMenu } from "./menu-nav.js";

const mainContainer = document.querySelector("main .container");

createEventListenerMenu();
renderWebtoonMain();

fetch("http://localhost:3000/api")
  .then((response) => response.json())
  .then((data) => console.log(data));

export { mainContainer };
