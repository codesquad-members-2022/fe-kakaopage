import { renderDailyTop, renderGenreTop } from "./Render.js"

function setWeekNavEvent(){
    const $week_nav = document.querySelector('.week-nav__list');
    $week_nav.addEventListener("click", weekNavClickEvent);
}

function weekNavClickEvent(event){
    const selected = 'week-nav__item-selected';
    const $nav_item = event.target;
    const $nav_item_selected = document.querySelector(`.${selected}`);
    const dataKey = $nav_item.dataset.dataKey;

    if($nav_item === $nav_item_selected) return;

    $nav_item.classList.add(selected);
    $nav_item_selected.classList.remove(selected);
    renderDailyTop(dataKey);
}

export { setWeekNavEvent };