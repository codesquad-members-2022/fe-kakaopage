import { SLIDE_DELAY, SLIDE_CONTAINER_LENGTH, AUTO_SLIDE_INTERVAL } from '../constant.js'
import { icons } from "../../icons.js";

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

//추천이벤트의 버튼은 위의 일반적인 경우와 달라서 따로 함수 분리
export const getRecommendEventControllerTemplate = (parent, currNum, totalNum) => {
    const pageNumTemplate = getpageNumTemplate(parent, currNum, totalNum)
    return `
        <div class='recommend-event__controller'>
            <button class='slide__btn--prev'>
              <img src=${icons.leftArrow} alt='이전 슬라이드 버튼' />
            </button>
            ${pageNumTemplate}
            <button class='slide__btn--next'>
              <img src=${icons.rightArrow} alt='다음 슬라이드 버튼' />
            </button>
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
    const autoSlide = startAutoSlide(parentElement);
    parentElement.addEventListener('mouseenter', () => {clearInterval(autoSlide)});
    parentElement.addEventListener('mouseleave', () => {activateAutoSlide(parentElement)});
}

const startAutoSlide = (slide) => {
    const autoSlide = setInterval(() => {
        moveSlide(slide, 'next');
    }, AUTO_SLIDE_INTERVAL);
    return autoSlide;
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


export const activateSlide = (parent, contentData, slideMakingFunction) => {
    const container = parent.querySelector('ul');
    container.addEventListener('transitionend', () => {updateSlide(parent, contentData, slideMakingFunction)});
}

const updateSlide = (parent, contentData, slideMakingFunction) => {
    const container = parent.querySelector('ul');
    const currIndex = Number(container.querySelector('.curr-slide').dataset.index);
    updateContainer(container, contentData, currIndex, slideMakingFunction);
    updatePageNum(parent, currIndex)
}

const updateContainer = (container, contentData, currIndex, slideMakingFunction) => {
    container.style.transition = 'none';
    container.style.transform = 'translateX(0px)';
    container.innerHTML = slideMakingFunction(contentData, currIndex);
}

const updatePageNum = (parent, currIndex) => {
    const pageNum = parent.querySelector(`.${parent.dataset.name}__page-num--curr`);
    pageNum.innerText = currIndex + 1;
}