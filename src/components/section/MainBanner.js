import { MainBannerList } from '../index.js';
import { MainBanners } from '../../data';

const MainBanner = () => {
  return `<section class="contents main-banner">
            ${MainBannerList(MainBanners)}
            <span class="banner-count">1 / 3</span>
            <div class="banner-btn-group">
              <button type="button" class="back pseudo-img">이전 배너</button>
              <button type="button" class="next pseudo-img">이후 배너</button>
            </div>
          </section>`
}

export default MainBanner;