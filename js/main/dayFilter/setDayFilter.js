import drawDayFilter from './drawDayFilter.js';
import clearDayFilter from './clearDayFilter.js';

const setDayFilter = ({ $category, dayWebtoonsMap }) => {
  clearDayFilter();
  drawDayFilter($category, dayWebtoonsMap);
};

export default setDayFilter;
