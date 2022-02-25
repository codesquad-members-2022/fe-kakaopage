const currentIndex = indexCounter();

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

        return index;
    }
}

export function setButtonEvent() {
    const $left_button = document.querySelector('.banner__paging--left');
    const $right_button = document.querySelector('.banner__paging--right');
    $left_button.addEventListener('click', buttonClickHandler);
    $right_button.addEventListener('click', buttonClickHandler);
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
    const index = currentIndex(direction);
    $banner_list.style.transform = `translate(-${$banner__contents.clientWidth * index}px, 0px)`;
}