import setPreview from './setPreview.js';
import drawTagListEl from './drawTagListEl.js';
import clearTagListEl from './clearTagListEl.js';

const pageMainCategoryContainer = document.querySelector(
  '.page-main-category__container'
);

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

/* preview ~ tagList까지 (일부 메인 카테고리 탭 제외하고는 공통) */
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

/* 연재 */

// const indexOf = (li) => [].indexOf.call(pageMainCategoryContainer.children, li);
// pageMainCategoryContainer.addEventListener('click', (e) => {});
