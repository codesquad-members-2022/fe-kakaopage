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

function setUpSlide() {
    cloneSlideForClickEvent();
    document.querySelector('.aside__banner-slide-list').style.transform = `translateX(-720px)`;
}

let curIndex = 0;

function slideEvent(direction) {
    const slideList = document.querySelector('.aside__banner-slide-list');
    const slideLength = 3;
    const slideWidth = slideList.clientWidth;
    const slideSpeed = 300;

    function moveRight() {
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
    }
    
    function moveLeft() {
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
    }

    return direction === 'right' ? moveRight : moveLeft;
}

function slideEventHandler() {
    const slideLeftButton = document.querySelector('#banner-left-icon');
    const slideRightButton = document.querySelector('#banner-right-icon');
    let isClicked = true;

    const interval = setInterval(() => {
        if (isClicked) {
            slideEvent('right')();
        }
    }, 3000)

    slideRightButton.addEventListener(('click'), () => {
        slideEvent('right')();
        isClicked = false;
        setTimeout(() => {
            isClicked = true;
        }, 1000)
    })

    slideLeftButton.addEventListener(('click'), () => {
        slideEvent('left')();
        isClicked = false;
        setTimeout(() => {
            isClicked = true;
        }, 1000)
    })
}

export { setUpSlide, slideEventHandler };