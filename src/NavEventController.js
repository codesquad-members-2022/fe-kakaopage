import * as Render from "./Render.js"

function setNavEvent(className) {
    const $nav = document.querySelector(`.${className}`);
    const eventHandler = getNavEventHandler(className);
    $nav.addEventListener('click', eventHandler);
}

function getNavEventHandler(className) {
    const handlers = {
        'week-nav__list': weekNavClickHandler,
        'main-nav__list': headerNavClickHandler,
    }
    return handlers[className];
}

function weekNavClickHandler(event) {
    const selected = 'week-nav__item-selected';
    const $nav_item = event.target;
    const $nav_item_selected = document.querySelector(`.${selected}`);
    const dataKey = $nav_item.dataset.dataKey;

    if ($nav_item === $nav_item_selected) {
        return;
    }

    $nav_item.classList.add(selected);
    $nav_item_selected.classList.remove(selected);
    Render.renderTopList('week', dataKey);
}

function headerNavClickHandler(event) {
    const selected = 'main-nav__item--selected';
    const $nav_item_selected = document.querySelector(`.${selected}`);
    let $nav_item = event.target;

    if ($nav_item.tagName === 'UL') {
        return;
    }

    if ($nav_item.tagName === 'A') {
        $nav_item = $nav_item.parentNode;
    }

    const dataKey = $nav_item.dataset.dataKey;

    if ($nav_item === $nav_item_selected) {
        return;
    }

    $nav_item.classList.add(selected);
    $nav_item_selected.classList.remove(selected);
    Render.rendering(dataKey);
}

export {
    setNavEvent
};