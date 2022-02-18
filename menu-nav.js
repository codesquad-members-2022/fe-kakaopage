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
    const menuItems = menu.querySelectorAll('.menu-nav__item');

    menuItems.forEach(item => {
        const itemButton = item.querySelector('button');
        itemButton.addEventListener('click', () => {
            menu.querySelector('.menu-nav__item--selected').classList.remove('menu-nav__item--selected');
            item.classList.add('menu-nav__item--selected');
            mainHTMLs[itemButton.value]();
        });
    });
};

export { createEventListenerMenu };