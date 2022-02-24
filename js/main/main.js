import { selector, selectorAll, toggleClass, addClass } from '../util/util.js';

import webtoonContentsObj from '../../json/webtoonContents.json' assert { type: 'json' };
import dayContentsObj from '../../json/dayContents.json' assert { type: 'json' };
import previewsObj from '../../json/previews.json' assert { type: 'json' };

import setTagListEl from './tagList/setTagListEl.js';
import setPreviews from './preview/setPreviews.js';
import setWebtoonContents from './webtoonComponent/setWebtoonContents.js';
import setDayFilter from './dayFilter/setDayFilter.js';
import initCategoryCurDay from './category/initCategoryCurDay.js';

import CarouselSlider from './preview/slider/CarouselSlider.js';
import createPreviewEl from './preview/createPreviewEl.js';
// console.dir(webtoonContentsObj);
// console.dir(dayContentsObj);
// console.dir(previewsObj);

/* selector */
const PREV_BTN_SELECTOR = '.prev-btn';
const NEXT_BTN_SELECTOR = '.next-btn';
const SLIDE_CUR_NUM_SELECTOR = '.slide-number .cur-number';
const SLIDE_LAST_NUM_SELECTOR = '.slide-number .last-number';
const CATEGORY_ITEM_SELECTOR = '.page-main-category__item';

/* class name */
const CATEGORY_HIGHLIGHT = 'color-black';

/* preview width */
const ELEMENT_WIDTH = 720;

const categoryState = {
  idx: null,
  defaultIdx: 2,
  getUserIdx() {
    return this.idx;
  },
  setUserIdx(idx) {
    this.idx = idx;
  },
  is(idx) {
    return this.idx === idx;
  },
  getDefaultIdx() {
    return this.defaultIdx;
  },
};

const sliderTimer = {
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
  timer: sliderTimer,
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

const toggleHighlight = ($prevTarget, $curTarget) => {
  if ($prevTarget) toggleClass(CATEGORY_HIGHLIGHT, $prevTarget);
  if ($curTarget) toggleClass(CATEGORY_HIGHLIGHT, $curTarget);
};

/* event listener */

const onClick = ($category, selectedIdx, $$category) => (event) => {
  if (categoryState.getUserIdx() === selectedIdx) return;

  const prevTarget = $$category[categoryState.getUserIdx()];
  const curTarget = event.target;
  const categoryName = $category.textContent;
  let selectedDay = days[$category.dataset.curday];
  const previews = previewsObj[categoryName];
  const dayContentsMap = dayContentsObj[categoryName];
  const dayContentsArr = dayContentsMap?.[selectedDay];
  const webtoonContentsArr = webtoonContentsObj[categoryName];
  categoryState.setUserIdx(selectedIdx);

  // highlight
  toggleHighlight(prevTarget, curTarget);

  // preview
  setPreviews({ previews, timer: sliderTimer, slider: carouselSlider });

  // tag list
  setTagListEl(categoryName);

  // webtoon contents
  setWebtoonContents({ dayContentsArr, webtoonContentsArr });

  // day filter
  setDayFilter({ categoryEl: $category, dayContentsMap });
};

const addListener = ($category, selectedIdx, $$category) => {
  $category.addEventListener(
    'click',
    onClick($category, selectedIdx, $$category)
  );
};

const main = () => {
  const $$category = selectorAll(CATEGORY_ITEM_SELECTOR);
  $$category.forEach(addListener);

  const categoriesWidthDayFilter = ['홈', '요일연재', '웹툰']; // Day 필터가 있는 카테고리 목록
  initCategoryCurDay(categoriesWidthDayFilter); // Day 필터가 있는 카테고리 엘리먼트에 data-curday 프로퍼티 추가

  const defaultCategoryIdx = categoryState.getDefaultIdx(); // 첫 페이지 접속시 렌더링할 카테고리의 인덱스
  $$category[defaultCategoryIdx].click();
};

main();
