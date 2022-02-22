
import { select, addClass, removeClass } from "./util.js";
import { initWebtoonDaily } from "./webtoon_daily.js";

function createMainNav() {
    const $mainNav = document.createElement('nav')
    $mainNav.className = 'mainNav'
    $mainNav.innerHTML = `<ul class="l-inline mainNav__menus"></ul>`
    const $main = select('.main')
    $main.prepend($mainNav)

    const $mainNavMenus = select('.mainNav__menus')
    const menus = ['홈', '요일연재', '웹툰', '소년', '드라마', '로맨스', '로판', '액션무협', 'BL'];
    createNavMenu($mainNavMenus, menus)
}

function createNavMenu(ul, lists) {
    let template = ``;
    lists.forEach((menu) => template += `<li class="mainNav__menu">${menu}</li>`);
    ul.innerHTML = template;
}

function listenEvent() {
    const $mainNavMenus = select('.mainNav__menus');
    $mainNavMenus.addEventListener('click', (e) => handleEvent(e))
}

function handleEvent(e) {
    const $mainNavMenu = e.target
    if($mainNavMenu.className === 'mainNav__menu') {
        removeClass('menu-on');
        addClass($mainNavMenu, 'menu-on')
    }
}

function renderHome() {
    const $mainNavMenus = select('.mainNav__menus');
    const firstMenu = $mainNavMenus.firstChild;
    addClass(firstMenu, 'menu-on')
}

function initWebtoon() {
    createMainNav();
    renderHome()
    listenEvent();
    initWebtoonDaily();
}

initWebtoon()