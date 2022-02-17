import { dummy } from "./sources.js"
import { addToContents, createMultipleContentForms, pickFromArr, randomView } from "./util.js"

export const createFormat0 = () => {
    const format0 = `
<div class="slide-banner">
    <div class="img-with-line">
        <img class="img-with" src=${pickFromArr(dummy.slideBannerMainImg)}>
        <div class="line-with">${pickFromArr(dummy.contentDesc)}</div>
    </div>
</div>`

    return format0
}

export const createFormat1A = () => {
    const format1A = `
<div class="recommendation">
    <button class="rec-btn" style="border-radius: 8px 0 0 0">오늘 UP</button>
    <button class="rec-btn">오늘 신작</button>
    <button class="rec-btn" style="border-radius: 0 8px 0 0">오리지널</button>
    <button class="rec-btn" style="border-radius: 0 0 0 8px">완결까지 정주행</button>
    <button class="rec-btn">독립운동가 웹툰</button>
    <button class="rec-btn" style="border-radius: 0 0 8px 0">오늘 랭킹</button>
</div>`

    return format1A
}

export const createFormat1B = (a, b, c) => {
    const format1B = `
<div class="recommendation">
    <button class="rec-btn" style="border-radius: 8px 0 0 8px">${a}</button>
    <button class="rec-btn">${b}</button>
    <button class="rec-btn" style="border-radius: 0 8px 8px 0">${c}</button>
</div>`

    return format1B
}

export const createFormat2 = () => {
    const format2 = `
<div class="slide-event">
    <button class="slide-button"><</button>
    <div class="slide-banner-wrap">
        <img src=${pickFromArr(dummy.slideBannerEventImg)} class="slide-banner-img">
    </div>
    <button class="slide-button">></button>
</div>`

    return format2
}

export const createFormat3 = () => {
    const format3 = `
                <div class="menu-form">
                    <div class="menu-form-title">
                        <div class="title-name">요일 연재 TOP</div>
                        <div class="title-more">더보기></div>
                    </div>

                    <ul class="nav-day" id="nav-day">
                        <li class="day">월</li>
                        <li class="day">화</li>
                        <li class="day">수</li>
                        <li class="day">목</li>
                        <li class="day">금</li>
                        <li class="day">토</li>
                        <li class="day">일</li>
                        <li class="day">완결</li>
                    </ul>

                    <div class="contents-flex-box">
                        ${createMultipleContentForms(5)}
                    </div>

                    <div class="contents-flex-box">
                        ${createMultipleContentForms(5)}
                    </div>
                </div>`
    return format3
}

export const createFormat4 = () => {
    const format4 = `
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

    return format4
}

export const createFormat5 = (formatTitle) => {
    const format5 =`
    <div class="menu-form">
    <div class="menu-form-title">
        <div class="title-name">${formatTitle}</div>
        <div class="title-more">더보기></div>
    </div>

    <div class="contents-flex-box">
        ${createMultipleContentForms(5)}
    </div>

</div>`

    return format5
}

// export const createFormat5 = () => {
//     const format5 =``

//     return format5
// }
// export const createFormat5 = () => {
//     const format5 =``

//     return format5
// }
// export const createFormat5 = () => {
//     const format5 =``

//     return format5
// }
// export const createFormat5 = () => {
//     const format5 =``

//     return format5
// }
// export const createFormat5 = () => {
//     const format5 =``

//     return format5
// }