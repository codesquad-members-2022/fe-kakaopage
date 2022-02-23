const DayBar = () => {
  const dayBar = document.createElement('nav');
  dayBar.classList.add('mainbox', 'main-day');

  dayBar.innerHTML = `
    <ul class="day__list">
          <li class="day__item" id="mon">월</li>
          <li class="day__item" id="tue">화</li>
          <li class="day__item" id="wed">수</li>
          <li class="day__item" id="thu">목</li>
          <li class="day__item" id="fri">금</li>
          <li class="day__item" id="sat">토</li>
          <li class="day__item" id="sun">일</li>
          <li class="day__item" id="whole">전체</li>
        </ul>
    `;
  return dayBar;
};

export { DayBar };
