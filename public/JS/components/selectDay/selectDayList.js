import {makeWebtoonList} from '../webtoonList.js'
import {getData} from '../../utility.js'

// ========== SelectDayHome (웹툰-홈 화면의 요일탭)==========
const url = 'http://localhost:3000/daily-top';

function renderSelectDayHome(num) {
  return getData(url)
    .then(json => {
      const today = new Date().getDay();
      const day = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

      return json[day[today]];
    })
    .then(data => makeSelectDayHomeList(num, data));
}

function makeSelectDayHomeList(num, data) {
  return `
    <ul class="select__day">
      ${makeSelectDayItems()}
    </ul>
    ${makeWebtoonList(num, data)}
  `;
}

function makeSelectDayItems() {
  const day = ['월', '화', '수', '목', '금', '토', '일', '완결'];
  const dataSet = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun', 'end'];

  let result = '';
  day.forEach((el, index) => {
    result += `
      <li class="day" data-day="${dataSet[index]}">
        <button type="button" class="day__btn">${day[index]}</button>
      </li>
    `
  });

  return result;
}

export {renderSelectDayHome, makeSelectDayHomeList, makeSelectDayItems}