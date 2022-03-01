import replaceDayContents from './replaceDayContents.js';
import { selector } from '../../util/util.js';
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

/* class name */
const CATEGORY_HIGHTLIGHT_CLASSNAME = 'circle';
const DAY_FILTER_CLASSNAME = 'day-filter';

/* data property */
const DATA_PROP_DAY = 'day';
const DATA_PROP_CURDAY = 'curday';

const onHighLight = (element) => {
  element.classList.toggle(CATEGORY_HIGHTLIGHT_CLASSNAME);
};
const offHighLight = (element) => {
  element.classList.remove(CATEGORY_HIGHTLIGHT_CLASSNAME);
};

// 메인 카테고리의 data-curday에 마지막으로 클릭한 dayfilter번호 write -> highlight 토글 ->
const addClickEvent = ($category, dayWebtoonsMap) => {
  const $dayFilter = selector(`.${DAY_FILTER_CLASSNAME}`);

  $dayFilter.addEventListener('click', (event) => {
    if (event.target.tagName !== 'LI') return;
    if (
      event.target.dataset[DATA_PROP_DAY] ===
      $category.dataset[DATA_PROP_CURDAY]
    )
      return;

    let curday = $category.dataset[DATA_PROP_CURDAY];

    const curDayFilterEl = event.target;
    const prevDayFilterEl = selector(`[data-day='${curday}']`, $dayFilter);

    $category.dataset[DATA_PROP_CURDAY] = curDayFilterEl.dataset[DATA_PROP_DAY];
    curday = curDayFilterEl.dataset[DATA_PROP_DAY];
    onHighLight(curDayFilterEl);
    offHighLight(prevDayFilterEl);

    const { webtoonArr, coverType } = dayWebtoonsMap[days[curday]][0];
    replaceDayContents({ webtoonArr, coverType });
  });
};

export default addClickEvent;
