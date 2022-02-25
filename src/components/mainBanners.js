import { getSildeButtonTemp } from "./sildeButton.js";

const checkMainBannerTags = (dataEl) => {
    const status = dataEl.status ? `<span class="main-banner__status banner__status">${dataEl.status}</span>` : '';
    const category = dataEl.category ? `<span class="main-banner__category banner__category">${dataEl.category}</span>` : '';
    const readerNum = dataEl.readerNum ? `<span class="main-banner__reader banner__reader">${dataEl.readerNum}</span>` : '';
    return status + category + readerNum;
}

const getMainBannerTemp = (dataEl, className) => {
    return (
        `<li class="main-banner slide ${className}">
            <a href="${dataEl.link}" class="main-banners__link">
                <div class="main-banner__img-wrap">
                    <img src="${dataEl.imgUrl}" alt="${dataEl.title} 포스터">
                </div>
                <div class="baner__info">
                    <p class="main-banner__title banner__title">${dataEl.title}</p>
                    <div class="main-banner__tags banner__tags">
                        ${checkMainBannerTags(dataEl)}
                    </div>
                </div>
                <p class="banner__description">${dataEl.description}</p>
            </a>
        </li>`
    );
}

const getMainBannersTemp = (data) => {
    let mainBannerList =
    getMainBannerTemp(data[data.length - 1], 'prev-slide')
    + getMainBannerTemp(data[0], 'current-slide')
    + getMainBannerTemp(data[1], 'next-slide');
    return (
        `<div class="main-banners slider">
            <ul class="main-banners__contents slide-wrap">
                ${mainBannerList}
            </ul>
            ${getSildeButtonTemp('main-banners__slide-button')}
            <div class="slide-paging-number">
                <span class="slide-paging-number__current">1</span>
                <span class="slide-paging-number__all">${data.length}</span>
            </div>
        </div>`
    );
}

export { getMainBannerTemp, getMainBannersTemp };