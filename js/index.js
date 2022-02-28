import { $ } from "./utils/dom.js";
import * as datas from "./data/datas.js";

import {
    Category,
    SlideBanner,
    GenreBest,
    Weekday,
    CaroulselItems,
} from "./views/views.js";

const toggleClass = (curEl, className) => {
    const parentNode = curEl.parentNode;
    Array.from(parentNode.children).forEach((el) =>
        el.classList.remove(className)
    );
    curEl.classList.add(className);
};

const render = (html) => {
    $("#app").innerHTML = html;
};

const renderHome = () => {
    const category = new Category({ categories: datas.homeData.category });
    const slideBanner = new SlideBanner();
    const genreBest = new GenreBest({
        genre: "로맨스",
        genreItem: datas.romanceTop,
    });

    let html = "";
    html += category.getHtml();
    html += slideBanner.getHtml();
    html += genreBest.getHtml();

    render(html);
    renderCarousel(datas.carouselImgs["홈"]);
};

const renderWeekday = (today = new Date().getDay()) => {
    const days = ["일", "월", "화", "수", "목", "금", "토"];
    const weekday = new Weekday(
        datas.weekdayData,
        days[today] ? days[today] : today
    );

    let html = "";
    html += weekday.getHtml();

    render(html);
    renderCarousel(datas.carouselImgs["요일연재"]);
};

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

// FIXME: 전역변수
// FIXME: 중복된 변수들 삭제
// FIXME: 캐러셀 관련 - 모듈로 분리
let carouselImgIdx = 1;
let isClickable = true;

let isAutoCarouselRunning = false;
let carouselTimer;

const handleAutoCarousel = () => {
    if (!isAutoCarouselRunning) return;
    if (!isClickable) return;
    const imageWidth = $(".cover-image").clientWidth;
    const carouselItemWrapper = $(".carousel-item-wrap");
    const transitionDuration = "0.3s";
    const customTransition = `transform ${transitionDuration} ease-out`;

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

const preventDefaults = () => {
    $("body").addEventListener("click", (e) => {
        if (!e.target.matches("[data-link]")) return;
        e.preventDefault();
    });
};

const bindSubMenuEvent = () => {
    $(".sub-menu").addEventListener("click", ({ target }) => {
        const curEl = target.parentNode;
        const targetPage = target.innerText;

        toggleClass(curEl, "active");

        if (targetPage === "홈") {
            renderHome();
            return;
        }
        if (targetPage === "요일연재") {
            renderWeekday();
            return;
        }
        render("");
    });
};

const bindCaroulselEvent = () => {
    const carouselItemWrapper = $(".carousel-item-wrap");
    const carouselItems = carouselItemWrapper.children;
    const imageWidth = $(".cover-image").clientWidth;
    const clonedNodeCnt = [...carouselItems].filter(
        (el) => el.dataset.clone
    ).length;
    const transitionDuration = "0.3s";
    const customTransition = `transform ${transitionDuration} ease-out`;

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

const toggleWeekDayMenu = (target) => {
    const curEl = target.parentNode;
    toggleClass(curEl, "active");
};

const bindEventListeners = () => {
    bindSubMenuEvent();
    bindCaroulselEvent();

    $("#app").addEventListener("click", ({ target }) => {
        if ($(".week-day-menu")?.contains(target)) {
            const today = target.innerText;
            toggleWeekDayMenu(target);
            renderWeekday(today);
        }
    });
};

const init = () => {
    preventDefaults();
    renderHome();
    bindEventListeners();
};

init();
