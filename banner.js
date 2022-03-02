import { addClickEventToElement } from "./util.js";

let xPos = 0;

export function setSlideBanner(slideElement, imgArr, widthRem, transitionTimeMs, carouselBoolean=false, sliderIntervalMs=null) {
    xPos = 0;
    const element = document.querySelector(slideElement);
    const imgNum = imgArr.length;
    const maxWidth = widthRem*(imgNum) + widthRem*2;
    element.style.width = `${maxWidth}rem`;

    copyFirstAndLastElement(element);

    xPos -= widthRem;
    element.style.transform = `translateX(${xPos}rem)`;

    if(carouselBoolean) {
        let carousel = setInterval(() => {
            moveSlideRight (widthRem, element, transitionTimeMs, maxWidth)
        }, sliderIntervalMs);

        addClickEventToElement(`${slideElement}-btn.right`, () => {
            clearInterval(carousel);
            carousel = setInterval(() => {
                moveSlideRight (widthRem, element, transitionTimeMs, maxWidth)
            }, sliderIntervalMs);
    
            moveSlideRight (widthRem, element, transitionTimeMs, maxWidth)
        })
    
        addClickEventToElement(`${slideElement}-btn.left`, () => {
            clearInterval(carousel);
            carousel = setInterval(() => {
                moveSlideRight (widthRem, element, transitionTimeMs, maxWidth)
            }, sliderIntervalMs);
            
            moveSlideLeft (widthRem, element, transitionTimeMs, maxWidth)
        })
    } else {
        addClickEventToElement(`${slideElement}-btn.right`, () => {
            moveSlideRight (widthRem, element, transitionTimeMs, maxWidth)
        })

        addClickEventToElement(`${slideElement}-btn.left`, () => {
            moveSlideLeft (widthRem, element, transitionTimeMs, maxWidth)
        })
    }
}

export function copyFirstAndLastElement (element) {
    const first = element.firstElementChild;
    const last = element.lastElementChild;
    const copiedFirst = first.cloneNode(true);
    const copiedLast = last.cloneNode(true);
    element.appendChild(copiedFirst);
    element.insertBefore(copiedLast, element.firstChild);
}

export function moveSlideRight (widthRem, element, transitionTimeMs, maxWidth) {
    xPos -= widthRem;
    element.style.transition = `ease-in-out ${transitionTimeMs}ms`;
    element.style.transform = `translateX(${xPos}rem)`;

    if(xPos === maxWidth*(-1) + widthRem){
        xPos = widthRem*(-1);
        setTimeout(() => {
            element.style.transition = "0s";
            element.style.transform = `translateX(${xPos}rem)`;
        }, transitionTimeMs+1);
    }
}

export function moveSlideLeft (widthRem, element, transitionTimeMs, maxWidth) {
    xPos += widthRem;
    element.style.transition = `ease-in-out ${transitionTimeMs}ms`;
    element.style.transform = `translateX(${xPos}rem)`;

    if(xPos === 0){
        xPos = maxWidth*(-1) + widthRem*2;
        setTimeout(() => {
            element.style.transition = "0s";
            element.style.transform = `translateX(${xPos}rem)`;
        }, transitionTimeMs+1);
    }
}
