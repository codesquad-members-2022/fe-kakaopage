import { MainBannerItem, SubBannerItem } from '../index.js';

const BannerList = (list, bannerList) => {
  return `<ul class="banner-container">
            ${bannerList.reduce((prev, cur) => 
                prev += list === 'main' ? MainBannerItem(cur) : SubBannerItem(cur)
            , '')}
          </ul>`;
};

export default BannerList;