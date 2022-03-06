import { icons } from "../../assets/icons.js";

export const getBannerContentTemplate = (bannerData, parentName) => {
    const tagTemplate = getBannerTagTemplate(bannerData.tags, parentName);
    return `
        <li class='${parentName}__content banner__content' ${bannerData.index ? `data-index=${bannerData.index}` : ''}>
            <a href='#'>
              <div class='banner__img-wrapper'>
                <img
                  class='banner__img'
                  src=${bannerData.src}
                  alt=${bannerData.title} 포스터
                />
              </div>
              <p class='${parentName}__description banner__description center'>
                ${bannerData.description}
              </p>
              <div class='${parentName}__information banner__information'>
                <p class='${parentName}__title banner__title'>${bannerData.title}</p>
                ${tagTemplate}
              </div>
            </a>
        </li>
    `
}

const getBannerTagTemplate = (tagData, parentName) => {
    return  `    
        <div class='${parentName}__tags banner__tags vertical-center'>
            <span class='banner__status'
                ><img src=${icons[tagData.status]} alt=${tagData.status} 아이콘
            /></span>
            <div class='banner__genre vertical-center'>
                ${tagData.free ? `<img src=${icons.free} />` : ``}
                <span>${tagData.type}</span>
            </div>
            <div class='divider divider--thick'></div>
            <div class='banner__views vertical-center'>
                ${tagData.views ? `<img src=${icons.whitePerson} />` : ``}
                <span>${tagData.views}</span>
            </div>
        </div>
    `
}
