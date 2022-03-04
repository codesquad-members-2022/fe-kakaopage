import { selector, addClass, createElement } from '../../util/util.js';

// 0 1 2 3 4 5 6 (일 월 화 수 목 금 토)
import addClickEvent from './addClickEvent.js';
const dayFilterTemplete = `
  <ul class="day-filter">
    <li data-day="1">월</li>
    <li data-day="2">화</li>
    <li data-day="3">수</li>
    <li data-day="4">목</li>
    <li data-day="5">금</li>
    <li data-day="6">토</li>
    <li data-day="0">일</li>
    <li data-day="-1">전체</li>
  </ul>
`;

const WEBTOONS_CONTAINER_CLASSNAME = 'webtoons-container';
const FILTER_CLASSNAME = 'filter';
const CATEGORY_HIGHLIGHT_CLASSNAME = 'circle';
const DAY_FILTER_CLASSNAME = 'day-filter';
const PREVIEW_LIST_CLASSNAME = 'preview-list';

const DATA_PROP_CURDAY = 'curday';

const drawDayFilter = ({
  $category,
  dayWebtoonsMap,
  categoriesWithDayFilter,
}) => {
  const curday = $category.dataset[DATA_PROP_CURDAY];
  const category = $category.textContent;
  if (!categoriesWithDayFilter.includes(category)) return;

  const WEBTOON_CATEGORY_IDX = 2;
  const WEBTOON_CATEGORY = categoriesWithDayFilter[WEBTOON_CATEGORY_IDX];

  const $filter = createElement('div', FILTER_CLASSNAME);
  $filter.innerHTML = dayFilterTemplete;

  if (category === WEBTOON_CATEGORY) {
    const $previewList = selector(`.${PREVIEW_LIST_CLASSNAME}`);
    $previewList.insertAdjacentElement('afterend', $filter);
  } else {
    const firstMainContents = selector(`.${WEBTOONS_CONTAINER_CLASSNAME}`);
    firstMainContents.insertAdjacentElement('beforebegin', $filter);
  }

  const $today = selector(`.${DAY_FILTER_CLASSNAME} li[data-day='${curday}']`);
  addClass(CATEGORY_HIGHLIGHT_CLASSNAME, $today);

  // ---
  addClickEvent($category, dayWebtoonsMap);
};

export default drawDayFilter;
