export default function makeSelectDayItems() {
  const day = ['월', '화', '수', '목', '금', '토', '일', '완결'];
  const dataSet = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun', 'end'];

  return day.reduce((acc, cur, index) => acc + makeSelectDayItem(cur, dataSet, index), '');
}

function makeSelectDayItem(day, dataSet, index) {
  return `
    <li class="day" data-day="${dataSet[index]}">
      <button type="button" class="day__btn">${day}</button>
    </li>
  `
}