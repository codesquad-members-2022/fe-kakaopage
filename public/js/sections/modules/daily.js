import { $$, getElementByAttrSelector } from '../../util/index.js';
import { SECTION } from '../../data/dataSet.js';
import { selectedTabClassName, clearGrid, selectToons, insertGridItem } from '../../common/index.js'

const accentTodayTab = day => {
  const tab = getElementByAttrSelector('day', day);
  tab.classList.add(selectedTabClassName());
};

const renderTodayToons = day => {
  const dayToons = selectToons('week', day);
  insertGridItem(dayToons, SECTION.DAILY);
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

const moveTabOnClick = () => {
  const section = getElementByAttrSelector('section', SECTION.DAILY);
  section.addEventListener('click', e => {
    accentSelectedTab(e.target);
    changeGridItems(e.target);
  });
};

const initDailySection = () => {
  let day = new Date().getDay();
  renderTodayToons(day);
  accentTodayTab(day);
  moveTabOnClick();
};

export { initDailySection };