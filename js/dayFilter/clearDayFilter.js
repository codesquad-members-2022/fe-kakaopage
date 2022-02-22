const clearDayFilter = () => {
  const dayFilter = document.querySelector('.filter');
  if (!dayFilter) return;
  dayFilter.parentElement.removeChild(dayFilter);
};

export default clearDayFilter;
