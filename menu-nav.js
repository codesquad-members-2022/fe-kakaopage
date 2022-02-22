import { renderDummyMain } from "./mainHTML/dummy.js";
import { renderWebtoonMain } from "./mainHTML/webtoon.js";

function createEventListenerMenu(){
    const mainHTMLs = {
        'home': renderDummyMain,
        'webtoon': renderWebtoonMain,
        'webnovel': renderDummyMain,
        'movie': renderDummyMain,
        'broadcast': renderDummyMain,
        'book': renderDummyMain
    };

    const menu = document.querySelector('.menu-nav');
    menu.addEventListener('click', (e) => {
        const menuItem = e.target.closest('li');
        const itemSelected = menu.querySelector('.menu-nav__item--selected');
        if (itemSelected !== null) {
            itemSelected.classList.remove('menu-nav__item--selected');
        }
        menuItem.classList.add('menu-nav__item--selected');
        mainHTMLs[menuItem.dataset.label]();
    });
};

export { createEventListenerMenu };