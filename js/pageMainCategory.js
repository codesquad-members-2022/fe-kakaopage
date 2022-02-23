import webtoonContentsObj from '../json/webtoonContents.json' assert { type: 'json' };
import dayContentsObj from '../json/dayContents.json' assert { type: 'json' };
import previewsObj from '../json/preview.json' assert { type: 'json' };

import setTagListEl from './tagList/setTagListEl.js';
import setPreviews from './preview/setPreviews.js';

import setWebtoonContents from './webtoonComponent/setWebtoonContents.js';

import setDayFilter from './dayFilter/setDayFilter.js';
import initMainCategoryDay from './dayFilter/initMainCategoryDay.js';

console.dir(webtoonContentsObj);
console.dir(dayContentsObj);
console.dir(previewsObj);

const pageMainCategory = document.querySelectorAll(
  '.page-main-category__container li'
);

let curIdx = 2;

const setCurIdx = (idx) => {
  curIdx = idx;
};

const timer = {
  timerId: null,
  setTimer(func, sec) {
    this.timerId = setInterval(func, sec * 1000);
  },
  clearTimer() {
    clearInterval(this.timerId);
  },
  exists() {
    return !!this.timerId;
  },
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

const toggleHighlight = (prevTarget, curTarget) => {
  prevTarget.classList.toggle('color-black');
  curTarget.classList.toggle('color-black');
};

const initMainPage = () => {
  initMainCategoryDay();
  const categoryEls = document.querySelectorAll(
    '.page-main-category__container li'
  );
  const defaultIdx = curIdx;
  const defaultCategoryEl = categoryEls[defaultIdx];
  const defaultCategoryName = defaultCategoryEl.textContent;
  const today = days[defaultCategoryEl.dataset.curday];
  defaultCategoryEl.classList.add('color-black');

  const previews = previewsObj[defaultCategoryName];
  const dayContentsMap = dayContentsObj[defaultCategoryName];
  const dayContentsArr = dayContentsMap?.[today];
  const webtoonContentsArr = webtoonContentsObj[defaultCategoryName];
  setPreviews(previews, timer);
  setTagListEl(defaultCategoryName);
  setWebtoonContents({ dayContentsArr, webtoonContentsArr });
  setDayFilter({ categoryEl: defaultCategoryEl, dayContentsMap });
};

initMainPage();

pageMainCategory.forEach((li, idx, list) => {
  li.addEventListener('click', (event) => {
    if (curIdx === idx) return;
    const prevTarget = list[curIdx];
    const curTarget = event.target;
    const category = li.textContent;
    let selectedDay = days[li.dataset.curday];
    const dayContentsMap = dayContentsObj[category];
    const dayContentsArr = dayContentsMap?.[selectedDay];
    const webtoonContentsArr = webtoonContentsObj[category];
    setCurIdx(idx);

    // highlight
    toggleHighlight(prevTarget, curTarget);

    // preview - 구현 후 함수 하나로 만들기
    const previews = previewsObj[category];
    setPreviews(previews, timer);

    // tag list
    setTagListEl(category);

    // webtoon contents
    setWebtoonContents({ dayContentsArr, webtoonContentsArr });

    // day filter
    setDayFilter({ categoryEl: li, dayContentsMap });
  });
});
