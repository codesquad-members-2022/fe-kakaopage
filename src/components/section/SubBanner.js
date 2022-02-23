import { BannerList } from '../index.js';
import { SubBanners } from '../../data';

const SubBanner = () => {
  return `<section class="contents sub-banner">
            <div class="sub-banner-wrapper">
              ${BannerList('sub', SubBanners)}
            </div>
            <div class="banner-btn-group">
              <button type="button" class="back">이전 배너</button>
              <button type="button" class="next">이후 배너</button>
            </div>
          </section>`
}

export default SubBanner;