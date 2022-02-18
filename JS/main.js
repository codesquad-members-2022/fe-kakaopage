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
  const WEEKEND_ITEMS = 10;
  const TOP_ITEMS = 5;

  clickGenresList();
  renderContainer('daily__top', '요일 연재 TOP', WEEKEND_ITEMS, 'cardLayout');
  renderContainer('romance__top', '로맨스 TOP', TOP_ITEMS, 'cardLayout');
  renderContainer('daily__ranking', '일간랭킹 TOP', TOP_ITEMS, 'ranking');
})