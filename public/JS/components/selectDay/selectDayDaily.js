import {makeSelectDayItems} from './selectDayList.js'
import {makeWebtoonList} from '../webtoonList.js'
import {getData} from '../../utility.js'

// ========== SelectDayDaily (웹툰-요일연재 화면의 요일탭)==========
const url = 'http://localhost:3000/daily-top';

function renderSelectDayDaily() {
  return getData(url)
    .then(json => {
      const today = new Date().getDay();
      const day = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

      return json[day[today]];
    })
    .then(data => makeSelectDayDaily(data));
}

function makeSelectDayDaily(data) {
  const DAILY_ITEMS = 10;
  return `
    <section class="daily__webtoons">
      ${makeSelectDailyList()}
      ${makeSelectDailyOptions()}
      ${makeWebtoonList(DAILY_ITEMS, data)}
    </section>
  `;
}

function makeSelectDailyList() {
  return `
    <ul class="select__day">
      ${makeSelectDayItems()}
    </ul>
  `;
}

function makeSelectDailyOptions() {
  return `
    <ul class="daily__select__options">
      <ul class="options__btn">
        <li><button type="button" class="options__total options--focused">전체</button></li>
        <li><div class="divider"></div></li>
        <li><button type="button" class="options__normal">웹툰</button></li>
        <li><div class="divider"></div></li>
        <li><button type="button" class="options__waiting-free"><i class="fas fa-clock"></i> 웹툰</button></li>
      </ul>
      <div class="options__genre">
        <button type="button" class="options__genre-btn">전체 (138)</button>
        <i class="fas fa-sort-down"></i>
      </div>
    </ul>
  `;
}

export {renderSelectDayDaily}