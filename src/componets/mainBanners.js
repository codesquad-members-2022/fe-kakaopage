export { getSildeButton } from "./sildeButton.js";

const getMainBannerTemp = (dataEl) => {
  return (
    `<li class="main-banner">
        <a href="${dataEl.link}" class="main-banners__link">
            <div class="main-banner__img-wrap">
                <img src="${dataEl.imgUrl}" alt="${dataEl.title} 포스터">
            </div>
            <div class="baner__info">
                <p class="main-banner__title banner__title">${dataEl.title}</p>
                <div class="main-banner__tags banner__tags">
                    <span class="main-banner__status banner__status">${dataEl.status}</span>
                    <span class="main-banner__category banner__category"><span class="main-banner__category-name">${dataEl.category}</span></span>
                    <span class="main-banner__reader banner__reader"><span class="reader-number">${dataEl.readerNum}</span>
                </div>
            </div>
            <p class="banner__description">${dataEl.description}</p>
        </a>
      </li>`
  );
}

const getMainBannersTemp = (data, length) => {
    let mainBannerList = '';
    for (let i = 0; i < length; i++) {
        mainBannerList += `${getMainBannerTemp(data[i])}\n`
    }
    return (
        `<div class="main-banners slider">
            <ul class="main-banners__contents slide-wrap">
                ${mainBannerList}
            </ul>
            ${getSildeButton()}
            <div class="slide-paging-number">
                <span class="slide-paging-number__current">1</span>
                <span class="slide-paging-number__all">3</span>
            </div>
        </div>`
    );
}

export { getMainBannersTemp };