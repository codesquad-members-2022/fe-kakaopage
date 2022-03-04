import { store } from '../../data/store.js';
import { ContentsHeader, ContentsList } from '../index.js';
import { convertStringToHTML } from '../../utils.js';

const GenreTop = (genre) => {

  const title = `${genre} TOP`;

  const filteredWebtoon = () => {
    const filteredGenreArray = store.webtoons.filter((webtoon) => genre.includes(webtoon.genre));
    return filteredGenreArray.length > 5 ?
      filteredGenreArray.slice(0, 5) :
      filteredGenreArray;
  };

  return convertStringToHTML(
          `<section class="contents" data-genre="${genre}">
            ${ContentsHeader(title)}
            ${ContentsList('small', filteredWebtoon())}
          </section>`);
};

export default GenreTop;
