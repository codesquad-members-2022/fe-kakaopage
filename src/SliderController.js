const getSliderIndex = indexCounter();

function indexCounter(){
    const $banner_item = document.querySelectorAll('.banner__item');
    const maxIndex = $banner_item.length - 1;
    let index = 0;

    return (direction) => {
        if(direction === 'left'){
            index = --index < 0 ? 0 : index;
        }

        if(direction === 'right'){
            index = ++index > maxIndex ? maxIndex : index;
        }

        return [maxIndex, index];
    }
}

export function setButtonEvent() {
    const $left_button = document.querySelector('.banner__paging--left');
    const $right_button = document.querySelector('.banner__paging--right');
    $left_button.addEventListener('click', buttonClickHandler);
    $right_button.addEventListener('click', buttonClickHandler);
    setBannerOrderText(); // 나중에 여기서 말고 랜더링 할때 호출
}

let throttlingTimer = null;

function buttonClickHandler(event){
    const delay = 400;
    if (!throttlingTimer) {
        handleClickEvent(event);
        throttlingTimer = setTimeout(() => throttlingTimer = null, delay);
    }
}

function handleClickEvent(event){
    const $banner__contents = document.querySelector('.banner__contents');
    const $banner_list = document.querySelector('.banner__list');
    const direction = event.target.dataset.direction;
    const [maxIndex, currentIndex] = getSliderIndex(direction);
    
    $banner_list.style.transform = `translate(-${$banner__contents.clientWidth * currentIndex}px, 0px)`;
    setBannerOrderText(maxIndex, currentIndex);
}

function setBannerOrderText(maxIndex, currentIndex){
    const $banner_order = document.querySelector('.banner__order--text');

    if(!maxIndex){
        const [_maxIndex, _currentIndex] = getSliderIndex();
        maxIndex = _maxIndex;
        currentIndex = _currentIndex;
    }

    $banner_order.innerText = `${currentIndex + 1} / ${maxIndex + 1}`;
}