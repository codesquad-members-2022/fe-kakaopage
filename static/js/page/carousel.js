import { $ } from "../utils/dom.js";
import { CaroulselItems } from "../views/views.js";

const setCarouselPager = (carouselImgIdx = 1) => {
    const carouselItemWrapper = $(".carousel-item-wrap");
    const carouselItems = carouselItemWrapper.children;
    const clonedNodeCnt = [...carouselItems].filter(
        (el) => el.dataset.clone
    ).length;
    const imageCnt = carouselItems.length - clonedNodeCnt;
    const pager = $(".cover-image").querySelector(".page");

    const firstPageNum = 1;
    const lastPageNum = imageCnt;
    let curPage = carouselImgIdx;

    curPage = curPage > lastPageNum ? firstPageNum : curPage;
    curPage = curPage < firstPageNum ? lastPageNum : curPage;

    pager.innerText = `${curPage} / ${lastPageNum}`;
};

let carouselImgIdx = 1;
let isClickable = true;

let isAutoCarouselRunning = false;
let carouselTimer;

const handleAutoCarousel = () => {
    if (!isAutoCarouselRunning) return;
    if (!isClickable) return;
    const imageWidth = $(".cover-image").clientWidth;
    const carouselItemWrapper = $(".carousel-item-wrap");
    const transitionDurationSec = 0.3;
    const customTransition = `transform ${transitionDurationSec}s ease-out`;

    carouselImgIdx++;
    carouselItemWrapper.style.transition = customTransition;
    carouselItemWrapper.style.transform = `translateX(${
        -imageWidth * carouselImgIdx
    }px)`;
    setCarouselPager(carouselImgIdx);

    isClickable = false;
};

const runCarouselTimer = () => {
    const delayMilliSeconds = 2500;
    isAutoCarouselRunning = true;
    carouselTimer = setInterval(handleAutoCarousel, delayMilliSeconds);
};

const stopCarouselTimer = () => {
    clearInterval(carouselTimer);
    isAutoCarouselRunning = false;
};

const renderCarousel = (data) => {
    const carouselImgs = data;
    const carousel = new CaroulselItems({ carouselImgs });
    const carouselItemWrapper = $(".carousel-item-wrap");
    const imageWidth = $(".cover-image").clientWidth;

    carouselItemWrapper.style.transform = `translateX(${-imageWidth}px)`;
    carouselItemWrapper.innerHTML = carousel.getHtml();
    setCarouselPager();
    carouselItemWrapper.style.transition = "none";
    carouselImgIdx = 1;
    stopCarouselTimer();
    runCarouselTimer();
};

const bindCaroulselEvent = () => {
    const carouselItemWrapper = $(".carousel-item-wrap");
    const carouselItems = carouselItemWrapper.children;
    const imageWidth = $(".cover-image").clientWidth;
    const clonedNodeCnt = [...carouselItems].filter(
        (el) => el.dataset.clone
    ).length;
    const transitionDurationSec = 0.3;
    const customTransition = `transform ${transitionDurationSec}s ease-out`;

    const setTransition = (transition) => {
        carouselItemWrapper.style.transition = transition;
    };

    const setTransform = (carouselImgIdx) => {
        setCarouselPager(carouselImgIdx);

        carouselItemWrapper.style.transform = `translateX(${
            -imageWidth * carouselImgIdx
        }px)`;
    };

    const handleCarouselBtnClick = ({ target }) => {
        if (!target.classList.contains("button")) return;
        stopCarouselTimer();
        runCarouselTimer();

        if (!isClickable) return;
        if (target.closest(".btn-left")) {
            carouselImgIdx--;
            setTransition(customTransition);
            setTransform(carouselImgIdx);

            isClickable = false;
            return;
        }
        if (target.closest(".btn-right")) {
            carouselImgIdx++;

            setTransition(customTransition);
            setTransform(carouselImgIdx);
            isClickable = false;
            return;
        }
    };

    const handleCarouselTransitionEnd = () => {
        isClickable = true;
        const maxCnt = carouselItems.length - 1;
        if (carouselImgIdx > maxCnt) {
            carouselImgIdx = maxCnt;
        }

        if (!carouselItems[carouselImgIdx].dataset.clone) return;

        if (carouselItems[carouselImgIdx].dataset.clone === "last") {
            carouselImgIdx = carouselItems.length - clonedNodeCnt;
            setTransition("none");
            setTransform(carouselImgIdx);
            return;
        }
        if (carouselItems[carouselImgIdx].dataset.clone === "first") {
            carouselImgIdx = carouselItems.length - carouselImgIdx;
            setTransition("none");
            setTransform(carouselImgIdx);
            return;
        }
    };

    $(".cover-image").addEventListener("click", handleCarouselBtnClick);

    $(".cover-image").addEventListener(
        "transitionend",
        handleCarouselTransitionEnd
    );
};

export {
    setCarouselPager,
    handleAutoCarousel,
    runCarouselTimer,
    stopCarouselTimer,
    renderCarousel,
    bindCaroulselEvent,
};
