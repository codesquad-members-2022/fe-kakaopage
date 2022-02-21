import { genreTabData } from "../data/genreTabData.js";
import { DEFAULT_GENRE_INDEX } from "../constant.js";

const contents = document.querySelector('.contents');
const genreTab = document.createElement('div');

const renderGenreTab = (currPage) => {
    if (currPage === 'home') return;
    genreTab.className = 'genre-tab';
    contents.appendChild(genreTab);
    genreTab.innerHTML = getTemplate(currPage);
    setDefault(genreTab);
}

const getTemplate = (currPage) => {
    return `
        <ul class="tab__container vertical-center">
            ${genreTabData[currPage].map(data => `
                <li class="genre-tab__item center" data-genre=${data.genre}><a href="#">${data.text}</a></li>`
            ).join('')}
        </ul>
    `
}        

const setDefault = (genreTab) => {
    const defaultClicked = genreTab.querySelector(`li:nth-child(${DEFAULT_GENRE_INDEX})`);
    defaultClicked.classList.add('genre-tab__item--selected');
}

const setGenreTabEvent = () => {
    genreTab.addEventListener('click', (e) => {
        const prevClicked = genreTab.querySelector('.genre-tab__item--selected');
        const targetLi = e.target.closest('li');
        if (prevClicked === targetLi) return;
        prevClicked.classList.remove('genre-tab__item--selected');
        targetLi.classList.add('genre-tab__item--selected');
    });
}

export {renderGenreTab, setGenreTabEvent};