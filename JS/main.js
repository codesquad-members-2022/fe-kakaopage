import {dailyTopData} from '../data/dailyTop.js'
import {dailyRankingData} from '../data/dailyRanking.js'
import {renderContainer} from './render.js'

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

window.addEventListener('load', () => {
  clickGenresList();
  renderContainer('daily__top', '요일 연재 TOP', 10, 'cardLayout');
  renderContainer('romance__top', '로맨스 TOP', 5, 'cardLayout');
  renderContainer('daily__ranking', '일간랭킹 TOP', 5, 'ranking');
})