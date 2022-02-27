function makeSelectDayHomeList() {
  return `
    <ul class="select__day">
      ${makeSelectDayItems()}
    </ul>
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

export {makeSelectDayHomeList, makeSelectDayItems}