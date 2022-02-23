import { IconSrc } from "./data/IconSrc.js"
import DailyTop from "./data/DailyTop.json" assert { type: "json" };
import GenreTop from "./data/GenreTop.json" assert { type: "json" };

export function createTopThumbHTML(comicInfo) {
    const ratingIconClass = isNaN(comicInfo.rating) ? 'comic-thumb__star gone' : 'comic-thumb__star';
    const thumbHTML = /* html */
        `<li class="comic-list__item center">
    <div class="comic-thumb center">
        <img src="${comicInfo.imageSrc}" alt="${comicInfo.title} 이미지" class="comic-thumb__image">
        <div class="comic-thumb__bottom center">
            <div>
                <img src="${IconSrc.thumb_start}" alt="별 아이콘" class="${ratingIconClass}">
                <span class="comic-thumb__rating">${comicInfo.rating}</span>
            </div>
            <img src="${IconSrc.thumb_wait}" alt="기다리면 무료 아이콘" class="comic-thumb__wait">
        </div>
    </div>
    <span class="comic-list__title">${comicInfo.title}</span>
    <div class="comic-list__info">
        <img src="${IconSrc.thumb_up}" alt="업데이트 아이콘" class="icon-up">
        <img src="${IconSrc.thumb_reader}" alt="독자 아이콘" class="icon-reader">
        <span class="comic-list__info--reader">${comicInfo.reader}</span>
    </div>
</li>
`
    return thumbHTML;
}

export function createTopListHTML(type){
    let listHTML = '';
    const comicData = type in DailyTop ? DailyTop[type] : GenreTop[type];
    for(const data of comicData){
        listHTML += createTopThumbHTML(data);
    }
    return listHTML;
}

export function createMenuItemHTML(data){
    let badgeHTML = '';

    if (data.badge !== null) {
        badgeHTML = /* html */ `<div class="count_badge">
        <span class="count_badge__text border__ellipse">${data.badge}</span>
    </div>
    `;
    }

    return /* html */ `<a href="#" class="contents_menu__item center" data-key="${data.key}">
    <span class="contents_menu__title">${data.title}</span>
    ${badgeHTML}
</a>`
}