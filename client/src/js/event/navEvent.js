import { renderPageNav, renderDailySeriesRanking, renderPage, renderContents } from '../../render.js';
import { store } from '../../data/store.js';

const changeSelectedItem = (items, selectedItem) => {
  items.forEach((item) => {
    (item.isSelected || item.name === selectedItem) && (item.isSelected = !item.isSelected);
  });
};

const resetNav = () => {
  !store.navItems.main[0].isSelected && changeSelectedItem(store.navItems.main, store.navItems.main[0].name);
};

const handleNav = (e) => {
  const nav = e.target.parentNode.parentNode;
  const selectedItem = e.target.textContent.trim();
  const category = e.target.dataset.category;

  // 이미 선택된 탭이 또 클릭된 경우
  if (e.target.classList.contains('selected')) return;

  if (nav.classList.contains('page-nav')) {
    changeSelectedItem(store.navItems.page, selectedItem);
    resetNav();
    renderPageNav();
    renderPage(category);
  }

  else if (nav.classList.contains('main-nav')) {
    changeSelectedItem(store.navItems.main, selectedItem);
    renderContents(category);
  }

  else if (nav.classList.contains('contents-nav')) {
    changeSelectedItem(store.navItems.contents, selectedItem);
    renderDailySeriesRanking();
  }
};

const checkTarget = (e) => e.target.tagName === 'LI';

const navCallback = (e) => checkTarget(e) && handleNav(e);

export { navCallback };
