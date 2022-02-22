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

const toggleWeekDayMenu = (target) => {
    const curEl = target.parentNode;
    toggleClass(curEl, "active");
};

const bindEventListener = () => {
    bindSubMenuEvent();

    $("#app").addEventListener("click", ({ target }) => {
        if ($(".week-day-menu")?.contains(target)) {
            const today = target.innerText;
            toggleWeekDayMenu(target);
            renderWeekday(today);
        }
    });

    $(".cover-image").addEventListener("click", ({ target }) => {
        const classes = target.parentNode.classList;
        if (!classes.contains("button")) return;
        if (classes.contains("btn-left")) {
            $(".carousel-item-wrap").classList.toggle("transform-left");
        }
        if (classes.contains("btn-right")) {
            $(".carousel-item-wrap").classList.toggle("transform-right");
        }
    });
};

const init = () => {
    preventDefaults();
    bindEventListener();
    renderHome();
};

init();
