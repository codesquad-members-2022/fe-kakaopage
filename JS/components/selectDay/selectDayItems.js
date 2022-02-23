export function makeSelectDayItems(list) {
  const day = ['월', '화', '수', '목', '금', '토', '일', '완결'];
  const arrDaySun = 6;
  const defaultSun = 0;

  const dataSet = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun', 'end'];
  const today = new Date().getDay();

  day.forEach((el, index) => {
    const item = document.createElement('li');
    item.classList.add('day');
    item.dataset.day = `${dataSet[index]}`;
    item.dataset.dayIndex = `${index}`;
    
    item.innerHTML = `<button type="button" class="day__btn">${day[index]}</button></li>`;

    if (index === arrDaySun && today === defaultSun) item.classList.add('day--focused');
    if (today === index + 1) item.classList.add('day--focused');

    list.appendChild(item);
  });
}