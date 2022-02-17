import setPreview from './setPreview.js';
import createTagList from './createTagList.js';

const pageMainCategory = document.querySelectorAll(
  '.page-main-category__container li'
);

let curIdx = 1;

const setCurIdx = (idx) => {
  curIdx = idx;
};

const moveBlackColor = (from, to) => {
  from.classList.toggle('color-black');
  to.classList.toggle('color-black');
};

pageMainCategory.forEach((li, idx, list) => {
  li.addEventListener('click', (event) => {
    if (curIdx === idx) return;
    const prevTarget = list[curIdx];
    const curTarget = event.target;
    const category = li.textContent;
    setCurIdx(idx);
    moveBlackColor(prevTarget, curTarget);
    setPreview(category);
    createTagList(category);
  });
});
