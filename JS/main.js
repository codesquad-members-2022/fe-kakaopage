import {dailyTopData} from '../data/dailyTop.js'
import {dailyRankingData} from '../data/dailyRanking.js'
import {renderContainer, renderMoveApp} from './render.js'

const $ = (select) => document.querySelector(select);
const $all = (select) => document.querySelectorAll(select);

const clickGenresList = () => {
  const genresItem = $all('.genres__item');
  genresItem.forEach(item => {
    item.addEventListener('click', (event) => {
      setGenreFocus(event);
    })
  });
}

function setGenreFocus (event) {
  const focused = $('.genres--focused');
  if (focused) {
    focused.classList.remove('genres--focused');
  }
  event.target.classList.add('genres--focused');
}

function renderMain() {
  const DAILY_ITEMS = 10;
  const TOP_ITEMS = 5;

  clickGenresList();
  renderContainer('daily__top', '요일 연재 TOP', DAILY_ITEMS, 'cardLayout');
  renderContainer('romance__top', '로맨스 TOP', TOP_ITEMS, 'cardLayout');
  renderContainer('daily__ranking', '일간랭킹 TOP', TOP_ITEMS, 'ranking');
  renderContainer('event', '추천 이벤트', null, 'event')
  renderMoveApp('move-app');
}

window.addEventListener('load', renderMain);

