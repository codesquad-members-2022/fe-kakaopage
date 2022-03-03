/* 슬라이더 초기 세팅 */
export function init() {
    setButtonEvent();
    setTransitionSpeed();
    initIndexCounter();
    setBannerOrderText();
}

/* 슬라이더 순서 출력 */
let countSliderIndex = null;

export function setBannerOrderText(maxIndex, currentIndex) {
    const $banner_order = document.querySelector('.banner__order--text');

    if (!maxIndex) {
        const [_maxIndex, _currentIndex] = countSliderIndex();
        maxIndex = _maxIndex;
        currentIndex = _currentIndex;
    }

    $banner_order.innerText = `${currentIndex} / ${maxIndex - 1}`;
}

function indexCounter() {
    const $banner_item = document.querySelectorAll('.banner__item');
    const firstIndex = 0;
    const maxIndex = $banner_item.length - 1;
    let index = firstIndex;

    return (direction) => {
        index = ((direction === 'left' ? index - 1 : index + 1) + maxIndex) % maxIndex;
        index = direction === 'right' && index === 0 ? maxIndex : index;
        return [maxIndex, index];
    }
}

function initIndexCounter() {
    if (countSliderIndex === null) {
        countSliderIndex = indexCounter();
    }
}

/* 슬라이더 버튼 이벤트 */
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
    const defaultMovePercent = 100;

    setTransformTranslateX(defaultMovePercent * currentIndex);

    if (currentIndex === 0 || currentIndex === maxIndex) {
        const movementDelay = 350;
        [maxIndex, currentIndex] = countSliderIndex(direction);
        setTimeout(() => backToItem(defaultMovePercent * currentIndex), movementDelay);
    }

    setBannerOrderText(maxIndex, currentIndex);
}

/* 무한 슬라이드 처리 */
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