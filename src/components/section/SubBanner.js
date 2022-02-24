import { BannerList } from '../index.js';
import { SubBanners } from '../../data';
import { convertStringToHTML, setContainerWidth } from '../../utils.js';
import { bannerCallback } from '../../js';

const SubBanner = () => {

  const html = convertStringToHTML(
          `<section class="contents sub-banner" data-banner="sub">
            <div class="sub-banner-wrapper">
              ${BannerList('sub', SubBanners)}
            </div>
            <div class="banner-btn-group">
              <button type="button" class="back">이전 배너</button>
              <button type="button" class="next">이후 배너</button>
            </div>
          </section>`);

  html.addEventListener('click', bannerCallback);
  setContainerWidth(html);

  return html;
};

export default SubBanner;