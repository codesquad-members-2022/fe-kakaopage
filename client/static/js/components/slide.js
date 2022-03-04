import { SLIDE_DELAY, SLIDE_CONTAINER_LENGTH, AUTO_SLIDE_INTERVAL } from '../constant.js'
import { icons } from "../../assets/icons.js";

export const getSlidesTemplate = (bannerData, currIndex, contentsTemplateMakingFunction) => {
    const prevIndex = currIndex - 1 < 0 ? bannerData.length - 1 : currIndex - 1;
    const nextIndex = currIndex + 1 >= bannerData.length ? 0 : currIndex + 1;
    const indexSeries = [prevIndex, currIndex, nextIndex];
    const slidesTemplate = indexSeries.map(index => contentsTemplateMakingFunction(bannerData[index], 'main-banner')).join('');
    return slidesTemplate;
}

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
            <span class='${parent}__page-num--curr page-num--curr'>${currNum}</span>
            <span>/</span>
            <span class='${parent}__page-num--total page-num--total'>${totalNum}</span>
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



export const activateBtns = (parent) => {
    const prevBtn = parent.querySelector('.slide__btn--prev');
    const nextBtn = parent.querySelector('.slide__btn--next');
    prevBtn.addEventListener('click', moveToPrev);
    nextBtn.addEventListener('click', moveToNext);
}

export const activateAutoSlide = (parent) => {
    const slideIntervalId = startAutoSlide(parent);
    parent.addEventListener('mouseenter', () => {clearInterval(slideIntervalId)});
    parent.addEventListener('mouseleave', () => {activateAutoSlide(parent)});
}

const startAutoSlide = (slide) => {
    const slideIntervalId = setInterval(() => {
        moveSlide(slide, 'next');
    }, AUTO_SLIDE_INTERVAL);
    return slideIntervalId;
}

const moveToNext = (event) => {
    const slideDiv = event.target.closest('.slides');
    moveSlide(slideDiv, 'next');
    updatePageNum(slideDiv, 'next');
}

const moveToPrev = (event) => {
    const slideDiv = event.target.closest('.slides');
    moveSlide(slideDiv, 'prev');
    updatePageNum(slideDiv, 'prev');
}

const moveSlide = (slideDiv, direction) => {
    const slideWrapper = slideDiv.querySelector('ul');
    const slideWrapperWidth = getComputedStyle(slideWrapper).width; 
    const slideWidth = `${parseInt(slideWrapperWidth , 10) / SLIDE_CONTAINER_LENGTH}px`;
    const currSlide = direction === 'prev' ? slideWrapper.firstElementChild : slideWrapper.lastElementChild;
    
    currSlide.classList.add('curr-slide');
    slideWrapper.style.transition = `${SLIDE_DELAY} ease-out`;
    slideWrapper.style.transform = `translateX(${direction === 'prev' ? `${slideWidth}` : `-${slideWidth}`})`;
}

const updatePageNum = (slideDiv, direction) => {
    const currNumEl = slideDiv.querySelector('.page-num--curr');
    const totalNumEl = slideDiv.querySelector('.page-num--total');
    const currNum = Number(currNumEl.innerText);
    const totalNum = Number(totalNumEl.innerText);
    if (direction === 'next') {
        currNumEl.innerText = currNum === totalNum ? 1 : currNum + 1;  
    } else if (direction === 'prev') {
        currNumEl.innerText = currNum === 1 ? totalNum : currNum - 1;  
    }
}

export const activateSlide = (parent, slideData, slideMakingFunction) => {
    const slideWrapper = parent.querySelector('ul');
    slideWrapper.addEventListener('transitionend', () => {updateSlideWrapper(slideWrapper, slideData, slideMakingFunction)});
}

const updateSlideWrapper = (slideWrapper, slideData, slideMakingFunction) => {
    const currIndex = Number(slideWrapper.querySelector('.curr-slide').dataset.index);
    updateSlide(slideWrapper, slideData, currIndex, slideMakingFunction);
}

const updateSlide = (slideWrapper, slideData, currIndex, slideMakingFunction) => {
    slideWrapper.style.transition = 'none';
    slideWrapper.style.transform = 'translateX(0px)';
    slideWrapper.innerHTML = getSlidesTemplate(slideData, currIndex, slideMakingFunction);
}

