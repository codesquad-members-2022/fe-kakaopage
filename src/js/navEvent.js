import { renderPageNav, renderMainNav, renderDailySeriesRanking } from '../render.js';
import { MainNavItems, ContentsNavItems, PageNavItems } from '../data';

const changeSelectedItem = (items, selectedItem) => {
  items.forEach((item) => {
    (item.isSelected || item.name === selectedItem) && (item.isSelected = !item.isSelected)
  })
};

const handleNav = (e) => {
  const nav = e.target.parentNode.parentNode;
  const selectedItem = e.target.textContent;

  // 이미 선택된 탭이 또 클릭된 경우
  if (e.target.classList.contains('selected')) return;

  if (nav.classList.contains('page-nav')) {
    changeSelectedItem(PageNavItems, selectedItem);
    renderPageNav();
  }

  else if (nav.classList.contains('main-nav')) {
    changeSelectedItem(MainNavItems, selectedItem);
    renderMainNav();
  }

  else if (nav.classList.contains('contents-nav')) {
    changeSelectedItem(ContentsNavItems, selectedItem);
    renderDailySeriesRanking();
  }
};

const checkTarget = (e) => e.target.tagName === 'LI';

const navCallback = (e) => checkTarget(e) && handleNav(e);

export { navCallback };