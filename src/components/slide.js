import { SLIDE_DELAY, SLIDE_CONTAINER_LENGTH, AUTO_SLIDE_INTERVAL } from '../constant.js'
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
}

export const activateAutoSlide = (parentElement) => {
    setInterval(() => {
        moveSlide(parentElement, 'next');
    }, AUTO_SLIDE_INTERVAL)
}

const moveToNext = (event) => {
    moveSlide(event.target, 'next');
}

const moveToPrev = (event) => {
    moveSlide(event.target, 'prev');
}

const moveSlide = (slideElement, direction) => {
    const slidesDiv = slideElement.closest('.slides');
    const container = slidesDiv.querySelector('ul');
    const containerWidth = getComputedStyle(container).width; 
    const slideWidth = `${parseInt(containerWidth , 10) / SLIDE_CONTAINER_LENGTH}px`;
    const currSlide = direction === 'prev' ? container.firstElementChild : container.lastElementChild;
    
    currSlide.classList.add('curr-slide');
    container.style.transition = `${SLIDE_DELAY} ease-out`;
    container.style.transform = `translateX(${direction === 'prev' ? `${slideWidth}` : `-${slideWidth}`})`;
}

