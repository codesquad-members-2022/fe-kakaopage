import { $ } from "./utils.js";

export const handleCarousel = () => {
    const carouselList = $(".carousel__list");
    const leftArrow = $(".carousel_left_arrow");
    const rightArrow = $(".carousel_right_arrow");
    const carouselWidth = 720;
    const carouselLen = document.querySelectorAll(".carousel__background").length;
    const carouselCurCount = $('.carousel__count_current');
    const carouselTotalCount = $('.carousel__count_total');

    const firstChild = carouselList.firstElementChild;
    const lastChild = carouselList.lastElementChild;

    let curIndex = 1;

    carouselList.appendChild(firstChild.cloneNode(true));
    carouselList.insertBefore(lastChild.cloneNode(true), carouselList.firstElementChild);

    carouselList.style.width = `${carouselWidth * (carouselLen + 2)}px`;
    carouselList.style.transform = `translateX(-${carouselWidth * curIndex}px)`;
    carouselTotalCount.innerHTML = carouselLen;

    rightArrow.addEventListener("click", () => {
        if(curIndex <= carouselLen) {
            carouselList.style.transition = '400ms';
            carouselList.style.transform = `translateX(-${carouselWidth * (curIndex + 1)}px)`;
        }

        if(curIndex === carouselLen){
            setTimeout(() => {
                carouselList.style.transition = '0ms';
                carouselList.style.transform = `translateX(-${carouselWidth}px)`;
            }, 400);
            curIndex = 1;
            carouselCurCount.innerHTML = curIndex;
            return;
        }
        curIndex += 1;
        carouselCurCount.innerHTML = curIndex;
    });

    leftArrow.addEventListener("click", () => {
        if(curIndex >= 0) {
            carouselList.style.transition = 'transform 0.4s ease-in-out';
            carouselList.style.transform = `translateX(-${carouselWidth * (--curIndex)}px)`;
        }

        if(curIndex === 0) {
            setTimeout(() => {
                carouselList.style.transition = '0ms';
                carouselList.style.transform = `translateX(-${carouselWidth * carouselLen}px)`;
            }, 400);
            curIndex = carouselLen;
        }
        carouselCurCount.innerHTML = curIndex;
    });
}