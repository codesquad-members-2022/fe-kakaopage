import { dummy } from "./sources.js";
import { pickFromArr, randomView } from "./util.js";


// 반복되는 컴포넌트들을 생성하는 함수들
export function createContentForms(num) {
    let contentForm = '';

    for(let i = 0; i < num; i++){
        contentForm += `
        <div class="content-wrap">
            <div class="content-wrap-img-wrap">
                <img src=${pickFromArr(dummy.contentFormImg)} class="content-wrap-img">
                <div class="content-wrap-img-info">
                    <div class="content-score">1위</div>
                    <div class="content-score-icon">🕔</div>
                </div>
            </div>
        
            <div class="content-wrap-desc">
                <div class="content-name">${pickFromArr(dummy.contentName)}</div>
                <div class="content-status">
                    <img src="https://user-images.githubusercontent.com/95198109/155249854-604a4c27-6963-4f41-9523-e5529a8dda53.png" class="img-view">
                    <div class="desc">${randomView()}만명</div>
                </div>
            </div>
        </div>`
    }

    return contentForm;
}

export function createRankingContents(num){
    let rankingContent = '';
    let rank = 1;

    for(let i = 0; i < num; i++){
        rankingContent += `
    <div class="ranking-content">
        <div class="ranking-num">${rank}</div>
        <div class="ranking-img-wrap">
            <img src=${pickFromArr(dummy.rankingImg)} class="ranking-img">
        </div>
        <div class="ranking-desc">
            <div class="ranking-desc-title">${pickFromArr(dummy.contentName)}</div>
            <div class="ranking-desc-info">
                <img src="https://user-images.githubusercontent.com/95198109/155249854-604a4c27-6963-4f41-9523-e5529a8dda53.png" class="img-view">
                <div class="desc">${randomView()}만명</div>
                <div class="division"></div>
                <div class="desc">기다무웹툰</div>
                <div class="division"></div>
                <div class="desc">${pickFromArr(dummy.contentGenre)}</div>
                <div class="division"></div>
                <div class="desc">${pickFromArr(dummy.contentWriter)}</div>
            </div>
            <div class="ranking-desc-day">${pickFromArr(dummy.contentDays)} 연재</div>
        </div>
    </div>`

    rank++
    }

    return rankingContent
}

export function createRankingContentsWithoutNum(num){
    let rankingContentWithoutNum = '';

    for(let i = 0; i < num; i++){
        rankingContentWithoutNum += `
    <div class="ranking-content">
        <div class="ranking-img-wrap">
            <img src=${pickFromArr(dummy.rankingImg)} class="ranking-img">
        </div>
        <div class="ranking-desc">
            <div class="ranking-desc-title">${pickFromArr(dummy.contentName)}</div>
            <div class="ranking-desc-info">
                <img src="https://user-images.githubusercontent.com/95198109/155249854-604a4c27-6963-4f41-9523-e5529a8dda53.png" class="img-view">
                <div class="desc">${randomView()}만명</div>
                <div class="division"></div>
                <div class="desc">기다무웹툰</div>
                <div class="division"></div>
                <div class="desc">${pickFromArr(dummy.contentGenre)}</div>
                <div class="division"></div>
                <div class="desc">${pickFromArr(dummy.contentWriter)}</div>
            </div>
            <div class="ranking-desc-day">${pickFromArr(dummy.contentDays)} 연재</div>
        </div>
    </div>`
    }

    return rankingContentWithoutNum
}

export function createHorizontalContents(num){
    let horizontalContent = '';

    for(let i = 0; i < num; i++){
        horizontalContent += `
    <div class="ranking-content">
        <div class="horizontal-img-wrap">
            <img src=${pickFromArr(dummy.horizontalImg)} class="horizontal-img">
        </div>
        <div class="ranking-desc">
            <div class="ranking-desc-title">${pickFromArr(dummy.contentName)}</div>
            <div class="desc" style="margin-top: 10px">${pickFromArr(dummy.contentDesc)}</div>
            <div class="ranking-desc-info">
                <img src="https://user-images.githubusercontent.com/95198109/155249854-604a4c27-6963-4f41-9523-e5529a8dda53.png" class="img-view">
                <div class="desc">${randomView()}만명</div>
                <div class="division"></div>
                <div class="desc">${pickFromArr(dummy.contentWriter)}</div>
            </div>
        </div>
    </div>`
    }

    return horizontalContent
}

export function createContentFormsBigger(num){
    let contentFormBigger = '';

    for(let i = 0; i < num; i++){
        contentFormBigger += `
    <div class="content-wrap-bigger">
        <div class="content-vertical-img-wrap">
            <img src=${pickFromArr(dummy.contentFormBiggerImg)} class="content-vertical-img">
        </div>

        <div class="content-wrap-desc">
            <div class="content-name">${pickFromArr(dummy.contentName)}</div>
            <div class="content-status">
                <img src="https://user-images.githubusercontent.com/95198109/155249854-604a4c27-6963-4f41-9523-e5529a8dda53.png" class="img-view">
                <div class="desc">${randomView()}만명</div>
            </div>
        </div>
    </div>`
    }

    return contentFormBigger
}

export function createBannerMain(imgArr){
    let format = '';

    for(let i = 0; i < imgArr.length; i++){
        format += `
            <div class="img-with-line">
                <img class="img-with" src=${imgArr[i]}>
                <div class="line-with">${pickFromArr(dummy.contentDesc)}</div>
            </div>`
    }

    return format
}

export function createBannerAd(imgArr){
    let format = '';

    for(let i = 0; i < imgArr.length; i++){
        format += `
        <div class="banner-ad-img-wrap ">
            <img src=${imgArr[i]} class="banner-ad-wrap-img">
        </div>`
    }

    return format
}