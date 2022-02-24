import { BannerItem, SubBannerItem, EventBannerItem } from '../index.js';

const BannerList = (list, bannerList) => {

  return `<ul class="banner-container">
            ${bannerList.reduce((prev, cur) => {
              if (list === 'main') prev += BannerItem(cur);
              else if (list === 'sub') prev += SubBannerItem(cur);
              else prev += EventBannerItem(cur);
              return prev;
            }, '')}
          </ul>`;
};

export default BannerList;