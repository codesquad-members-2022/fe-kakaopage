import { icons } from "../data/icons.js";

export const getBannerTemplate = (parent, bannerData) => {
    return `
        <ul class="${parent}__contents">
            ${getBannerContentTemplate(parent, bannerData)}
        </ul>
    `
}

export const getBannerContentTemplate = (parent, bannerData) => {
    const tagTemplate = getBannerTagTemplate(parent, bannerData.tags);
    return `
        <li class="${parent}__content banner__content" ${bannerData.order ? `data-order=${bannerData.order}` : ''}>
            <a href="#">
              <div class="banner__img-wrapper">
                <img
                  class="banner__img"
                  src=${bannerData.src}
                  alt=${bannerData.title} 포스터
                />
              </div>
              <p class="${parent}__description banner__description center">
                ${bannerData.description}
              </p>
              <div class="${parent}__information banner__information">
                <p class="${parent}__title banner__title">${bannerData.title}</p>
                ${tagTemplate}
              </div>
            </a>
        </li>
    `
}

const getBannerTagTemplate = (parent, tagData) => {
    return  `    
        <div class="${parent}__tags banner__tags vertical-center">
            <span class="banner__status"
                ><img src=${icons[tagData.status]} alt=${tagData.status} 아이콘
            /></span>
            <div class="banner__genre vertical-center">
                ${tagData.free ? `<img src=${icons.free} />` : ``}
                <span>${tagData.type}</span>
            </div>
            <div class="divider divider--thick"></div>
            <div class="banner__views vertical-center">
                ${tagData.views ? `<img src=${icons.whitePerson} />` : ``}
                <span>${tagData.views}</span>
            </div>
        </div>
    `
}
