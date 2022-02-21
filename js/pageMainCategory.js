import setPreview from './setPreview.js';
import drawTagListEl from './drawTagListEl.js';
import clearTagListEl from './clearTagListEl.js';
import drawWebtoonContents from './webtoonComponent/drawWebtoonContents.js';
import clearWebtoonContents from './webtoonComponent/clearWebtoonContents.js';
import webtoonContentsArr from '../json/webtoonContents.json' assert { type: 'json' };
console.dir(webtoonContentsArr);
import drawDayFilter from './dayFilter/drawDayFilter.js';
import clearDayFilter from './dayFilter/clearDayFilter.js';
import initMainCategoryDay from './dayFilter/initMainCategoryDay.js';

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

initMainCategoryDay();
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

    clearWebtoonContents();
    webtoonContentsArr[category].forEach((webtoonContents) => {
      drawWebtoonContents(webtoonContents);
    });

    clearDayFilter();
    drawDayFilter(li);
  });
});
