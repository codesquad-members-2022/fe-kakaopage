const createSnb = (subCategorys) => {
  const items = subCategorys.reduce(
    (joined, subCategory) =>
      joined +
      `<li data-active="off" data-category="${subCategory}" class="snb__item">${subCategory}</li>`,
    ''
  );

  return `
    <nav class="snb">
      <ul data-navtype="snb" class="snb__list">
        ${items}
      </ul>
    </nav>
  `;
};

export { createSnb };
