import { BannerItem, SubBannerItem, EventBannerItem } from '../index.js';

const BannerList = (list, bannerList) => {

  return `<ul class="banner-container">
            ${bannerList.reduce((prev, cur, idx) => {
              if (list === 'main') prev += BannerItem(idx + 1, cur);
              else if (list === 'sub') prev += SubBannerItem(idx + 1, cur);
              else prev += EventBannerItem(idx + 1, cur);
              return prev;
            }, '')}
          </ul>`;
};

export default BannerList;