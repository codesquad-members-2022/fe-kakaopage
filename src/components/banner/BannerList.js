import { BannerItem, SubBannerItem } from '../index.js';

const BannerList = (list, bannerList) => {
  return `<ul class="banner-container">
            ${bannerList.reduce((prev, cur) => {
              return prev += list === 'main' ?
                BannerItem(cur) :
                SubBannerItem(cur);
            }, '')}
          </ul>`;
};

export default BannerList;