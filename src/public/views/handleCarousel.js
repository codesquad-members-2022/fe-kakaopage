import { $ } from "../utils/utils.js";
import { CarouselContent } from "../components/CarouselContent.js";
import { carouselData } from "/data/dummy.js";

export const handleCarousel = () => {
    const carouselList = $(".carousel__list");
    const leftArrow = $(".carousel_left_arrow");
    const rightArrow = $(".carousel_right_arrow");
    const carouselWidth = 720;
    const carouselDuration = 400;
    const carouselLen = document.querySelectorAll(".carousel__background").length;
    const carouselCurCount = $('.carousel__count_current');
    const carouselTotalCount = $('.carousel__count_total');

    const firstChild = carouselList.firstElementChild;
    const lastChild = carouselList.lastElementChild;

    let curIndex = 1;
    let throttingTimer;
    let autoTimer;

    carouselList.appendChild(firstChild.cloneNode(true));
    carouselList.insertBefore(lastChild.cloneNode(true), carouselList.firstElementChild);
    renderDescription(curIndex);

    carouselList.style.width = `${carouselWidth * (carouselLen + 2)}px`;
    carouselList.style.transform = `translateX(-${carouselWidth * curIndex}px)`;
    carouselTotalCount.innerHTML = carouselLen;

    const nextBtnClick = () => {
        throttingTimer = null;
        if(curIndex <= carouselLen) {
            carouselList.style.transition = `${carouselDuration}ms`;
            carouselList.style.transform = `translateX(-${carouselWidth * (curIndex + 1)}px)`;
        }

        if(curIndex === carouselLen){
            setTimeout(() => {
                carouselList.style.transition = '0ms';
                carouselList.style.transform = `translateX(-${carouselWidth}px)`;
            }, carouselDuration);
            curIndex = 1;
            carouselCurCount.innerHTML = curIndex;
            renderDescription(curIndex);
            return;
        }
        curIndex += 1;
        renderDescription(curIndex);
        carouselCurCount.innerHTML = curIndex;
    }

    const prevBtnClick = () => {
        throttingTimer = null;
        if(curIndex >= 0) {
            carouselList.style.transition = 'transform 0.4s ease-in-out';
            carouselList.style.transform = `translateX(-${carouselWidth * (--curIndex)}px)`;
        }

        if(curIndex === 0) {
            setTimeout(() => {
                carouselList.style.transition = '0ms';
                carouselList.style.transform = `translateX(-${carouselWidth * carouselLen}px)`;
            }, carouselDuration);
            curIndex = carouselLen;
        }

        renderDescription(curIndex);
        carouselCurCount.innerHTML = curIndex;
    }
    
    const autoPlay = () => {
        autoTimer = setInterval(nextBtnClick, 2000);
    }

    rightArrow.addEventListener("click", () => {
        clearInterval(autoTimer);
        if(!throttingTimer) {
            throttingTimer = setTimeout(() => {
                nextBtnClick();
                autoPlay();
            }, carouselDuration);
        }
    });

    leftArrow.addEventListener("click", () => {
        clearInterval(autoTimer);
        if(!throttingTimer) {
            throttingTimer = setTimeout(() => {
                prevBtnClick();
                autoPlay();
            }, carouselDuration);
        }
    });

    autoPlay();
}

const renderDescription = (curIndex) => {
    const carouselContent = $('.carousel__content');
    carouselContent.innerHTML = CarouselContent(carouselData[curIndex - 1]);
}