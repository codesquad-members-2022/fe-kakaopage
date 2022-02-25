import {makeSelectDayItems} from './selectDayItems.js'
import {makeWebtoonList} from '../webtoonList.js'
import {$, $all} from '../../utility.js'

// ========== SelectDayDaily (웹툰-요일연재 화면의 요일탭)==========
function renderSelectDayDaily(data) {
  const main = $('.main');
  const newList = makeSelectDayDailySection();
  main.appendChild(newList)

  const DAILY_ITEMS = 10;
  const webtoonsList = makeWebtoonList(DAILY_ITEMS, data);
  newList.appendChild(webtoonsList);

  return newList;
}


function makeSelectDayDailySection() {
  const newList = document.createElement('section');
  newList.classList.add('daily__webtoons');

  const dailyList = makeSelectDayDailyList();
  const optionsList = makeSelectDailyOptions();

  newList.appendChild(dailyList);
  newList.appendChild(optionsList);

  return newList
}

function makeSelectDayDailyList() {
  const newList = document.createElement("ul");
  newList.classList.add('select__day');
  makeSelectDayItems(newList);

  return newList;
}

function makeSelectDailyOptions() {
  const newList = document.createElement("ul");
  newList.classList.add('daily__select__options');
  newList.innerHTML = `<ul class="options__btn">
  <li><button type="button" class="options__total options--focused">전체</button></li>
  <li><div class="divider"></div></li>
  <li><button type="button" class="options__normal">웹툰</button></li>
  <li><div class="divider"></div></li>
  <li><button type="button" class="options__waiting-free"><i class="fas fa-clock"></i> 웹툰</button></li>
</ul>
<div class="options__genre">
  <button type="button" class="options__genre-btn">전체 (138)</button>
  <i class="fas fa-sort-down"></i>
</div>`;

  return newList
}

export {renderSelectDayDaily}