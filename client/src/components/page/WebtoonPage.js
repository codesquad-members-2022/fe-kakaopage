import { MainNavItems } from '../../data';
import { MainContents } from '../index.js';

const WebtoonPage = () => {

  const selectedItem = MainNavItems.find((item) => item.isSelected).data;

  return MainContents(selectedItem);
};

export default WebtoonPage;
