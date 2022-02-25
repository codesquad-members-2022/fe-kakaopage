import {DEFAULT_PAGE, DEFAULT_GENRE} from './constant.js';
import { genreRenderList } from './data/renderData.js';
import { renderHeader } from './components/header.js';
import { renderGnb } from './components/gnb.js';
import { renderGenreTab } from './components/genreTab.js';
import { renderMainBanner } from './components/mainBanner.js';
import { renderCategoryGrid } from './components/categoryGrid.js';
import { renderEventBanner } from './components/eventBanner.js';
import { renderWorkSection, changeContentsByDay } from './components/section/workSection.js';
import { renderRecommendEvent } from './components/recommendEvent.js';

export const initRender = () => {
    renderHeader();
    renderGnb();
    renderGenreTab(DEFAULT_PAGE);
    renderByGenre(DEFAULT_GENRE);
    activateAll();
}

const reRender = (newSelected, type) => {
    const newTab = newSelected.dataset[type];
    switch (type) {
        case 'gnb': 
            renderGenreTab(newTab);
            break;
        case 'genre':
            renderByGenre(newTab);
            break;
        case 'day':
            const dayRankSection = newSelected.closest('section');
            changeContentsByDay(dayRankSection, newTab);
    }
}

const renderByGenre = (genre) => {
    const renderList = genreRenderList[genre];
    document.querySelector('.tab-contents').innerHTML = '';
    renderList.forEach(component => render(component, genre));
    activateDayTab();
}

const render = (component, genre) => {
    const funcs = {
        'mainBanner': renderMainBanner,
        'categoryGrid': renderCategoryGrid,
        'eventBanner': renderEventBanner,
        'dayRanking': renderWorkSection.bind(null, 'small', component),
        'newTop' : renderWorkSection.bind(null, 'banner', component),
        'dailyRanking': renderWorkSection.bind(null, 'horizontal', component),
        'recommendEvent': renderRecommendEvent
    }
    funcs[component](genre);
}



const activateAll = () => {
    activateGnb();
    activateGenreTab();
    activateDayTab();
}

const activateGnb = () => {  
    const gnb = document.querySelector('.gnb');
    gnb.addEventListener('click', (e) => handleTabClick(e, 'gnb'));
}

const activateGenreTab = () => {
    const genreTab = document.querySelector('.genre-tab');
    genreTab.addEventListener('click', (e) => handleTabClick(e, 'genre'));
}

const activateDayTab = () => {
    const dayTab = document.querySelector('.day-tab__container');
    dayTab.addEventListener('click', (e) => handleTabClick(e,'day'));
}

const handleTabClick = (event, type) => {
    const selectionMark = `${type}-tab__item--selected`;
    const prevSelected = document.querySelector(`.${selectionMark}`);
    const newSelected = event.target.closest('li');
    if (prevSelected === newSelected) return;
    moveSelectionMark(prevSelected, newSelected, type);
    reRender(newSelected, type);
}

const moveSelectionMark = (prevSelected, newSelected, type) => {
    const selectionMark = `${type}-tab__item--selected`;
    prevSelected.classList.remove(selectionMark);
    newSelected.classList.add(selectionMark);
}



