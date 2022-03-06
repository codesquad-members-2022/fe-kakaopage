import { DEFAULT_GENRE_INDEX } from "../constant.js";

export const getGenreTabTemplate = (page, genreTabData) => {
    return `
        <ul class='tab__container vertical-center'>
            ${genreTabData.map(data => `
                <li class='genre-tab__item center' data-genre=${data.genre}><a href=/${page}/${data.genre}>${data.text}</a></li>`
            ).join('')}
        </ul>
    `
}        

export const setDefault = (genreTab) => {
    const defaultClicked = genreTab.querySelector(`li:nth-child(${DEFAULT_GENRE_INDEX})`);
    defaultClicked.classList.add('genre-tab__item--selected');
}
