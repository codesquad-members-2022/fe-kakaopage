import { SubBannerItem } from '../index.js';

const SubBannerList = (bannerList) => {
  return `<ul class="banner-container">
            ${bannerList.reduce((prev, cur) => prev += SubBannerItem(cur), '')}
          </ul>`;
};

export default SubBannerList;