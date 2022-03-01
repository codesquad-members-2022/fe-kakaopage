function cloneSlideForClickEvent() {
    const slideList = document.querySelector('.aside__banner-slide-list');
    const [firstChild, lastChild]  = [slideList.firstChild, slideList.lastChild];
    const [clonedFirst, clonedLast] = [firstChild.cloneNode(true), lastChild.cloneNode(true)];
    slideList.appendChild(clonedFirst);
    slideList.insertBefore(clonedLast, slideList.firstElementChild);
}

function convertSlideTransform(node, transfromValue, transitionSpeed) {
    node.style.transition = transitionSpeed + "ms";
    node.style.transform = `translateX(-${transfromValue}px)`;
}

function slideEventHandler() {
    const slideLeftButton = document.querySelector('#banner-left-icon');
    const slideRightButton = document.querySelector('#banner-right-icon');
    const slides = document.querySelectorAll('.aside__banner-slide');
    const slideList = document.querySelector('.aside__banner-slide-list');
    const slideLength = slides.length;
    const slideWidth =  document.querySelector('.aside__banner-slider').clientWidth;
    const slideSpeed = 300;
    cloneSlideForClickEvent();
    slideList.style.transform = `translateX(-${slideWidth}px)`;

    let curIndex = 0;
    slideRightButton.addEventListener('click', function() {
        if (curIndex <= slideLength - 1) {
            convertSlideTransform(slideList, slideWidth * (curIndex+2), slideSpeed);
            curIndex++;
        } 
        if (curIndex >= slideLength) {
            setTimeout(() => {
                convertSlideTransform(slideList, slideWidth, 0);
                }, slideSpeed);
            curIndex = 0;
        }
    });

    slideLeftButton.addEventListener('click', function() {
        if (curIndex >= 0) {
            convertSlideTransform(slideList, slideWidth * curIndex, slideSpeed);
            curIndex--;
        } 
        if (curIndex < 0) {
            setTimeout(() => {
                convertSlideTransform(slideList, slideWidth * slideLength, 0);
                }, slideSpeed);
            curIndex = slideLength-1;
        }
    });
}

export { slideEventHandler };