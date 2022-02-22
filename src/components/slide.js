import { icons } from "../data/icons.js"

export const getSlideBtnTemplate = () => {
    return `
        <div class="slide__btns">
            <button class="slide__btn slide__btn--prev">
              <img src=${icons.prevBtn} alt="이전 슬라이드 버튼" />
            </button>
            <button class="slide__btn slide__btn--next">
              <img src=${icons.nextBtn} alt="다음 슬라이드 버튼" />
            </button>
        </div>
    `
}

export const getpageNumTemplate = (parent, currNum, totalNum) => {
    return `
        <div class=${parent}__page-nums slide__page-nums>
            <span class="${parent}__page-num--curr">${currNum}</span>
            <span>/</span>
            <span class="${parent}__page-num--total">${totalNum}</span>
        </div>
    `
}