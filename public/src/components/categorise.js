const getCategoryTemplate = dataEl => {
  return `<li class="category"><a href="javascript:;" class="category__link" data-category="${dataEl}">${dataEl}</a></li>`;
};

const getCategoriesTemplate = data => {
  const categoryList = data.reduce((acc, cur) => (acc += getCategoryTemplate(cur)), "");
  return `<ul class="categories">
          ${categoryList}
      </ul>`;
};

export { getCategoriesTemplate };
