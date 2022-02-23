import { MainNavItems, ContentsComponent } from '../../data';

const WebtoonPage = () => {

  const selectedItem = MainNavItems.find((item) => item.isSelected).data;

  return ContentsComponent[selectedItem]();
};

export default WebtoonPage;