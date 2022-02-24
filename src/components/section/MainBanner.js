import { BannerList } from '../index.js';
import { MainBanners } from '../../data';
import { mainBannerCallback } from '../../js';
import { convertStringToHTML, setContainerWidth } from '../../utils.js';

const MainBanner = () => {

  const html = convertStringToHTML(
          `<section class="contents main-banner">
            ${BannerList('main', MainBanners)}
            <span class="banner-count">1 / 3</span>
            <div class="banner-btn-group">
              <button type="button" class="back">이전 배너</button>
              <button type="button" class="next">이후 배너</button>
            </div>
          </section>`);

  html.addEventListener('click', mainBannerCallback);
  setContainerWidth(html);

  return html;

};

export default MainBanner;