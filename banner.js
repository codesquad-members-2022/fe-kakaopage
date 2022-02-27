export function setSlideBanner(slideElement, imgArr, widthRem, carouselBoolean=false, sliderIntervalMs=0, transitionTimeMs=0) {
    const element = document.querySelector(slideElement);
    const imgNum = imgArr.length;
    const maxWidth = widthRem*(imgNum) + widthRem*2;
    element.style.width = `${maxWidth}rem`;

    copyFirstAndLastElement(element);

    let xPos = 0;
    xPos -= widthRem;
    element.style.transform = `translateX(${xPos}rem)`;

    if(carouselBoolean) {
        setInterval(() => {
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

export function setBannerBtnLeft (element) {
    const bannerMain = document.querySelector(element);
    const widthRem = Number(bannerMain.style.width.replace('rem', '')) / bannerMain.childElementCount;

    bannerMain.transform = `translateX(${widthRem}rem)`;
}
