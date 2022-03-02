import { BannerItem, SubBannerItem, EventBannerItem } from '../index.js';

const BannerList = (type, bannerList) => {

  return `<ul class="banner-container">
            ${bannerList.reduce((prev, cur, idx) => {
              if (type === 'main') prev += BannerItem(idx + 1, cur);
              else if (type === 'sub') prev += SubBannerItem(idx + 1, cur);
              else prev += EventBannerItem(idx + 1, cur);
              return prev;
            }, '')}
          </ul>`;
};

export default BannerList;
