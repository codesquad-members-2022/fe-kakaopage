const BannerListItem = ({ webtoonInfo, bannerImage, bannerText, bannerBadge, link }) => {
  return `<li class="banner">
            <a href="${link}">
              <img src="${bannerImage}" alt="${webtoonInfo.title}" />
              <div class="banner-info">
                <h2>${webtoonInfo.title}</h2>
                <div>
                  <span class="badge">${bannerBadge}</span>
                  <span class="genre pseudo-img">웹툰</span>
                  <span class="reader pseudo-img">${webtoonInfo.readers}</span>
                </div>
              </div>
              <p class="banner-text">${bannerText}</p>
            </a>
          </li>`
}

export default BannerListItem;