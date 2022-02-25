import { $ } from "./utils/dom.js";
import { homeData } from "./data/homeData.js";
import { coverImg } from "./data/coverImg.js";
import { romanceTop } from "./data/genreItems.js";
import { weekdayData } from "./data/weekdayData.js";
import { carouselImgs } from "./data/carouselImgs.js";

import Category from "./views/Category.js";
import SlideBanner from "./views/SlideBanner.js";
import GenreBest from "./views/GenreBest.js";
import Weekday from "./views/Weekday.js";
import CaroulselItems from "./views/CaroulselItems.js";

const changeCoverImg = (subMenu) => {
    const coverImgSection = $(".cover-image");
    const imgSrc = coverImg.img[subMenu];
    const title = coverImg.title[subMenu];

    coverImgSection.querySelector("img").src = imgSrc;
    coverImgSection.querySelector(".title").innerText = title;
};

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
    const category = new Category({ categories: homeData.category });
    const slideBanner = new SlideBanner();
    const genreBest = new GenreBest({ genre: "로맨스", genreItem: romanceTop });

    let html = "";
    html += category.getHtml();
    html += slideBanner.getHtml();
    html += genreBest.getHtml();

    render(html);
    renderCarousel(carouselImgs["홈"]);
};

const renderWeekday = (today = new Date().getDay()) => {
    const days = ["일", "월", "화", "수", "목", "금", "토"];
    const weekday = new Weekday(weekdayData, days[today]);

    let html = "";
    html += weekday.getHtml();

    render(html);
    renderCarousel(carouselImgs["요일연재"]);
};

const setCaroulselPager = (carouselImgIdx = 1) => {
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

const renderCarousel = (data) => {
    const carouselImgs = data;
    const carousel = new CaroulselItems({ carouselImgs });

    $(".carousel-item-wrap").innerHTML = carousel.getHtml();
    setCaroulselPager();
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

        // 서브메뉴 active 클래스 토글
        toggleClass(curEl, "active");
        // 커버이미지란 변경
        // changeCoverImg(targetPage);

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
    let carouselImgIdx = 1;
    let isClickable = true;
    const carouselItemWrapper = $(".carousel-item-wrap");
    const carouselItems = carouselItemWrapper.children;
    const imageWidth = $(".cover-image").clientWidth;
    const clonedNodeCnt = [...carouselItems].filter(
        (el) => el.dataset.clone
    ).length;
    const imageCnt = carouselItems.length - clonedNodeCnt;
    const transitionDuration = "0.3s";
    const autoCarouselDelay = 2500;
    const customTransition = `transform ${transitionDuration} ease-out`;

    const setTransition = (transition) => {
        carouselItemWrapper.style.transition = transition;
    };

    const setTransform = (carouselImgIdx) => {
        setCaroulselPager(carouselImgIdx);

        carouselItemWrapper.style.transform = `translateX(${
            -imageWidth * carouselImgIdx
        }px)`;
    };

    const autoCarouselHandler = () => {
        if (!isClickable) return;

        carouselImgIdx++;
        setTransition(customTransition);
        setTransform(carouselImgIdx);

        isClickable = false;
    };

    let autoCarousel = setInterval(autoCarouselHandler, autoCarouselDelay);

    $(".cover-image").addEventListener("click", ({ target }) => {
        if (!target.classList.contains("button")) return;
        clearInterval(autoCarousel);
        autoCarousel = setInterval(autoCarouselHandler, autoCarouselDelay);

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
    });

    $(".cover-image").addEventListener("transitionend", () => {
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
    });
};

const toggleWeekDayMenu = (target) => {
    const curEl = target.parentNode;
    toggleClass(curEl, "active");
};

const bindEventListener = () => {
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
    bindEventListener();
};

init();
