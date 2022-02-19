import { BannerListItem } from '../index.js';

const MainBannerList = (bannerList) => {
  return `<ul class="banner-container">
            ${bannerList.reduce((prev, cur) => prev += BannerListItem(cur), '')}
          </ul>`;
};

export default MainBannerList;