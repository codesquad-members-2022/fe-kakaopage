
import { select, addClass, removeClass } from "./util.js";
import { initWebtoonDaily } from "./webtoon_daily.js";
import { initContents } from "./webtoon_contents.js";
import { createRecommend } from "./webtoon_recommend.js";
import { createCategory } from "./webtoon_category.js";
import { categoryMenus } from "./webtoonData.js";

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
        addClass($mainNavMenu, 'menu-on');
        clearMenu();
        renderMenu($mainNavMenu)
    }
}

function renderStartPage() {
    const $mainNavMenus = select('.mainNav__menus');
    const firstMenu = $mainNavMenus.firstChild;
    addClass(firstMenu, 'menu-on')
    renderHome();
}

function renderMenu(target) {
    const menuFuncs = {
        홈: renderHome,
        요일연재: renderDaily,
        웹툰: renderDaily,
        장르: renderGenre
    }
    const key = target.innerText
    if(key === '홈' || key === '요일연재' || key === '웹툰') {
        menuFuncs[key]()
    }
    else {
        menuFuncs['장르'](key)
    }
}

function clearMenu() {
    const $main = select('.main')
    const childNodes = $main.children;
    [...childNodes].forEach((node) => {
        if(node.className !== "mainNav") {
            node.remove();
        }
    })
}

function renderHome() {
    initContents()
    .then(()=> {
        createCategory(categoryMenus)
        initWebtoonDaily()
    })
}

function renderDaily() {
    initContents();
    initWebtoonDaily();
}

function renderGenre(genre) {
    initContents();
    createRecommend(genre)
}

function initWebtoon() {
    createMainNav();
    renderStartPage()
    listenEvent();
}

initWebtoon()