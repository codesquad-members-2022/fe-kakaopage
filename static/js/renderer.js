import { $ } from "./utils/dom.js";
import { getJSON } from "./tools.js";

import * as datas from "./data/datas.js";
import { renderCarousel } from "./carousel.js";

import { Category, SlideBanner, GenreBest, Weekday } from "./views/views.js";

const render = (html) => {
    $("#app").innerHTML = html;
};

const renderHome = () => {
    const category = new Category({ categories: datas.homeData.category });
    const slideBanner = new SlideBanner();
    let html = "";
    html += category.getHtml();
    html += slideBanner.getHtml();

    fetch("//localhost:3000/genre/romanceTop")
        .then((res) => res.json())
        .then((data) => {
            html += new GenreBest({
                genre: "로맨스",
                genreItem: data,
            }).getHtml();

            render(html);
        })
        .catch(render(html));

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
