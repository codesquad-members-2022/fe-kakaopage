import { $ } from "./utils/dom.js";

const toggleClass = (curEl, className) => {
    const parentNode = curEl.parentNode;
    Array.from(parentNode.children).forEach((el) =>
        el.classList.remove(className)
    );
    curEl.classList.add(className);
};

const toggleWeekDayMenu = (target) => {
    const curEl = target.parentNode;
    toggleClass(curEl, "active");
};

const preventHyperLinks = () => {
    $("body").addEventListener("click", (e) => {
        if (!e.target.matches("[data-link]")) return;
        e.preventDefault();
    });
};

const getJSON = (path) => {
    return fetch(`/${path}`).then((response) => response.json());
};

export { toggleClass, toggleWeekDayMenu, preventHyperLinks, getJSON };
