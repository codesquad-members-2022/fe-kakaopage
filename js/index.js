import { $ } from "./utils/dom.js";
import { homeData } from "./data/homeData.js";
import { coverImg } from "./data/coverImg.js";
import { romanceTop } from "./data/genreItems.js";
import { weekdayData } from "./data/weekdayData.js";

import Category from "./views/Category.js";
import SlideBanner from "./views/SlideBanner.js";
import GenreBest from "./views/GenreBest.js";
import Weekday from "./views/Weekday.js";

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
};

const renderWeekday = (today = "월") => {
    const weekday = new Weekday(weekdayData, today);

    let html = "";
    html += weekday.getHtml();

    render(html);
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
    let clickCnt = 1;
    let clickFlag = true;
    const carouselItemWrapper = $(".carousel-item-wrap");
    const carouselItems = carouselItemWrapper.children;
    const imageWidth = $(".cover-image").clientWidth;
    const clonedNodeCnt = 2;
    const transitionDuration = "0.3s";
    const customTransition = `transform ${transitionDuration} ease-out`;

    const autoCarouselHandler = () => {
        if (!clickFlag) return;
        clickCnt++;
        carouselItemWrapper.style.transition = customTransition;
        carouselItemWrapper.style.transform = `translateX(${
            -imageWidth * clickCnt
        }px)`;
        clickFlag = false;
    };

    let startCarousel = setInterval(autoCarouselHandler, 4000);

    $(".cover-image").addEventListener("click", ({ target }) => {
        if (!target.classList.contains("button")) return;
        clearInterval(startCarousel);
        startCarousel = setInterval(autoCarouselHandler, 4000);

        if (!clickFlag) return;
        if (target.closest(".btn-left")) {
            clickCnt--;
            carouselItemWrapper.style.transition = customTransition;
            carouselItemWrapper.style.transform = `translateX(${
                -imageWidth * clickCnt
            }px)`;
            clickFlag = false;
            return;
        }
        if (target.closest(".btn-right")) {
            clickCnt++;
            carouselItemWrapper.style.transition = customTransition;
            carouselItemWrapper.style.transform = `translateX(${
                -imageWidth * clickCnt
            }px)`;
            clickFlag = false;
            return;
        }
    });

    $(".cover-image").addEventListener("transitionend", () => {
        clickFlag = true;
        const maxCnt = carouselItems.length - 1;
        if (clickCnt > maxCnt) {
            clickCnt = maxCnt;
        }

        if (!carouselItems[clickCnt].dataset.clone) return;

        if (carouselItems[clickCnt].dataset.clone === "last") {
            carouselItemWrapper.style.transition = "none";
            clickCnt = carouselItems.length - clonedNodeCnt;
            carouselItemWrapper.style.transform = `translateX(${
                -imageWidth * clickCnt
            }px)`;
            return;
        }
        if (carouselItems[clickCnt].dataset.clone === "first") {
            carouselItemWrapper.style.transition = "none";
            clickCnt = carouselItems.length - clickCnt;
            carouselItemWrapper.style.transform = `translateX(${
                -imageWidth * clickCnt
            }px)`;
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
    bindEventListener();
    renderHome();
};

init();
