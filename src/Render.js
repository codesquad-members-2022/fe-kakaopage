import Menu from "./data/Menu.json" assert { type: "json" };
import * as HTMLCreator from "./HTMLCreator.js"
import { setNavEvent } from "./EventController.js"

const $body_main = document.querySelector('.custom');

export function rendering(tabName){
    const renders = {
        'home' : renderHomePage,
        'daily' : renderDailyPage,
        'webToon' : renderWebToonPage,
        'boy' : renderBoyPage,
        'drama' : renderDramaPage,
        'romance' : renderRomancePage,
        'rofan' : renderRofanPage,
        'action' : renderActionPage,
        'bl' : renderBlPage
    }

    $body_main.innerHTML = '';
    renders[tabName](tabName);
    setNavEvent('main-nav__list');
}

function renderHomePage(tabName){
    renderMenu(tabName);
    renderSubBanner(tabName);
    renderDailyTop();
    renderGenreTop();
    renderInstallButton();
}

function renderDailyPage(tabName){
    renderDailyTop();
    renderInstallButton();
}

function renderWebToonPage(tabName){
    renderGenreTop();
    renderInstallButton();
}

function renderDramaPage(){
    renderDailyTop();
    renderInstallButton();
}

function renderBoyPage(){
    renderDailyTop();
}

function renderRomancePage(){
    renderGenreTop();
    renderInstallButton();
}

function renderRofanPage(){
    renderDailyTop();
}

function renderActionPage(){
    renderInstallButton();
}

function renderBlPage(){
    renderDailyTop();
    renderGenreTop();
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

function renderDailyTop(selectedWeek = 'mon'){
    const $nav = createWeeklyNavNode(getWeekNavData());
    const $week_list = createTopList('week', selectedWeek);
    const $main = createContentsMain($nav, $week_list);
    const $header = createContentsHeader('요일연재 TOP', '1,626');
    renderContentsContainer($header, $main);
    setNavEvent('week-nav__list');
}

function getWeekNavData(){
    return [
        { text : '월', dataKey : 'mon', selected : true },
        { text : '화', dataKey : 'tue', selected : false },
        { text : '수', dataKey : 'wed', selected : false },
        { text : '목', dataKey : 'thu', selected : false },
        { text : '금', dataKey : 'fri', selected : false },
        { text : '토', dataKey : 'sat', selected : false },
        { text : '일', dataKey : 'sun', selected : false },
        { text : '완결', dataKey : 'end', selected : false },
    ]
}

function createWeeklyNavNode(weekData){
    const $nav = document.createElement('nav');
    const $list = document.createElement('ul');

    $nav.appendChild($list);
    $nav.classList.add('week-nav');
    $list.classList.add('week-nav__list', 'center');

    weekData.map( data => {
        $list.innerHTML += HTMLCreator.createWeekNavItemHTML(data.text, data.dataKey, data.selected)}
    );

    return $nav;
}

function createTopList(listType, dataKey = null){
    const $list = document.createElement('ul');
    $list.classList.add('comic-list', 'center');
    $list.id = `list-${listType}`;
    $list.innerHTML = HTMLCreator.createTopListHTML(dataKey ? dataKey : listType);
    return $list;
}

export function renderTopList(listType, dataKey = null){
    const comicList = document.getElementById(`list-${listType}`);
    comicList.innerHTML = HTMLCreator.createTopListHTML(dataKey ? dataKey : listType);
}

function renderGenreTop(){
    const genreList = ['romance', 'rofan', 'drama', 'bl', 'boy', 'action'];
    const genreTitle = ['로맨스', '로판', '드라마', 'BL/GL', '소년', '액션무협'];
    genreList.map((genre, index) => {
        const $header = createContentsHeader(`${genreTitle[index]} TOP`);
        const $list = createTopList(genre);
        const $main = createContentsMain($list);
        renderContentsContainer($header, $main);
        renderTopList(genre);
    });
}

function renderInstallButton(){
    const $section = document.createElement('section');
    $section.innerHTML = HTMLCreator.createInstallButtonHTML();
    $body_main.appendChild($section);
}
