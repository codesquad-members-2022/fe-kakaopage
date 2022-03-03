import { gridData } from '../../server/data/categoryGridData.js';

export const renderCategoryGrid = (genre) => {
  const categoryGrid = document.createElement('div');
  categoryGrid.classList.add('category-grid','center');
  categoryGrid.innerHTML = categoryGridTemplate(genre);
  document.querySelector('.tab-contents').appendChild(categoryGrid);
}

const categoryGridTemplate = (genre) => {
    const dataArr = gridData[genre];
    return `
    <ul class='category-grid__container'>
        ${dataArr.map(data => `
        <li class='category-grid__item'>
            <a class='category-grid__link center' href='#'>
              <span class='category-grid__title'>${data.title}</span>
              ${data.alarm? `<span class='category-grid__alarm'>${data.alarm}</span>` : ''}
            </a>
          </li>`
        ).join('')}
    </ul>
    `
}