import { Webtoons } from '../../data';
import { ContentsHeader, ContentsList } from '../index.js';

const GenreTop = (genre) => {

  const title = `${genre} TOP`;

  const filteredWebtoon = () => {
    const filteredGenreArray = Webtoons.filter((webtoon) => genre.includes(webtoon.genre));
    return filteredGenreArray.length > 5 ?
      filteredGenreArray.slice(0, 5) :
      filteredGenreArray;
  }

  return `<section class="contents" data-genre="${genre}">
            ${ContentsHeader(title)}
            ${ContentsList('small', filteredWebtoon())}
          </section>`;
};

export default GenreTop;