import { DEFAULT_GENRE, DEFAULT_PAGE } from './constant.js';
import { getData } from './utils.js';
import { getHeaderTemplate } from './system/header.js';
import { getGnbTemplate, setNewMarkEvent } from './system/gnb.js';
import { getGenreTabTemplate, setDefault } from './system/genreTab.js'
import { activateMainBanner } from './system/mainBanner.js';
import { getWebtoonPageTemplate } from './pages/webtoon.js';
// import { renderWorkSection, changeContentsByDay } from './components/section/workSection.js';

export const initRender = () => {
    return Promise.all([
    renderCommon(),
    renderGenreTab(DEFAULT_PAGE),
    renderContents(DEFAULT_PAGE, DEFAULT_GENRE)])
}

const renderCommon = () => {
    return getData('common', 'gnb')
    .then(gnbData => {
        document.querySelector('header').innerHTML = getHeaderTemplate();
        document.querySelector('.gnb').innerHTML = getGnbTemplate(gnbData);
    })
}

const renderGenreTab = (page) => {
    return getData('common', 'genreTab', page)
    .then(genreTabData => {
        document.querySelector('.genre-tab').innerHTML = getGenreTabTemplate(genreTabData);
    });
}

const pageDic = {
    'webtoon': getWebtoonPageTemplate
}

const renderContents = (page, genre) => {
    return getData(page, genre)
    .then(pageData => {
        document.querySelector('.tab-contents').innerHTML = pageDic[page](genre, pageData);
        return pageData
    })
    .then(pageData => {
        activateMainBanner(pageData.mainBanner);
    })
}

const reRender = (newSelected, type) => {
    const newTab = newSelected.dataset[type];
    switch (type) {
        case 'gnb':
            renderGenreTab(newTab);
            break;
        case 'genre':
            const currPage = document.querySelector('.gnb-tab__item--selected').dataset['gnb'];
            renderContents(currPage, newTab);
            break;
        case 'day':
            const dayRankSection = newSelected.closest('section');
            changeContentsByDay(dayRankSection, newTab);
            break;
        default:
            console.log(`${type} is not valid.`)
    }
}

export const activateTabs = () => {
    activateGnb();
    activateGenreTab();
    //activateDayTab();
}

const activateGnb = () => { 
    const gnb = document.querySelector('.gnb');
    gnb.addEventListener('click', (e) => handleTabClick(e, 'gnb'));
    setNewMarkEvent();
}

const activateGenreTab = () => {
    const genreTab = document.querySelector('.genre-tab');
    genreTab.addEventListener('click', (e) => handleTabClick(e, 'genre'));
    setDefault(genreTab);
}

// const activateDayTab = () => {
//     const dayTab = document.querySelector('.day-tab__container');
//     dayTab.addEventListener('click', (e) => handleTabClick(e,'day'));
// }

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



