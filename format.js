import { dummy } from "./sources.js"
import { addSelectedTo, addToContents, createContentForms, createContentFormsBigger, createHorizontalContents, createRankingContents, createRankingContentsWithoutNum, pickFromArr, randomView } from "./util.js"

export const createFormatInit = () => {
    const formatInit = `
<div class="wrapper"">
    <header>
        <div class=" header-area">
    <div class="header-group">
        <h2 class="logo">kakaopage</h1>
            <form><input type="text" class="header-input"></form>
            <div class="header-buttons">
                <button class="header-button" id="stage">STAGE</button>
                <button class="header-button">캐시충전</button>
                <button class="header-button">로그인</button>
            </div>
    </div>
</div>
</header>

<div class="main-wrap">
    <nav class="head-nav">
        <ul class="head-nav-ul">
            <li class="head-nav-li">홈</li>
            <li class="head-nav-li">웹툰·⏱</li>
            <li class="head-nav-li">웹소설·⏱</li>
            <li class="head-nav-li">영화</li>
            <li class="head-nav-li">방송</li>
            <li class="head-nav-li">책</li>
        </ul>
    </nav>

    <nav class="genre-nav">
        <ul class="genre-nav-ul">
            <li class="genre-nav-li" id="genre-home">홈</li>
            <li class="genre-nav-li" id="genre-daily">요일연재</li>
            <li class="genre-nav-li" id="genre-webtoon">웹툰</li>
            <li class="genre-nav-li" id="genre-teen">소년</li>
            <li class="genre-nav-li" id="genre-drama">드라마</li>
            <li class="genre-nav-li" id="genre-romance">로맨스</li>
            <li class="genre-nav-li" id="genre-rofan">로판</li>
            <li class="genre-nav-li" id="genre-action">액션무협</li>
            <li class="genre-nav-li" id="genre-BL">BL</li>
        </ul>
    </nav>

    <div class="contents" id="contents">

    </div>
</div>

</div>
<footer>
    <div class="toApp">카카오페이지 앱으로 보기 ></div>
    <div class="footer">
        <div class="footer-fitst-line">
            <div class="desc">회사소개</div>
            <div class="division"></div>
            <div class="desc">이용약관</div>
            <div class="division"></div>
            <div class="desc">개인정보처리방침</div>
            <div class="division"></div>
            <div class="desc">청소년보호정책</div>
            <div class="division"></div>
            <div class="desc">공지사항</div>
        </div>
        <div class="footer-second-line">
            <details>
                <summary>(주)카카오엔터테인먼트 사업자 정보</summary>
                <div class="details-line">
                    <div class="desc">대표자 : 이진수, 김성수</div>
                    <div class="division"></div>
                    <div class="desc">통신판매업신고 : 2018-성남분당B-0004</div>
                </div>
            </details>
            <div class="division">
            </div>
            <div class="desc" style="text-decoration: underline;">사업자 정보 확인</div>
        </div>
        <span class="desc" id="copyright">ⓒ Kakao Entertainment Corp.</span>
    </div>
</footer>`

    return formatInit
}

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
                        ${createContentForms(5)}
                    </div>

                    <div class="contents-flex-box">
                        ${createContentForms(5)}
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
        ${createContentForms(5)}
    </div>

</div>`

    return format5
}

export const createFormat6 = (formatTitle) => {
    const format6 =`
<div class="menu-form">
    <div class="menu-form-title">
        <div class="title-name">${formatTitle}</div>
        <div class="title-more">더보기></div>
    </div>

    <div class="menu-form-ranking">
        ${createRankingContents(3)}
    </div>
</div>`

    return format6
}

export const createFormat7 = () => {
    const format7 =`
<div class="menu-form">
    <div class="menu-form-title">
        <div class="title-name">추천 이벤트</div>
        <div class="title-more">더보기></div>
    </div>

    <div class="slide-banner-middle-wrap">
        <img src=${pickFromArr(dummy.slideBannerMiddleImg)} class="slide-banner-middle">
    </div>
</div>`

    return format7
}

export const createFormat8 = () => {
    const format8 = `
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

                    <div class="contents-flex-box">
                        ${createContentForms(5)}
                    </div>

                    <div class="contents-flex-box">
                        ${createContentForms(5)}
                    </div>

                    <div class="contents-flex-box">
                        ${createContentForms(5)}
                    </div>

                    <div class="contents-flex-box">
                        ${createContentForms(5)}
                    </div>
                </div>`

    return format8
}

export const createFormat9 = (formatTitle) => {
    const format9 =`
            <div class="menu-form">
                <div class="menu-form-title">
                    <div class="title-name">${formatTitle}</div>
                    <div class="title-more">더보기></div>
                </div>

                <div class="menu-form-ranking">
                    ${createHorizontalContents(4)}
                </div>
            </div>`

    return format9
}

export const createFormat10 = (formatTitle) => {
    const format10 =`
<div class="menu-form">
    <div class="menu-form-title">
        <div class="title-name">${formatTitle}</div>
        <div class="title-more">더보기></div>
    </div>

    <div class="contents-flex-box-bigger">
        ${createContentFormsBigger(4)}
    </div>
</div>`

    return format10
}

export const createFormat11 = (formatTitle) => {
    const format11 =`
<div class="menu-form">
    <div class="menu-form-title">
        <div class="title-name">${formatTitle}</div>
        <div class="title-more">더보기></div>
    </div>

    <div class="menu-form-ranking">
        ${createRankingContentsWithoutNum(4)}
    </div>
</div>`

    return format11
}

export const createFormat12 = () => {
    const format12 =`
    <div class="menu-form">
        <div class="menu-form-ranking">
            ${createHorizontalContents(20)}
        </div>
    </div>`

return format12
}