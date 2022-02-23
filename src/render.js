import {DEFAULT_PAGE, DEFAULT_GENRE} from "./constant.js";
import { genreRenderList } from "./data/renderData.js";
import { renderHeader } from "./components/header.js";
import { renderGnb , setGnbEvent} from "./components/gnb.js";
import { renderGenreTab, setGenreTabEvent } from "./components/genreTab.js";
import { renderMainBanner } from "./components/mainBanner.js";
import { renderCategoryGrid } from "./components/categoryGrid.js";
import { renderEventBanner } from "./components/eventBanner.js";
import { renderWorkSection } from "./components/section/workSection.js";

export const initRender = () => {
    renderHeader();
    renderGnb();
    renderGenreTab(DEFAULT_PAGE);
    renderByGenre(DEFAULT_GENRE); 

    setGnbEvent();
    setGenreTabEvent();
    activateGnb();
    activateGenreTab();
}

const renderByGenre = (genre) => {
    const renderList = genreRenderList[genre];
    document.querySelector('.tab-contents').innerHTML = '';
    renderList.forEach(component => render(component, genre));
}

const render = (component, genre) => {
    const funcs = {
        'mainBanner': renderMainBanner,
        'categoryGrid': renderCategoryGrid,
        'eventBanner': renderEventBanner,
        'dayRanking': renderWorkSection.bind(null, "small", component)
    }
    funcs[component](genre);
}


//GNB는 시간이 되면 나중에 구현
const activateGnb = () => {  
    const gnb = document.querySelector('.gnb');
    gnb.addEventListener('click', (e) => {
        const selected = e.target.closest('li');
        const currPage = selected.dataset.tab;
        renderGenreTab(currPage);    
    })
}

const activateGenreTab = () => {
    const genreTab = document.querySelector('.genre-tab');
    genreTab.addEventListener('click', (e) => {
        const selected = e.target.closest('li');
        renderByGenre(selected.dataset.genre);
    })
}

