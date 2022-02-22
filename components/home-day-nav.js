function createHomeDayNav() {
    const dayNav = document.createElement('nav');
    dayNav.innerHTML = `
    <ul class="day-nav">
        <li class="day-nav__item day-nav__item--selected" data-day="mon">월</li>
        <li class="day-nav__item" data-day="tue">화</li>
        <li class="day-nav__item" data-day="wed">수</li>
        <li class="day-nav__item" data-day="thu">목</li>
        <li class="day-nav__item" data-day="fri">금</li>
        <li class="day-nav__item" data-day="sat">토</li>
        <li class="day-nav__item" data-day="sun">일</li>
    </ul>
    `;
    dayNav.addEventListener('click', (e) => {
        e.target.closest('section').querySelector('.contents-wrapper').innerText = `${e.target.dataset.day} 컨텐츠 보여주기`;
        const itemSelected = dayNav.querySelector('.day-nav__item--selected');
        if (itemSelected !== null) {
            itemSelected.classList.remove('day-nav__item--selected');
        }
        e.target.classList.add('day-nav__item--selected');
    });
    
    return dayNav;
}

export { createHomeDayNav };
