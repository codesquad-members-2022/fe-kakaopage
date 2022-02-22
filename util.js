import { dummy } from "./sources.js";

export function pickFromArr (arr) {
    const length = arr.length;
    const pickNum = Math.floor(Math.random() * length);

    return arr[pickNum]
}

export function randomView () {
    return (Math.floor(Math.random() * 901) + 100) / 10
}

export function addToContents(input){
    const contents = document.getElementById('contents');

    contents.innerHTML += input;
}

export function initPage(){
    const contents = document.getElementById('contents');

    contents.innerHTML = '';
}

// 반복되는 컴포넌트들을 생성하는 함수들
export function createContentForms(num) {
    let res = '';

    for(let i = 0; i < num; i++){
        res += `
        <div class="content-form">
            <div class="content-form-img-wrap">
                <img src=${pickFromArr(dummy.contentFormImg)} class="content-form-img">
                <div class="content-form-img-info">
                    <div class="content-score">1위</div>
                    <div class="content-score-icon">🕔</div>
                </div>
            </div>
        
            <div class="content-form-desc">
                <div class="content-name">${pickFromArr(dummy.contentName)}</div>
                <div class="content-status">
                    <img src="./img/img6.png" class="img-view">
                    <div class="desc">${randomView()}만명</div>
                </div>
            </div>
        </div>`
    }

    return res;
}

export function createRankingContents(num){
    let res = '';
    let rank = 1;

    for(let i = 0; i < num; i++){
        res += `
    <div class="ranking-content">
        <div class="ranking-num">${rank}</div>
        <div class="ranking-img-wrap">
            <img src=${pickFromArr(dummy.rankingImg)} class="ranking-img">
        </div>
        <div class="ranking-desc">
            <div class="ranking-desc-title">${pickFromArr(dummy.contentName)}</div>
            <div class="ranking-desc-info">
                <img src="./img/img6.png" class="img-view">
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

    return res
}

export function createRankingContentsWithoutNum(num){
    let res = '';

    for(let i = 0; i < num; i++){
        res += `
    <div class="ranking-content">
        <div class="ranking-img-wrap">
            <img src=${pickFromArr(dummy.rankingImg)} class="ranking-img">
        </div>
        <div class="ranking-desc">
            <div class="ranking-desc-title">${pickFromArr(dummy.contentName)}</div>
            <div class="ranking-desc-info">
                <img src="./img/img6.png" class="img-view">
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

    return res
}

export function createHorizontalContents(num){
    let res = '';

    for(let i = 0; i < num; i++){
        res += `
    <div class="ranking-content">
        <div class="horizontal-img-wrap">
            <img src=${pickFromArr(dummy.horizontalImg)} class="horizontal-img">
        </div>
        <div class="ranking-desc">
            <div class="ranking-desc-title">${pickFromArr(dummy.contentName)}</div>
            <div class="desc" style="margin-top: 10px">${pickFromArr(dummy.contentDesc)}</div>
            <div class="ranking-desc-info">
                <img src="./img/img6.png" class="img-view">
                <div class="desc">${randomView()}만명</div>
                <div class="division"></div>
                <div class="desc">${pickFromArr(dummy.contentWriter)}</div>
            </div>
        </div>
    </div>`
    }

    return res
}

export function createContentFormsBigger(num){
    let res = '';

    for(let i = 0; i < num; i++){
        res += `
    <div class="content-form-bigger">
        <div class="content-vertical-img-wrap">
            <img src=${pickFromArr(dummy.contentFormBiggerImg)} class="content-vertical-img">
        </div>

        <div class="content-form-desc">
            <div class="content-name">${pickFromArr(dummy.contentName)}</div>
            <div class="content-status">
                <img src="./img/img6.png" class="img-view">
                <div class="desc">${randomView()}만명</div>
            </div>
        </div>
    </div>`
    }

    return res
}
//

export function addClickEventToElement(elementName, func){
    const element = document.querySelector(elementName);

    element.addEventListener("click", func)
}

export function selectedInit(target){
    target.parentNode.childNodes.forEach(v => {
        if(v.tagName === "LI") v.classList.remove('selected')
    })
}

export function addSelectedTo(element){
    const elements = document.querySelector(element)

    elements.addEventListener('click', e => {
        selectedInit(e.target)
        if(e.target.tagName === "LI"){
            e.target.classList.add('selected')
            resetFlexbox(e.target);
        }
    })
}

export function combineFormats(arr){
    const res = arr.reduce( (pre, cur) => pre + cur )

    return res;
}

export function addSelectedToday(){
    const days = document.querySelectorAll('.day')

    const today = new Date().getDay()-1;

    days[today].classList.add('selected')
}

export function resetFlexbox(target){
    if(target.classList[0] === 'day'){
        const flexBox = document.getElementById('flex-box')
    
        flexBox.innerHTML = '';
        flexBox.innerHTML += `${createContentForms(10)}`;
    }
}