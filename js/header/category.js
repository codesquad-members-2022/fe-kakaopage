import { selector, selectorAll, addClass, removeClass } from '../util/util.js';

/* selector */
const CATEGORY_LI_SELECTOR = '.header-category__item';
const MAIN_PAGE_SELECTOR = '.page-main';
const DUMMY_PAGE_SELECTOR = '.dummy';

/* class name */
const VISIBILITY_HIDDEN = 'visibility-hidden';
const DISPLAY_NONE = 'display-none';
const HIGHLIGHT = 'yellow-border';

const categoryState = {
  userIdx: 1,
  mainIdx: 1,
  getUserIdx() {
    return this.userIdx;
  },
  setUserIdx(idx) {
    this.userIdx = idx;
  },
  isUserOnMain() {
    return this.userIdx === this.mainIdx;
  },
};

const drawDummyPage = () => {
  const $mainPage = selector(MAIN_PAGE_SELECTOR);
  const $dummyPage = selector(DUMMY_PAGE_SELECTOR);
  if (categoryState.isUserOnMain()) {
    removeClass(VISIBILITY_HIDDEN, $mainPage);
    addClass(DISPLAY_NONE, $dummyPage);
    return;
  }
  removeClass(DISPLAY_NONE, $dummyPage);
  addClass(VISIBILITY_HIDDEN, $mainPage);
};

const offHighLight = (element) => {
  removeClass(HIGHLIGHT, element);
};

const onHighLight = (element) => {
  addClass(HIGHLIGHT, element);
};

const $$category = selectorAll(CATEGORY_LI_SELECTOR);

$$category.forEach(($category, clickedIdx, $$category) => {
  $category.addEventListener('click', (event) => {
    event.preventDefault();
    const userIdx = categoryState.getUserIdx();
    if (userIdx === clickedIdx) return;
    const $prevCategory = $$category[userIdx];
    const $curCategory = event.target.closest(CATEGORY_LI_SELECTOR);
    categoryState.setUserIdx(clickedIdx);

    offHighLight($prevCategory);
    onHighLight($curCategory);
    drawDummyPage(categoryState.getUserIdx());
  });
});
