import { jsonData } from './data/toonData.js';
import { $, $$, getElementByAttrSelector, getElementsByAttrSelector } from './util/index.js';
import { SECTION } from './data/dataSet.js';
import { gridItem } from './template/gridItem.js';

/* 전역 변수를 피하기 위해 함수로 선언 */
const selectedTabClassName = () => {
  return 'lnb__item__selected';
};

const getGridElement = section => {
  const element = getElementByAttrSelector('section', section);

  return $('.grid', element);
};

const accentTodayTab = day => {
  const tab = getElementByAttrSelector('day', day);
  tab.classList.add(selectedTabClassName());
};

const renderTodayToons = () => {
  let day = new Date().getDay();
  const dayToons = selectToons('week', day);
  accentTodayTab(day);
  insertGridItem(dayToons, SECTION.DAILY);
};

const clearGrid = (section) => {
  const grid = getGridElement(section);
  grid.innerHTML = '';
};

const selectToons = (key, lookUpValue) => {
  const DATA_TOONS = JSON.parse(jsonData);

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
  const grid = getGridElement(section);

  toons.forEach(toon => {
    grid.insertAdjacentHTML('beforeend', gridItem(toon));
  });
};

const changeGridItems = target => {
  let toons = [];
  
  if (target.matches('[data-day]')) {
    const day = Number(target.dataset.day);
    toons = selectToons('week', day);
  } else {
    toons = selectToons('finish', true);
  }

  clearGrid(SECTION.DAILY);
  insertGridItem(toons, SECTION.DAILY);
};

const accentSelectedTab = target => {
  const section = getElementByAttrSelector('section', SECTION.DAILY);

  $$('.lnb__link', section).forEach(element => {
    element.classList.remove(selectedTabClassName());
  });
  target.classList.add(selectedTabClassName());
};

const moveDailySectionTab = () => {
  const section = getElementByAttrSelector('section', SECTION.DAILY);
  section.addEventListener('click', e => {
    accentSelectedTab(e.target);
    changeGridItems(e.target);
  });
};

const renderGenreSections = () => {
  const genreSections = getElementsByAttrSelector(SECTION.GENRE);
  genreSections.forEach(section => {
    const genre = section.dataset.genre;
    const toons = selectToons('genre', genre);
    insertGridItem(toons, genre);
  });
};

export { renderTodayToons, moveDailySectionTab, renderGenreSections };
