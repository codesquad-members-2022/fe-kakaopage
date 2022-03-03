import { DEFAULT_GENRE, DEFAULT_PAGE } from './constant.js';
import { getData } from './utils.js';
import { getHeaderTemplate } from './system/header.js';
import { getGnbTemplate, setNewMarkEvent } from './system/gnb.js';
import { getGenreTabTemplate, setDefault } from './system/genreTab.js'
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
        document.querySelector('body').insertAdjacentHTML('afterbegin', getHeaderTemplate() + getGnbTemplate(gnbData));
    });
}

const renderGenreTab = (page) => {
    return getData('common', 'genreTab', 'webtoon')
    .then(genreTabData => {
        document.querySelector('.contents').insertAdjacentHTML('afterbegin', getGenreTabTemplate(genreTabData));
    });
}

const pageDic = {
    'webtoon': getWebtoonPageTemplate
}

const renderContents = (page, genre) => {
    return getData(page, genre)
    .then(pageData => {
        document.querySelector('.contents').insertAdjacentHTML('beforeend', pageDic[page](genre, pageData));
    });
}



// const reRender = (newSelected, type) => {
//     const newTab = newSelected.dataset[type];
//     switch (type) {
//         case 'gnb': 
//             renderGenreTab(newTab);
//             break;
//         case 'genre':
//             renderByGenre(newTab);
//             break;
//         case 'day':
//             const dayRankSection = newSelected.closest('section');
//             changeContentsByDay(dayRankSection, newTab);
//     }
// }

// const renderByGenre = (genre) => {
//     const renderList = genreRenderList[genre];
//     document.querySelector('.tab-contents').innerHTML = '';
//     renderList.forEach(component => render(component, genre));
//     activateDayTab();
// }

// const render = (component, genre) => {
//     const funcs = {
//         'mainBanner': renderMainBanner,
//         'categoryGrid': renderCategoryGrid,
//         'eventBanner': renderEventBanner,
//         'daySeriesTop': renderWorkSection.bind(null, 'small', component),
//         'newTop' : renderWorkSection.bind(null, 'banner', component),
//         'dailyRanking': renderWorkSection.bind(null, 'horizontal', component),
//         'recommendEvent': renderRecommendEvent
//     }
//     funcs[component](genre);
// }



export const activateAll = () => {
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
    //reRender(newSelected, type);
}

const moveSelectionMark = (prevSelected, newSelected, type) => {
    const selectionMark = `${type}-tab__item--selected`;
    prevSelected.classList.remove(selectionMark);
    newSelected.classList.add(selectionMark);
}



