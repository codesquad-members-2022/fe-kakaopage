import {$, $all} from '../utility.js'

function renderThemeMenu(data) {
  const main = $('.main');
  const newDiv = makeThemeLayout(data)
  main.appendChild(newDiv);
}

function makeThemeLayout(data) {
  const newDiv = document.createElement("div");
  const newList = makeThemeList(data);

  newDiv.classList.add('theme')
  newDiv.appendChild(newList);

  return newDiv
}

function makeThemeList(data) {
  const newList = document.createElement("ul");
  newList.classList.add('theme__list');
  makeThemeItems(newList, data);

  return newList;
}

function makeThemeItems(list, data) {
  data.forEach(el => {
    const newList = document.createElement("li");
    newList.classList.add('theme__item');
    
    if (!el.highlight) {
      newList.innerHTML = `
      <a href="#">
        <span class="item__text">${el.text}</span>
      </a>
      `
    } else {
      newList.innerHTML = `
      <a href="#">
        <span class="item__text">${el.text}</span>
        <span class="item__highlight">${el.highlight}</span>
      </a>
      `
    }

    list.appendChild(newList);
  })
}

export {renderThemeMenu}