const createGridMenu = (menuItemLabels) => {
  const items = menuItemLabels.reduce((joined, label) => {
    const badgeEl = label[1] ? `<span class="grid-menu__badge">${label[1]}</span>` : '';
    return joined + `<li class="grid-menu__item">${label[0]}${badgeEl}</li>`;
  }, '');

  return `
    <nav class="grid-menu">
      <ul class="class grid-menu__list">
        ${items}
      </ul>
    </nav>
  `;
};

export { createGridMenu };
