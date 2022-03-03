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
  return data.reduce((acc, cur) => {
    const checkHighlight = cur.highlight ? `<span class="item__highlight">${cur.highlight}</span>` : '';
    return acc + makeThemeItem(cur, checkHighlight)
  }, '');
}

function makeThemeItem(data, checkHighlight) {
  return `
    <li class="theme__item">
      <a href="#">
        <span class="item__text">${data.text}</span>
        ${checkHighlight}
      </a>
    </li>
  `
}

export {renderThemeMenu}