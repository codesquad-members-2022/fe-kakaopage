export const getCategoryGridTemplate = (gridData) => {
    return `
      <div class='category-grid center'>
          <ul class='category-grid__container'>
            ${gridData.map(data => `
            <li class='category-grid__item'>
                <a class='category-grid__link center' href='#'>
                  <span class='category-grid__title'>${data.title}</span>
                  ${data.alarm? `<span class='category-grid__alarm'>${data.alarm}</span>` : ''}
                </a>
              </li>`
            ).join('')}
          </ul>
      </div>
    `
}