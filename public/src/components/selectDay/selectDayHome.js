import makeSelectDayItems from './selectDayItem.js'
import {makeWebtoonList} from '../webtoonList.js'

// ========== SelectDayHome (웹툰-홈 화면의 요일탭)==========
export default function makeSelectDayHome(num, data) {
  return `
    <ul class="select__day">
      ${makeSelectDayItems()}
    </ul>
    ${makeWebtoonList(num, data)}
  `;
}