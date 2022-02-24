import { createContentForms, createContentFormsBigger, createHorizontalContents, createRankingContents, createRankingContentsWithoutNum } from "./loop.js"
import { dummy } from "./sources.js"
import { pickFromArr } from "./util.js"

export const createFormatBannerMain = () => {
    const formatBannerMain = `
<div class="banner-main">
    <div class="img-with-line">
        <img class="img-with" src=${pickFromArr(dummy.slideBannerMainImg)}>
        <div class="line-with">${pickFromArr(dummy.contentDesc)}</div>
    </div>
</div>`

    return formatBannerMain
}

export const createFormatSummaryA = () => {
    const FormatSummaryA = `
<div class="summary">
    <button class="summary-btn" style="border-radius: 8px 0 0 0">오늘 UP</button>
    <button class="summary-btn">오늘 신작</button>
    <button class="summary-btn" style="border-radius: 0 8px 0 0">오리지널</button>
    <button class="summary-btn" style="border-radius: 0 0 0 8px">완결까지 정주행</button>
    <button class="summary-btn">독립운동가 웹툰</button>
    <button class="summary-btn" style="border-radius: 0 0 8px 0">오늘 랭킹</button>
</div>`

    return FormatSummaryA
}

export const createFormatSummaryB= (a, b, c) => {
    const FormatSummaryB = `
<div class="summary">
    <button class="summary-btn" style="border-radius: 8px 0 0 8px">${a}</button>
    <button class="summary-btn">${b}</button>
    <button class="summary-btn" style="border-radius: 0 8px 8px 0">${c}</button>
</div>`

    return FormatSummaryB
}

export const createFormatBannerAd = () => {
    const FormatBannerAd = `
<div class="banner-ad">
    <button class="banner-ad-button"><</button>
    <div class="banner-ad-wrap ">
        <img src=${pickFromArr(dummy.slideBannerEventImg)} class="banner-ad-wrap-img">
    </div>
    <button class="banner-ad-button">></button>
</div>`

    return FormatBannerAd
}

export const createFormatDailyTop = () => {
    const FormatDailyTop = `
                <div class="menu-form">
                    <div class="menu-form-title">
                        <div class="title-name">요일 연재 TOP</div>
                        <div class="title-more">더보기></div>
                    </div>

                    <ul class="nav-day" id="nav-day">
                        <li class="day" data-day="Mon">월</li>
                        <li class="day" data-day="Tue">화</li>
                        <li class="day" data-day="Wed">수</li>
                        <li class="day" data-day="Thu">목</li>
                        <li class="day" data-day="Fri">금</li>
                        <li class="day" data-day="Sat">토</li>
                        <li class="day" data-day="Son">일</li>
                        <li class="day" data-day="Fin">완결</li>
                    </ul>

                    <div class="contents-box" id="contents-box">
                        ${createContentForms(10)}
                    </div>

                </div>`

    return FormatDailyTop
}

export const createFormatImgWithLine = () => {
    const formatImgWithLine = `
<div class="menu-form">
    <div class="menu-form-title">
        <div class="title-name">기대신작 TOP</div>
        <div class="title-more">더보기></div>
    </div>

    <div class="img-with-line-wrap">
        <div class="img-with-line">
            <img src=${pickFromArr(dummy.lineWithImgSmall)} class="img-with" id="img-with-small">
            <div class="line-with" id="line-with-small">${pickFromArr(dummy.contentDesc)}</div>
        </div>
    </div>

</div>`

    return formatImgWithLine
}

export const createFormatContentsBox = (formatTitle) => {
    const formatContentsBox =`
<div class="menu-form">
    <div class="menu-form-title">
        <div class="title-name">${formatTitle}</div>
        <div class="title-more">더보기></div>
    </div>

    <div class="contents-box">
        ${createContentForms(5)}
    </div>

</div>`

    return formatContentsBox
}

export const createFormatRanking = (formatTitle) => {
    const formatRanking =`
<div class="menu-form">
    <div class="menu-form-title">
        <div class="title-name">${formatTitle}</div>
        <div class="title-more">더보기></div>
    </div>

    <div class="menu-form-ranking">
        ${createRankingContents(3)}
    </div>
</div>`

    return formatRanking
}

export const createFormatBannerSub = () => {
    const formatBannerSub =`
<div class="menu-form">
    <div class="menu-form-title">
        <div class="title-name">추천 이벤트</div>
        <div class="title-more">더보기></div>
    </div>

    <div class="banner-sub-wrap">
        <img src=${pickFromArr(dummy.slideBannerMiddleImg)} class="banner-sub">
    </div>
</div>`

    return formatBannerSub
}

export const createFormatDailyWebtoon = () => {
    const formatDailyWebtoon = `
                <div class="menu-form">
                    <ul class="nav-day" id="nav-day" style="margin-top:0">
                        <li class="day">월</li>
                        <li class="day">화</li>
                        <li class="day">수</li>
                        <li class="day">목</li>
                        <li class="day">금</li>
                        <li class="day">토</li>
                        <li class="day">일</li>
                        <li class="day">완결</li>
                    </ul>

                    <div class="category-nav">
                        <div class="category-nav-items">
                            <div>전체</div>
                            <div class="division"></div>
                            <div>웹툰</div>
                            <div class="division"></div>
                            <div>🕓웹툰</div>
                        </div>
                        <div class="category-nav-sum">전체 ( )</div>
                    </div>

                    <div class="contents-box" id="contents-box">
                        ${createContentForms(10)}
                    </div>

                </div>`

    return formatDailyWebtoon
}

export const createFormatHorizontalContents = (formatTitle) => {
    const formatHorizontalContents =`
            <div class="menu-form">
                <div class="menu-form-title">
                    <div class="title-name">${formatTitle}</div>
                    <div class="title-more">더보기></div>
                </div>

                <div class="menu-form-ranking">
                    ${createHorizontalContents(4)}
                </div>
            </div>`

    return formatHorizontalContents
}

export const createFormatContentsBoxBigger = (formatTitle) => {
    const formatContentsBoxBigger =`
<div class="menu-form">
    <div class="menu-form-title">
        <div class="title-name">${formatTitle}</div>
        <div class="title-more">더보기></div>
    </div>

    <div class="contents-box-bigger">
        ${createContentFormsBigger(4)}
    </div>
</div>`

    return formatContentsBoxBigger
}

export const createFormatTotal = (formatTitle) => {
    const formatTotal =`
<div class="menu-form">
    <div class="menu-form-title">
        <div class="title-name">${formatTitle}</div>
        <div class="title-more">더보기></div>
    </div>

    <div class="menu-form-ranking">
        ${createRankingContentsWithoutNum(4)}
    </div>
</div>`

    return formatTotal
}

export const createFormatHotizontalList = () => {
    const formatHotizontalList =`
    <div class="menu-form">
        <div class="menu-form-ranking">
            ${createHorizontalContents(20)}
        </div>
    </div>`

return formatHotizontalList
}

export const createFormatNotYet = () => {
    const formatNotYet = `
    <div class="banner-main">
        <div class="img-with-line">
            <img class="img-with" src="https://pbs.twimg.com/media/ELhHQZmUYAEk2AI?format=jpg&name=900x900">
        </div>
    </div>`

    return formatNotYet
}
