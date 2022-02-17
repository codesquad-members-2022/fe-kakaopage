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

export function createMultipleContentForms(num) {
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