import {makeSelectDayItems} from './selectDayItems.js'

// ========== SelectDayHome (웹툰-홈 화면의 요일탭)==========
function makeSelectDayHomeList() {
  const newList = document.createElement("ul");
  newList.classList.add('select__day');
  makeSelectDayItems(newList);

  return newList;
}

export {makeSelectDayHomeList}