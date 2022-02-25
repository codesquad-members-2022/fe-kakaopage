function createEventListnerDayNav() {
    const dayNav = document.querySelector('.day-nav');
    dayNav.querySelectorAll('.day-nav__item').forEach(item => {
        item.addEventListener('click', () => {
            const itemSelected = dayNav.querySelector('.day-nav__item--selected');
            if (itemSelected !== null) {
                itemSelected.classList.remove('day-nav__item--selected');
            }
            item.classList.add('day-nav__item--selected');
        });
    });
}

export { createEventListnerDayNav };