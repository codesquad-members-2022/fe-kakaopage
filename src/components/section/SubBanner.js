import { BannerList } from '../index.js';
import { SubBanners } from '../../data';
import { convertStringToHTML, setContainerWidth } from '../../utils.js';

const SubBanner = () => {

  const html = convertStringToHTML(
          `<section class="contents sub-banner">
            <div class="sub-banner-wrapper">
              ${BannerList('sub', SubBanners)}
            </div>
            <div class="banner-btn-group">
              <button type="button" class="back">이전 배너</button>
              <button type="button" class="next">이후 배너</button>
            </div>
          </section>`);

  setContainerWidth(html);

  return html;
};

export default SubBanner;