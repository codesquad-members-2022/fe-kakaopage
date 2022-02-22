const $ = (el) => document.querySelector(el);
const $$ = (el) => document.querySelectorAll(el);

const getToday = () => {
    const date = new Date();
    let today = date === -1 ? 6 : date.getDay() - 1;
    return today;
}

export { $, $$, getToday };