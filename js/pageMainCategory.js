import setPreview from './setPreview.js';
import drawTagListEl from './drawTagListEl.js';
import clearTagListEl from './clearTagListEl.js';

const pageMainCategory = document.querySelectorAll(
  '.page-main-category__container li'
);

let curIdx = 1;

const setCurIdx = (idx) => {
  curIdx = idx;
};

const offHighLight = (element) => {
  element.classList.toggle('color-black');
};

const onHighLight = (element) => {
  element.classList.toggle('color-black');
};

pageMainCategory.forEach((li, idx, list) => {
  li.addEventListener('click', (event) => {
    if (curIdx === idx) return;
    const prevTarget = list[curIdx];
    const curTarget = event.target;
    const category = li.textContent;
    setCurIdx(idx);
    offHighLight(prevTarget);
    onHighLight(curTarget);

    setPreview(category);

    clearTagListEl();
    drawTagListEl(category);
  });
});
