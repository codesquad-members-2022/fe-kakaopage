import * as Utils from "./Utils.js";

let IconSrc;

export function setIconSrc(iconSrcData) {
    IconSrc = iconSrcData;
}

export function createTopThumbHTML(comicInfo) {
    const ratingIconClass = isNaN(comicInfo.rating) ? 'comic-thumb__star gone' : 'comic-thumb__star';
    const thumbHTML = /* html */ `
        <li class="comic-list__item center">
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
        </li>`;
    return thumbHTML;
}

export function createTopListHTML(data) {
    let listHTML = data.reduce((listHTML, data) => listHTML + createTopThumbHTML(data), '');
    return listHTML;
}

export function createMenuItemHTML(data) {
    let badgeHTML = '';

    if (data.badge !== null) {
        badgeHTML = /* html */ `
        <div class="count_badge">
            <span class="count_badge__text border__ellipse">${data.badge}</span>
        </div>`;
    }

    return /* html */ `
        <a href="#" class="contents_menu__item center" data-key="${data.key}">
            <span class="contents_menu__title">${data.title}</span>
            ${badgeHTML}
        </a>`;
}

export function createSubBannerHTML() {
    return /* html */ `
        <div class="banner center">
            <img src="resources/images/thumbnail/sub_banner.png" alt="서브배너 이미지" class="sub-banner__image">
            <div class="banner__paging z-index_1">
                <img src="${IconSrc.paging_back}" alt="메인배너 이전버튼" class="banner__paging--icon">
                <img src="${IconSrc.paging_next}" alt="메인배너 다음버튼" class="banner__paging--icon">
            </div>
        </div>
    `;
}

export function createContainerHeaderHTML(title, count = null) {
    const $countSpanHTML = !count ? '' : `<span class="contents-container__comic-count">(${count})</span>`;
    return /* html */ `
        <span class="contents-container__title">${title}</span>
        ${$countSpanHTML}
        <a href="#" class="contents-container__more" alt="더보기 버튼">더보기 ></a>
    `;
}

export function createWeekNavItemHTML(text, dataKey, selected) {
    const selectedClass = !selected ? '' : 'week-nav__item-selected';
    return /* html */ `
        <li class="week-nav__item ${selectedClass}" data-data-key="${dataKey}">${text}</li>
    `;
}

export function createInstallButtonHTML() {
    return /* html */ `
        <button class="btn__app">
            <img src="${IconSrc.button_app}" alt="카카오페이지 앱 다운로드 버튼">
        </button>
    `;
}

function createSliderItemHTML(itemData) {
    const title = itemData.title.split('\n').reduce((title, contents) => title + `<p>${contents}</p>`, '');
    return /* html */ `
        <li class="banner__item">
            <img class="banner__image" src="${itemData.imageSrc}" alt="메인배너 이미지">
            <div class="banner__dimmed z-index_1"></div>
            <div class="banner__contents z-index_1">
                <div class="banner__info">
                    <div class="banner__info--title">
                        ${title}
                    </div>
                    <div class="banner__info--detail center">
                        <img src="${IconSrc.badge_new}" alt="신작 아이콘" class="banner__icon--badge">
                        <div>
                            <img src="${IconSrc.badge_wait}" alt="연재 아이콘">
                            <span>${itemData.category}</span>
                        </div>
                        <img src="${IconSrc.division}" alt="구분선" class="banner__info--separator">
                        <div>
                            <img src="${IconSrc.badge_person}" alt="사람 아이콘">
                            <span>${itemData.reader}만명</span>
                        </div>
                    </div>
                </div>
                <span class="banner__bottom">${itemData.subTitle}</span>
            </div>
        </li>
    `;
}

function createSliderListHTML(sliderData) {
    let firstItem = 0;
    let endItem = sliderData.length - 1;
    const listHTML = sliderData.reduce((listHTML, itemData, index) => {
        const itemHTML = createSliderItemHTML(itemData);

        if (index === firstItem) firstItem = itemHTML;
        if (index === endItem) endItem = itemHTML;

        return listHTML + itemHTML;
    }, '');
    return /* html */ `
        <div class="banner__contents">
            <ul class="banner__list">
                ${endItem}
                ${listHTML}
                ${firstItem}
            </ul>
        </div>
    `;
}

function createSliderOrderHTML() {
    return /* html */ `
        <div class="banner__order z-index_1">
            <span class="banner__order--text"></span>
        </div>
    `
}

function createSliderButtonHTML() {
    return /* html */ `
        <div class="banner__paging z-index_2">
            <img src="${IconSrc.banner_paging_back}" alt="메인배너 이전버튼"
                class="banner__paging--icon banner__paging--left" data-direction="left">
            <img src="${IconSrc.banner_paging_next}" alt="메인배너 다음버튼"
                class="banner__paging--icon banner__paging--right" data-direction="right">
        </div>
    `
}

export function createMainBannerHTML(data) {
    return /* html */ `
        <div class="banner">
            ${createSliderListHTML(data)}
            ${createSliderOrderHTML()}
            ${createSliderButtonHTML()}
        </div>
    `
}