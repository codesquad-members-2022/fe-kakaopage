import { MainContents } from '../index.js';
import { store } from '../../data/store.js';

const WebtoonPage = () => {

  const selectedItem = store.navItems.main.find((item) => item.isSelected).data;

  return MainContents(selectedItem);
};

export default WebtoonPage;
