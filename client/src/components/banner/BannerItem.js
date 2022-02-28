import { convertReader } from '../../utils.js';

const BannerItem = (idx, { webtoonInfo, bannerImage, bannerText, bannerBadge, link }) => {
  return `<li class="banner" data-count="${idx}">
            <a href="${link}">
              <img src="${bannerImage}" alt="${webtoonInfo.title}" />
              <div class="banner-info">
                <h2 class="title">${webtoonInfo.title}</h2>
                <div>
                  <span class="badge">${bannerBadge}</span>
                  <span class="genre">웹툰</span>
                  <span class="reader">${convertReader(webtoonInfo.readers)}</span>
                </div>
              </div>
              <p class="banner-text">${bannerText}</p>
            </a>
          </li>`
}

export default BannerItem;