import {getData} from '../utility.js'

const url = 'http://localhost:3000/theme-Menu';

function renderThemeMenu(tab) {
  return getData(url)
    .then(json => json[tab])
    .then(data => themeMenuTemplete(data))
}

function themeMenuTemplete(data) {
  return `
    <div class="theme">
      <ul class="theme__list">
        ${makeThemeItems(data)}
      </ul>
    </div>
  `;
}

function makeThemeItems(data) {
  let result = '';
  data.forEach(el => {
    const checkHighlight = el.highlight ? `<span class="item__highlight">${el.highlight}</span>` : '';
    result += `
      <li class="theme__item">
        <a href="#">
          <span class="item__text">${el.text}</span>
          ${checkHighlight}
        </a>
      </li>
    `
  });
  return result
}

export {renderThemeMenu}