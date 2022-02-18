const createSnb = (subCategorys) => {
  let items = '';

  subCategorys.forEach((subCategory, index) => {
    items += `<li data-subcategory="${index}" class="snb__item">${subCategory}</li>`;
  });

  return `
    <nav class="snb">
      <ul class="snb__list">
        ${items}
      </ul>
    </nav>
  `;
};

export { createSnb };
