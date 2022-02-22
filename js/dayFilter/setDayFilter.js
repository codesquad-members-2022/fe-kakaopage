import drawDayFilter from './drawDayFilter.js';
import clearDayFilter from './clearDayFilter.js';

const setDayFilter = (categoryEl, dayContentsMap) => {
  clearDayFilter();
  drawDayFilter(categoryEl, dayContentsMap);
};

export default setDayFilter;
