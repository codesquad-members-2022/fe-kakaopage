const defaultMovePercent = 100;

/* 슬라이더 초기 세팅 */
export function init() {
    setButtonEvent();
    setTransformTranslateX(defaultMovePercent);
    setTransitionSpeed();
    initIndexCounter();
    setBannerOrderText();
}

export function setBannerOrderText(maxIndex, currentIndex) {
    const $banner_order = document.querySelector('.banner__order--text');

    if (!maxIndex) {
        const [_maxIndex, _currentIndex] = countSliderIndex();
        maxIndex = _maxIndex;
        currentIndex = _currentIndex;
    }

    $banner_order.innerText = `${currentIndex} / ${maxIndex - 1}`;
}

let countSliderIndex = null;

function indexCounter() {
    const $banner_item = document.querySelectorAll('.banner__item');
    const length = $banner_item.length;
    const maxIndex = length - 1;
    const firstIndex = 0;
    let index = firstIndex;

    return (direction, count = 1) => {
        index = ((direction === 'left' ? index - count : index + count) + length) % length;
        return [maxIndex, index];
    }
}

function initIndexCounter() {
    if (countSliderIndex === null) {
        countSliderIndex = indexCounter();
    }
}

export function setButtonEvent() {
    const $left_button = document.querySelector('.banner__paging--left');
    const $right_button = document.querySelector('.banner__paging--right');
    $left_button.addEventListener('click', buttonClickHandler);
    $right_button.addEventListener('click', buttonClickHandler);
}

let throttlingTimer = null;

function buttonClickHandler(event) {
    const delay = 400;
    if (!throttlingTimer) {
        handleClickEvent(event);
        throttlingTimer = setTimeout(() => throttlingTimer = null, delay);
    }
}

function handleClickEvent(event) {
    const direction = event.target.dataset.direction;
    let [maxIndex, currentIndex] = countSliderIndex(direction);

    setTransformTranslateX(defaultMovePercent * currentIndex);

    if (currentIndex === 0 || currentIndex === maxIndex) {
        const movementDelay = 350;
        [maxIndex, currentIndex] = countSliderIndex(direction, 2);
        setTimeout(() => backToItem(defaultMovePercent * currentIndex), movementDelay);
    }

    setBannerOrderText(maxIndex, currentIndex);
}

function backToItem(xPercent) {
    setTransitionSpeed(0);
    setTransformTranslateX(xPercent);
    setTimeout(() => setTransitionSpeed(), 50);
}

function setTransformTranslateX(xPercent) {
    const $banner_list = document.querySelector('.banner__list');
    $banner_list.style.transform = `translate(-${xPercent}%, 0px)`;
}

function setTransitionSpeed(speed = null) {
    const defaultSpeed = 0.3;
    const $banner_list = document.querySelector('.banner__list');
    $banner_list.style.transition = `transform ${speed != null ? speed : defaultSpeed}s`;
}