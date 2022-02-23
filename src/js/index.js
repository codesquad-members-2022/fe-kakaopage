import { jsonData } from './data/toonData.js';
import { $, $$ } from './util/index.js';
import { SECTION } from './data/dataSet.js';
import { gridItem } from './template/gridItem.js';

const DATA_TOONS = JSON.parse(jsonData);

const renderTodayToons = () => {
  let day = new Date().getDay();
  const dayToons = selectToons('week', day);
  accentTodayTab(day);
  insertGridItem(dayToons, SECTION.DAILY);
};

const accentTodayTab = day => {
  $(`[data-day="${day}"]`).classList.add('lnb__item__selected');
};

const clearGrid = () => {
  const grid = $(`[data-section="${SECTION.DAILY}"] .grid`);
  grid.innerHTML = '';
};

const selectToons = (key, lookUpValue) => {
  return Object.keys(DATA_TOONS).reduce((toons, index) => {
    const currentToon = DATA_TOONS[index];
    const value = findValue(currentToon, key);

    const selectUseWeek = key === 'week' && value.includes(lookUpValue);
    const selectUseOther = lookUpValue === value;
    if (selectUseOther || selectUseWeek) {
      toons.push(DATA_TOONS[index]);
    }

    return toons;
  }, []);
};

const findValue = (currentToon, key) => {
  let value = currentToon[key];
  const keys = Object.keys(currentToon);
  if (!keys.includes(key)) {
    value = currentToon['additional'][key];
  }

  return value;
};

const insertGridItem = (toons, section) => {
  const grid = $(`[data-section="${section}"] .grid`);

  toons.forEach(toon => {
    grid.insertAdjacentHTML('beforeend', gridItem(toon));
  });
};

const changeGridItems = e => {
  let toons = [];
  if (e.target.innerText === '완결') {
    toons = selectToons('finish', true);
  } else {
    const day = Number(e.target.dataset.day);
    toons = selectToons('week', day);
  }

  clearGrid();
  insertGridItem(toons, SECTION.DAILY);
};

const accentSelectedTab = e => {
  $$(`[data-section="${SECTION.DAILY}"] .lnb__link`).forEach(element => {
    element.classList.remove('lnb__item__selected');
  });
  e.target.classList.add('lnb__item__selected');
};

const moveTab = () => {
  $(`[data-section="${SECTION.DAILY}"]`).addEventListener('click', e => {
    accentSelectedTab(e);
    changeGridItems(e);
  });
};

renderTodayToons();
moveTab();
