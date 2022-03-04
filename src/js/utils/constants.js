const WEBTOON_URL = 'https://millie-kakaopage.herokuapp.com/webtoon/';
const CATEGORY_URL = 'https://millie-kakaopage.herokuapp.com/category/';

const URLS = {
  webtoon: 'https://millie-kakaopage.herokuapp.com/webtoon/',
  category: 'https://millie-kakaopage.herokuapp.com/category/',
};

const CL = {
  SELECTED: 'selected',
  WHOLE: 'whole',
  DAY_ITEM: '.day__item',
};

const TITLE = {
  promotion: '🔥HOT 최근 프로모션 진행작',
};

const VAL = {
  CLONENODE_COUNT: 2,
  TRANSITION_TIME: 0.25,
  SWICHING_TIME: 500,
  bannerWidth: 720,
  MAX_BANNER_COUNT: 7,
  MIN_BANNER_COUNT: 2,
};

const today = new Date()
  .toLocaleString('en-us', { weekday: 'short' })
  .toLowerCase();

export { WEBTOON_URL, CATEGORY_URL, URLS, CL, TITLE, VAL, today };
