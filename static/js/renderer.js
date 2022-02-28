import { $ } from "./utils/dom.js";
import * as datas from "./data/datas.js";
import { renderCarousel } from "./carousel.js";

import { Category, SlideBanner, GenreBest, Weekday } from "./views/views.js";

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

export { render, renderHome, renderWeekday };
