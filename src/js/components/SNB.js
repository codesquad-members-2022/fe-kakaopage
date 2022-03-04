const SNB = category => {
  const snbNav = document.createElement('nav');
  snbNav.classList.add('snb');
  snbNav.innerHTML = `
        <ul class="snb__list">
          ${createCategoryItem(category)}
        </ul>
    `;
  return snbNav;
};

const createCategoryItem = category => {
  const categoryItem = category.reduce((acc, cur) => {
    return (
      acc + `<li class="snb__item" data-category="${cur.name}">${cur.name}</li>`
    );
  }, '');
  return categoryItem;
};

export { SNB };
