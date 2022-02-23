import Menu from "./data/Menu.json" assert { type: "json" };
import * as HTMLCreator from "./HTMLCreator.js"
import { setNavEvent } from "./EventController.js"

const $body_main = document.querySelector('.custom');

export function rendering(tabName){
    const renders = {
        'home' : renderHomePage,
        'daily' : null,
        'webToon' : null,
        'boy' : null,
        'drama' : null,
        'romance' : null,
        'rofan' : null,
        'action' : null,
        'bl' : null
    }

    $body_main.innerHTML = '';
    renders[tabName](tabName);
    setNavEvent('main-nav__list');
}

function renderHomePage(tabName){
    renderMenu(tabName);
    renderSubBanner(tabName);
}

function renderMenu(tabName){
    const $menu_section = document.createElement('section');
    const $menu_div = document.createElement('div');
    $menu_div.classList.add('contents_menu__container', 'center');
    $menu_section.classList.add('contents_menu', 'section');
    $menu_section.appendChild($menu_div);
    $body_main.appendChild($menu_section);
    Menu[tabName].map(data => $menu_div.innerHTML += HTMLCreator.createMenuItemHTML(data));
}

export function renderTopList(listType, dataKey = null){
    const comicList = document.getElementById(`list-${listType}`);
    comicList.innerHTML = HTMLCreator.createTopListHTML(dataKey ? dataKey : listType);
}

function renderSubBanner(tabName){
    const $sub_banner_section = document.createElement('section');
    $sub_banner_section.innerHTML = HTMLCreator.createSubBannerHTML(tabName);
    $sub_banner_section.classList.add('sub-banner', 'section');
    $body_main.appendChild($sub_banner_section);
}

function renderContentsContainer($header, $main){
    const $container = document.createElement('section');
    $container.classList.add('contents-container', 'section', 'center');
    $container.append($header, $main);
    $body_main.appendChild($container);
}

function createContentsHeader(title, count = null){
    const $header = document.createElement('div');
    const headerHTML = HTMLCreator.createContainerHeaderHTML(title, count);
    $header.classList.add('contents-container__header', 'center');
    $header.innerHTML = headerHTML;
    return $header;
}

function createContentsMain(...children){
    const $main = document.createElement('div');
    $main.classList.add('contents-container__main');

    if(children){
        $main.append(...children);
    }

    return $main;
}