const createSnb = (subCategorys) => {
  let items = '';

  subCategorys.forEach((subCategory, index) => {
    items += `<li data-category="${index}" class="snb__item">${subCategory}</li>`;
  });

  return `
    <nav class="snb">
      <ul data-navtype="snb" class="snb__list">
        ${items}
      </ul>
    </nav>
  `;
};

export { createSnb };