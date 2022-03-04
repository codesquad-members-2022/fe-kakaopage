import { BannerItem, SubBannerItem, EventBannerItem } from '../index.js';

const BannerList = (bannerType, bannerList) => {

  return `<ul class="banner-container">
            ${bannerList.reduce((prev, cur, idx) => {
              if (bannerType === 'main') prev += BannerItem(idx + 1, cur);
              else if (bannerType === 'sub') prev += SubBannerItem(idx + 1, cur);
              else prev += EventBannerItem(idx + 1, cur);
              return prev;
            }, '')}
          </ul>`;
};

export default BannerList;
