import setPreview from './setPreview.js';
import drawTagListEl from './drawTagListEl.js';
import clearTagListEl from './clearTagListEl.js';
import drawWebtoonContents from './webtoonComponent/drawWebtoonContents.js';
import clearWebtoonContents from './webtoonComponent/clearWebtoonContents.js';
import webtoonContentsObj from '../json/webtoonContents.json' assert { type: 'json' };
import dayContentsObj from '../json/dayContents.json' assert { type: 'json' };
import drawDayFilter from './dayFilter/drawDayFilter.js';
import clearDayFilter from './dayFilter/clearDayFilter.js';
import initMainCategoryDay from './dayFilter/initMainCategoryDay.js';
console.dir(webtoonContentsObj);
console.dir(dayContentsObj);

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
    offHighLight(prevTarget);
    onHighLight(curTarget);

    setPreview(category);

    clearTagListEl();
    drawTagListEl(category);

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

    clearDayFilter();
    drawDayFilter(li, dayContentsObj[category]);
  });
});
