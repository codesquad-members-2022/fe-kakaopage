const FIRST_INDEX = 0;
let currentIdx = FIRST_INDEX;

function setSliderVariable(sliderWrapper) {
    const sliderBox = sliderWrapper.querySelector('.slider_items');
    const firstItem = sliderBox.firstElementChild;
    const lastItem = sliderBox.lastElementChild;
    const slideItem = sliderBox.querySelectorAll('.item');
    const slideCloneItem = sliderBox.querySelectorAll('.clone');
    
    const sliderInfo = {
        sliderBox,
        cloneFirst : firstItem.cloneNode(true),
        cloneLast : lastItem.cloneNode(true),
        itemCount : slideItem.length - slideCloneItem.length,
        itemWidth : slideItem[0].offsetWidth,
        pager : sliderWrapper.querySelector('.slider_pager'),
        firstIdx : FIRST_INDEX
    }
    return sliderInfo
}

function initSlider(sliderWrapper) {
    currentIdx = FIRST_INDEX;
    const sliderInfo = setSliderVariable(sliderWrapper);
    const sliderBox = sliderInfo.sliderBox
    const cloneFirst = sliderInfo.cloneFirst;
    const cloneLast = sliderInfo.cloneLast;

    cloneFirst.classList.add('clone');
    cloneLast.classList.add('clone');
    sliderBox.appendChild(cloneFirst);
    sliderBox.prepend(cloneLast);
    sliderBox.classList.remove('animate');
    sliderBox.style.transform = `translateX(0)`;

    updatePager(sliderInfo, currentIdx)
}

function initSliderHandler(sliderWrapper) {
    const prevBtn = sliderWrapper.querySelector('.prev')
    const nextBtn = sliderWrapper.querySelector('.next')

    sliderWrapper.addEventListener('click', (e) => {
        const target = e.target;
        const newBanner = target.closest('.banner');
        const sliderInfo = setSliderVariable(newBanner);
        const sliderItemCount = sliderInfo.itemCount;
        
        switch (target) {
            case prevBtn:
                currentIdx -= 1;
                break;
            case nextBtn:
                currentIdx += 1;
                break;
            default :
                break;
        }

        moveSlide(sliderInfo, currentIdx);
        currentIdx = checkCurrentIdx(currentIdx, sliderItemCount);
        updatePager(sliderInfo, currentIdx);
    })
}

function checkCurrentIdx(currentIdx, itemCount) {
    const FIRST_INDEX = 0;
    let updateIdx = currentIdx;
    if(currentIdx === itemCount) {
        updateIdx = FIRST_INDEX;
    }else if(currentIdx < FIRST_INDEX) {
        updateIdx = itemCount - 1;
    }

    return updateIdx
}

function moveSlide(sliderInfo, currentIdx) {
    const sliderBox = sliderInfo.sliderBox;
    const itemCount = sliderInfo.itemCount;
    const itemWidth = sliderInfo.itemWidth;
    let transformValue = `translateX(${-currentIdx * itemWidth}px)`;

    sliderBox.classList.add('animate');
    sliderBox.style.transform = transformValue;

    if(currentIdx === itemCount) {
        transformValue = `translateX(0)`
        replaceSlideItem(sliderBox, transformValue)
    }else if(currentIdx < FIRST_INDEX) {
        transformValue = `translateX(${-(itemCount-1) * itemWidth}px)`
        replaceSlideItem(sliderBox, transformValue)
    }
}

function replaceSlideItem(sliderBox, transformValue) {
    const TIME = 300;
    setTimeout(()=>{
        sliderBox.classList.remove('animate');        
        sliderBox.style.transform = transformValue;
    }, TIME)
}

function updatePager(sliderInfo, currentIdx) {
    let printCurIdx = currentIdx + 1;
    sliderInfo.pager.innerText = `${printCurIdx} / ${sliderInfo.itemCount}`
}

export {
    initSlider,
    initSliderHandler,
}