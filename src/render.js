import {DEFAULT_PAGE, DEFAULT_GENRE} from "./constant.js";
import { genreRenderList } from "./data/renderData.js";
import { renderHeader } from "./components/header.js";
import { renderGnb } from "./components/gnb.js";
import { renderGenreTab } from "./components/genreTab.js";
import { renderMainBanner } from "./components/mainBanner.js";
import { renderCategoryGrid } from "./components/categoryGrid.js";
import { renderEventBanner } from "./components/eventBanner.js";
import { renderWorkSection, changeContentsByDay } from "./components/section/workSection.js";

export const initRender = () => {
    renderHeader();
    renderGnb();
    renderGenreTab(DEFAULT_PAGE);
    renderByGenre(DEFAULT_GENRE);
    activateAll();
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
        'dayRanking': renderWorkSection.bind(null, "small", component),
        신작 : renderWorkSection.bind(null, 'horizontal')
    }
    funcs[component](genre);
}


const activateAll = () => {
    activateGnb();
    activateGenreTab();
    activateDayTab();
}

//이하 중복 해결해야함

const handleTabClick = (event, type) => {
    const selectionMark = `.${type}-tab__item--selected`;
    const prevSelected = document.querySelector(selectionMark);
    const newSelected = event.target.closest('li');
    if (prevSelected === newSelected) return;
    moveSelectionMark(prevSelected, newSelected);
    reRender(newSelected, type);
}

const moveSelectionMark = (prevSelected, newSelected, type) => {
    const selectionMark = `.${type}-tab__item--selected`;
    prevSelected.classList.remove(selectionMark);
    newSelected.classList.add(selectionMark);
}

const reRender = (newSelected, type) => {
    console.log(type);
    console.log(newSelected.dataset)
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





// const activateGnb = () => {  
//     const gnb = document.querySelector('.gnb');
//     gnb.addEventListener('click', (e) => {
//         const prevSelected = document.querySelector('.gnb .tab__item--selected');
//         const selected = e.target.closest('li');
//         if (prevSelected === selected) return;
//         prevSelected.classList.remove('tab__item--selected');
//         selected.classList.add('tab__item--selected');
        
//         const currPage = selected.dataset.tab;
//         renderGenreTab(currPage);    
//     })
// }

// const activateGenreTab = () => {
//     const genreTab = document.querySelector('.genre-tab');
//     genreTab.addEventListener('click', (e) => {
//         const prevSelected = genreTab.querySelector('.genre-tab__item--selected');
//         const selected = e.target.closest('li');
//         if (prevSelected === selected) return;
//         prevSelected.classList.remove('genre-tab__item--selected');
//         selected.classList.add('genre-tab__item--selected');

//         renderByGenre(selected.dataset.genre);
//     })
// }

// const activateDayTab = () => {
//     const dayTab = document.querySelector('.day-tab__container');
//     dayTab.addEventListener('click', (e) => {
//         const prevSelected = dayTab.querySelector('.day-tab__item--selected');
//         const selected = e.target.closest('li');
//         if (prevSelected === selected) return;
//         prevSelected.classList.remove('day-tab__item--selected', 'tab__item--selected');
//         selected.classList.add('day-tab__item--selected', 'tab__item--selected');

//         const dayRankSection = dayTab.parentNode;
//         const oldContainer = dayRankSection.querySelector('.work-container');
//         changeContentsByDay(dayRankSection, selected.dataset.day);
//     })
// }