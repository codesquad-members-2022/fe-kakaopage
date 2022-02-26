export function createCarouselSlider(elementName, imgArr, widthRem, sliderIntervalMs, transitionTimeMs) {
    const element = document.querySelector(elementName)
    const imgNum = imgArr.length;
    const maxWidth = widthRem * (imgNum);
    element.style.width = `${maxWidth+widthRem}rem`

    const first = element.firstElementChild;
    const copied = first.cloneNode(true)
    element.appendChild(copied)

    let xPos = 0;

    setInterval(() => {
        xPos -= widthRem
        element.style.transition = `ease-in-out ${transitionTimeMs}ms`
        element.style.transform = `translateX(${xPos}rem)`

        if(xPos === maxWidth*(-1)){
            xPos = 0
            setTimeout(() => {
                element.style.transition = "0s"
                element.style.transform = `translateX(${xPos}rem)`
            }, transitionTimeMs+1)
        }
    }, sliderIntervalMs)
}