import { renderMainNav } from '../render.js';
import { MainNavItems } from '../data';

const changeSelectedItem = (items, selectedItem) => {
  items.forEach((item) =>
    (item.isSelected || item.name === selectedItem) && (item.isSelected = !item.isSelected));
};

const handleNav = (e) => {
  const nav = e.target.parentNode.parentNode;
  const selectedItem = e.target.textContent;

  if (nav.classList.contains('main-nav')) {
    changeSelectedItem(MainNavItems, selectedItem);
    renderMainNav();
  }

  // if (nav.classList.contains('contents-nav')) changeSelectedItem(ContentsNavItems, selectedItem);
};

const checkTarget = (e) => e.target.tagName === 'LI';

const navCallback = (e) => checkTarget(e) && handleNav(e);

export { navCallback };