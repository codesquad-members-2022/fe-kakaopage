const initMainCategoryDay = () => {
  const categories = document.querySelectorAll(
    '.page-main-category__container li'
  );
  categories.forEach((category) => {
    if (!['홈', '웹툰', '요일연재'].includes(category.textContent)) return;
    category.dataset.curday = new Date().getDay();
  });
};

export default initMainCategoryDay;
