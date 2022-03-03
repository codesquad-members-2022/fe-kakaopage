import makeSelectDayItems from './selectDayItem.js'
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
    .then(data => makeSelectDayHome(num, data));
}

function makeSelectDayHome(num, data) {
  return `
    <ul class="select__day">
      ${makeSelectDayItems()}
    </ul>
    ${makeWebtoonList(num, data)}
  `;
}

export {renderSelectDayHome}