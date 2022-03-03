import { DEFAULT_GENRE_INDEX } from "../constant.js";

export const getGenreTabTemplate = (genreTabData) => {
    return `
        <div class="genre-tab">
            <ul class='tab__container vertical-center'>
                ${genreTabData.map(data => `
                    <li class='genre-tab__item center' data-genre=${data.genre}><a href='#'>${data.text}</a></li>`
                ).join('')}
            </ul>
        </div>
    `
}        

export const setDefault = (genreTab) => {
    console.log(genreTab)
    const defaultClicked = genreTab.querySelector(`li:nth-child(${DEFAULT_GENRE_INDEX})`);
    defaultClicked.classList.add('genre-tab__item--selected');
}
