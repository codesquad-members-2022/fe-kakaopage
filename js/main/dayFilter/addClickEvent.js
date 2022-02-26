import replaceDayContents from './replaceDayContents.js';
const days = {
  0: '일',
  1: '월',
  2: '화',
  3: '수',
  4: '목',
  5: '금',
  6: '토',
  '-1': '전체',
};

const onHighLight = (element) => {
  element.classList.toggle('circle');
};

const offHighLight = (element) => {
  element.classList.remove('circle');
};

// li 사이를 빠르게 클릭하면 target이 ul이 되서 오류가 발생함
// 메인 카테고리의 data-curday에 마지막으로 클릭한 dayfilter번호 write -> highlight 토글 ->
const addClickEvent = (categoryEl, dayWebtoonsMap) => {
  const dayFilter = document.querySelector('.day-filter');

  dayFilter.addEventListener('click', (event) => {
    if (event.target.tagName !== 'LI') return;
    if (event.target.dataset.day === categoryEl.dataset.curday) return;

    let curday = categoryEl.dataset.curday;

    const curDayFilterEl = event.target;
    const prevDayFilterEl = dayFilter.querySelector(`[data-day='${curday}']`);

    categoryEl.dataset.curday = curDayFilterEl.dataset.day;
    curday = curDayFilterEl.dataset.day;
    onHighLight(curDayFilterEl);
    offHighLight(prevDayFilterEl);

    const { webtoonArr, coverType } = dayWebtoonsMap[days[curday]][0];
    replaceDayContents({ webtoonArr, coverType });
  });
};

export default addClickEvent;
