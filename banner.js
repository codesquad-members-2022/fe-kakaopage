export function setCarouselTo(slideElement, imgArr, widthRem, autoMovingBoolean=false, sliderIntervalMs=0, transitionTimeMs=0) {
    const element = document.querySelector(slideElement);
    const imgNum = imgArr.length;
    const maxWidth = widthRem * (imgNum) + widthRem;
    element.style.width = `${maxWidth}rem`;

    copyFirstAndLastElement(element)

    let xPos = 0;
    xPos -= widthRem;
    element.style.transform = `translateX(${xPos}rem)`;

    if(autoMovingBoolean) {
        setInterval(() => {
            xPos -= widthRem;
            element.style.transition = `ease-in-out ${transitionTimeMs}ms`;
            element.style.transform = `translateX(${xPos}rem)`;
    
            if(xPos === maxWidth*(-1) + widthRem){
                xPos = 0;
                setTimeout(() => {
                    element.style.transition = "0s";
                    element.style.transform = `translateX(${xPos}rem)`;
                }, transitionTimeMs+1);
            }
        }, sliderIntervalMs);
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
