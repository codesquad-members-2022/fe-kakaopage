import { selector, selectorAll } from './util/util.js';

import webtoonContentsObj from '../json/webtoonContents.json' assert { type: 'json' };
import dayContentsObj from '../json/dayContents.json' assert { type: 'json' };
import previewsObj from '../json/previews.json' assert { type: 'json' };

import setTagListEl from './tagList/setTagListEl.js';
import setPreviews from './preview/setPreviews.js';

import setWebtoonContents from './webtoonComponent/setWebtoonContents.js';

import setDayFilter from './dayFilter/setDayFilter.js';
import initMainCategoryDay from './dayFilter/initMainCategoryDay.js';

import CarouselSlider from './preview/slider/CarouselSlider.js';
import createPreviewEl from './preview/createPreviewEl.js';
console.dir(webtoonContentsObj);
console.dir(dayContentsObj);
console.dir(previewsObj);

const ELEMENT_WIDTH = 720;
const PREV_BTN_SELECTOR = '.prev-btn';
const NEXT_BTN_SELECTOR = '.next-btn';
const SLIDE_CUR_NUM_SELECTOR = '.slide-number .cur-number';
const SLIDE_LAST_NUM_SELECTOR = '.slide-number .last-number';
const CATEGORY_ITEM_SELECTOR = '.page-main-category__item';

const pageMainCategory = selectorAll(CATEGORY_ITEM_SELECTOR);

const categoryState = {
  idx: 2,
  getUserIdx() {
    return this.idx;
  },
  setUserIdx(idx) {
    this.idx = idx;
  },
  is(idx) {
    return this.idx === idx;
  },
};

const timer = {
  timerId: null,
  setTimer(sec) {
    this.timerId = setInterval(() => {
      const nextBtn = document.querySelector(NEXT_BTN_SELECTOR);
      nextBtn.click();
    }, sec * 1000);
  },
  clearTimer() {
    if (!this.exists()) return;
    clearInterval(this.timerId);
    this.timerId = null;
  },
  exists() {
    return !!this.timerId;
  },
};

const carouselSlider = new CarouselSlider({
  elementWidth: ELEMENT_WIDTH,
  createItemElFunc: createPreviewEl,
  prevBtnEl: document.querySelector(PREV_BTN_SELECTOR),
  nextBtnEl: document.querySelector(NEXT_BTN_SELECTOR),
  slideCurNumEl: document.querySelector(SLIDE_CUR_NUM_SELECTOR),
  slideLastNumEl: document.querySelector(SLIDE_LAST_NUM_SELECTOR),
  timer: timer,
});

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
  const defaultIdx = categoryState.getUserIdx();
  const defaultCategoryEl = pageMainCategory[defaultIdx];
  const defaultCategoryName = defaultCategoryEl.textContent;
  const today = days[defaultCategoryEl.dataset.curday];
  defaultCategoryEl.classList.add('color-black');

  const previews = previewsObj[defaultCategoryName];
  const dayContentsMap = dayContentsObj[defaultCategoryName];
  const dayContentsArr = dayContentsMap?.[today];
  const webtoonContentsArr = webtoonContentsObj[defaultCategoryName];
  setPreviews({ previews, timer, slider: carouselSlider });
  setTagListEl(defaultCategoryName);
  setWebtoonContents({ dayContentsArr, webtoonContentsArr });
  setDayFilter({ categoryEl: defaultCategoryEl, dayContentsMap });
};

initMainPage();

pageMainCategory.forEach((categoryEl, idx, list) => {
  categoryEl.addEventListener('click', (event) => {
    if (categoryState.is(idx)) return;
    const prevTarget = list[categoryState.getUserIdx()];
    const curTarget = event.target;
    const categoryName = categoryEl.textContent;
    let selectedDay = days[categoryEl.dataset.curday];
    const previews = previewsObj[categoryName];
    const dayContentsMap = dayContentsObj[categoryName];
    const dayContentsArr = dayContentsMap?.[selectedDay];
    const webtoonContentsArr = webtoonContentsObj[categoryName];
    categoryState.setUserIdx(idx);

    // highlight
    toggleHighlight(prevTarget, curTarget);

    // preview - 구현 후 함수 하나로 만들기
    setPreviews({ previews, timer, slider: carouselSlider });

    // tag list
    setTagListEl(categoryName);

    // webtoon contents
    setWebtoonContents({ dayContentsArr, webtoonContentsArr });

    // day filter
    setDayFilter({ categoryEl, dayContentsMap });
  });
});
