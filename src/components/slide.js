import { icons } from '../data/icons.js'

export const getSlideBtnTemplate = () => {
    return `
        <div class='slide__btns'>
            <button class='slide__btn slide__btn--prev'>
              <img src=${icons.prevBtn} alt='이전 슬라이드 버튼' />
            </button>
            <button class='slide__btn slide__btn--next'>
              <img src=${icons.nextBtn} alt='다음 슬라이드 버튼' />
            </button>
        </div>
    `
}

export const getpageNumTemplate = (parent, currNum, totalNum) => {
    return `
        <div class=${parent}__page-nums slide__page-nums>
            <span class='${parent}__page-num--curr'>${currNum}</span>
            <span>/</span>
            <span class='${parent}__page-num--total'>${totalNum}</span>
        </div>
    `
}

export const activateBtns = (parentElement) => {
    const prevBtn = parentElement.querySelector('.slide__btn--prev');
    const nextBtn = parentElement.querySelector('.slide__btn--next');
    prevBtn.addEventListener('click', moveToPrev);
    nextBtn.addEventListener('click', moveToNext);
    const container = document.querySelector('.main-banner__contents');
}

const moveToNext = (event) => {
    moveSlide(event, 'next');
}

const moveToPrev = (event) => {
    moveSlide(event, 'prev');
}

const moveSlide = (e, direction) => {
    const slidesDiv = e.target.closest('.slides');
    const container = slidesDiv.querySelector('ul');
    container.style.transition = '.5s ease-out';
    const currSlide = direction === 'prev' ? container.firstElementChild : container.lastElementChild;
    currSlide.classList.add('curr-slide');
    container.style.transform = `translateX(${direction === 'prev' ? '720px' : '-720px'})`;
}

