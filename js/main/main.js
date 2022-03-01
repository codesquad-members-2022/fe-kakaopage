import { selector, selectorAll, toggleClass, addClass } from '../util/util.js';

import StopFlag from './preview/slider/StopFlag.js';

import previewsData from '../../json/previews.json' assert { type: 'json' };

import setTagList from './tagList/setTagList.js';
import setPreviews from './preview/setPreviews.js';
import setMainContents from './setMainContents.js';

import initCategoryCurDay from './category/initCategoryCurDay.js';

import CarouselSlider from './preview/slider/CarouselSlider.js';
import createPreview from './preview/createPreview.js';
// console.dir(webtoonsData);
// console.dir(dayWebtoonsData);
// console.dir(previewsData);

/* selector */
const test = false;
const apiURL = test
  ? 'http://localhost:3000/'
  : 'https://fe-kakaopage-api-server.herokuapp.com/';

const PREV_BTN_SELECTOR = '.prev-btn';
const NEXT_BTN_SELECTOR = '.next-btn';
const SLIDE_CUR_NUM_SELECTOR = '.slide-number .cur-number';
const SLIDE_LAST_NUM_SELECTOR = '.slide-number .last-number';
const CATEGORY_ITEM_SELECTOR = '.page-main-category__item';
const PAGE_MAIN_SELECTOR = '.page-main';
const TAG_LIST_CONTAINER_SELECTOR = '.tag-list__container';

/* class name */
const CATEGORY_HIGHLIGHT = 'color-black';
const SLIDER_SELECTOR = '.slider';

/* preview width */
const PREVIEW_WIDTH = 720;

const INTERVAL_TIME = 3; // 초 단위
const categoriesWithDayFilter = ['홈', '요일연재', '웹툰']; // Day 필터가 있는 카테고리 목록

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

const carouselSlider = new CarouselSlider({
  $slider: selector(SLIDER_SELECTOR),
  elementWidth: PREVIEW_WIDTH,
  createItemElFunc: createPreview,
  $prevBtn: selector(PREV_BTN_SELECTOR),
  $nextBtn: selector(NEXT_BTN_SELECTOR),
  $slideCurNum: selector(SLIDE_CUR_NUM_SELECTOR),
  $slideLastNum: selector(SLIDE_LAST_NUM_SELECTOR),
  intervalTime: INTERVAL_TIME,
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

const toggleHighlight = ($prevCategory, $curCategory) => {
  if ($prevCategory) toggleClass(CATEGORY_HIGHLIGHT, $prevCategory);
  if ($curCategory) toggleClass(CATEGORY_HIGHLIGHT, $curCategory);
};

/* event listener */
const stopFlag = new StopFlag();
const onClick = ($category, selectedIdx, $$category) => (event) => {
  if (categoryState.getUserIdx() === selectedIdx) return;
  if (stopFlag.isTrue()) {
    console.log('아직 누를 수 없음');
    return;
  }
  stopFlag.setTrue();

  const $prevCategory = $$category[categoryState.getUserIdx()];
  const $curCategory = event.target;
  const categoryName = $category.textContent;
  const selectedDay = days[$category.dataset.curday];

  const previews = previewsData[categoryName];

  categoryState.setUserIdx(selectedIdx);

  // highlight
  toggleHighlight($prevCategory, $curCategory);

  // preview
  setPreviews({ previews, slider: carouselSlider });

  // tag list
  setTagList({
    categoryName: categoryName,
    $main: selector(PAGE_MAIN_SELECTOR),
    $tagListContainer: selector(TAG_LIST_CONTAINER_SELECTOR),
  });

  // webtoons + day filter
  setMainContents({
    $category,
    selectedIdx,
    selectedDay,
    apiURL,
    stopFlag,
    categoriesWithDayFilter,
  });
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

  initCategoryCurDay(categoriesWithDayFilter);

  const defaultCategoryIdx = categoryState.getDefaultIdx(); // 첫 페이지 접속시 렌더링할 카테고리의 인덱스
  $$category[defaultCategoryIdx].click();
};

main();
