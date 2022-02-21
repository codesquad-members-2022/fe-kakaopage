// 0 1 2 3 4 5 6 (일 월 화 수 목 금 토)
import addClickEvent from './addClickEvent.js';
const html = `
  <ul class="day-filter">
    <li data-day="1">월</li>
    <li data-day="2">화</li>
    <li data-day="3">수</li>
    <li data-day="4">목</li>
    <li data-day="5">금</li>
    <li data-day="6">토</li>
    <li data-day="0">일</li>
    <li data-day="-1">전체</li>
  </ul>
`;

const drawDayFilter = (categoryEl) => {
  let curday = categoryEl.dataset.curday;
  let category = categoryEl.textContent;

  if (!['홈', '요일연재', '웹툰'].includes(category)) return;

  const filter = document.createElement('div');
  filter.className = 'filter';
  filter.innerHTML = html;

  if (category === '웹툰') {
    const preview = document.querySelector('.preview');
    preview.insertAdjacentElement('afterend', filter);
  } else {
    const firstMainContents = document.querySelector('.main-contents');
    firstMainContents.insertAdjacentElement('beforebegin', filter);
  }

  const todayEl = document.querySelector(
    `.day-filter li[data-day='${curday}']`
  );
  todayEl.classList.add('circle');

  // ---
  addClickEvent(categoryEl);
};

export default drawDayFilter;
