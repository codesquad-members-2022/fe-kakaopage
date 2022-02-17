const $ = (select) => document.querySelector(select);
const $all = (select) => document.querySelectorAll(select);

const clickGenresList = () => {
  const $genres = $('.genres__list');
  $genres.addEventListener('click', (event) => {
    if (event.target.className === 'genres__item') {
      setGenreFocus(event);
    }
  })
}

function setGenreFocus (event) {
  const $genresItem = $all('.genres__item');
  $genresItem.forEach(item => {
    if (item.classList.contains('genres--focused')) {
      item.classList.remove('genres--focused');
      return event.target.classList.add('genres--focused');
    } 
  });
}

window.addEventListener('load', () => clickGenresList())