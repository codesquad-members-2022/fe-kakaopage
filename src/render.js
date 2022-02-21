import { renderHeader } from "./components/header.js";
import { renderGnb , setGnbEvent} from "./components/gnb.js";
import {renderGenreTab, setGenreTabEvent} from "./components/genreTab.js";
import {DEFAULT_PAGE} from "./constant.js";

export const initRender = () => {
    renderHeader();
    renderGnb();
    const currPage = document.querySelector('.gnb .tab__item--selected').dataset.tab;
    renderGenreTab(DEFAULT_PAGE);

    setGnbEvent();
    setGenreTabEvent();

    setReRenderEvt();
}

const setReRenderEvt = () => {  
    const gnb = document.querySelector('.gnb');
    gnb.addEventListener('click', (e) => {
        const selected = e.target.closest('li');
        const currPage = selected.dataset.tab;
        renderGenreTab(currPage);    
    })
}




// renderHeader();
// renderGnb();
// setGnbEvent();
// const currPage = document.querySelector('.gnb .tab__item--selected').dataset.tab;
// console.log(currPage);
// renderGenreTab(currPage);
// setGenreTabEvent();
// setEventLinstener();