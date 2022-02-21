const clearDayFilter = () => {
  const dayFilter = document.querySelector('.day-filter');
  if (!dayFilter) return;
  dayFilter.parentElement.removeChild(dayFilter);
};

export default clearDayFilter;
