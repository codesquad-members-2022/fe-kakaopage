import webtoonContentsObj from '../json/webtoonContents.json' assert { type: 'json' };
import dayContentsObj from '../json/dayContents.json' assert { type: 'json' };
import previewsObj from '../json/preview.json' assert { type: 'json' };

import drawPreviews from './preview/drawPreviews.js';
import clearPreviews from './preview/clearPreviews.js';

import drawTagListEl from './drawTagListEl.js';
import clearTagListEl from './clearTagListEl.js';

import drawWebtoonContents from './webtoonComponent/drawWebtoonContents.js';
import clearWebtoonContents from './webtoonComponent/clearWebtoonContents.js';

import drawDayFilter from './dayFilter/drawDayFilter.js';
import clearDayFilter from './dayFilter/clearDayFilter.js';

import initMainCategoryDay from './dayFilter/initMainCategoryDay.js';

console.dir(webtoonContentsObj);
console.dir(dayContentsObj);
console.dir(previewsObj);

const pageMainCategory = document.querySelectorAll(
  '.page-main-category__container li'
);

let curIdx = 1;

const setCurIdx = (idx) => {
  curIdx = idx;
};

const toggleHighlight = (prevTarget, curTarget) => {
  prevTarget.classList.toggle('color-black');
  curTarget.classList.toggle('color-black');
};

const days = {
  0: '일',
  1: '월',
  2: '화',
  3: '수',
  4: '목',
  5: '금',
  6: '토',
  '-1': '전체',
};

initMainCategoryDay();

pageMainCategory.forEach((li, idx, list) => {
  li.addEventListener('click', (event) => {
    if (curIdx === idx) return;
    let selectedDay = days[li.dataset.curday];
    const dayFilterExists = !!selectedDay;

    const prevTarget = list[curIdx];
    const curTarget = event.target;
    const category = li.textContent;
    setCurIdx(idx);

    // highlight
    toggleHighlight(prevTarget, curTarget);

    // preview
    const previewsArr = previewsObj[category];
    clearPreviews();
    drawPreviews(previewsArr);

    // tag list
    clearTagListEl();
    drawTagListEl(category);

    // webtoon contents
    clearWebtoonContents();
    if (dayFilterExists) {
      const dayContentsArr = dayContentsObj[category][selectedDay];
      dayContentsArr.forEach((dayContents) => {
        drawWebtoonContents(dayContents);
      });
    }
    webtoonContentsObj[category].forEach((webtoonContents) => {
      drawWebtoonContents(webtoonContents);
    });

    // day filter
    clearDayFilter();
    drawDayFilter(li, dayContentsObj[category]);
  });
});
