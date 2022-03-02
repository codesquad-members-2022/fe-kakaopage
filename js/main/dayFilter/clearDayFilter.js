import { selector } from '../../util/util.js';

const FILTER_CLASSNAME = 'filter';

const clearDayFilter = () => {
  const dayFilter = selector(`.${FILTER_CLASSNAME}`);
  if (!dayFilter) return;
  dayFilter.parentElement.removeChild(dayFilter);
};

export default clearDayFilter;
