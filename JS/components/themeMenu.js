import {$} from '../utility.js'

const renderThemeMenu = (data) => {
  const themeMenu = `
    <div class="theme">
      <ul class="theme__list">
        ${makeThemeItems(data)}
      </ul>
    <div>
  `;

  $('.main').insertAdjacentHTML('beforeend', themeMenu);
}

const makeThemeItems = (data) => {
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