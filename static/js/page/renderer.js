import { $ } from "../utils/dom.js";
import { getJSON } from "../tools/tools.js";

import * as datas from "../data/datas.js";

import { renderCarousel } from "./carousel.js";
import {
    Category,
    SlideBanner,
    GenreBest,
    Weekday,
    SubMenu,
} from "../views/views.js";

const render = (html) => {
    $("#app").innerHTML = html;
};

const renderSubMenu = () => {
    $(".sub-menu").innerHTML = new SubMenu({
        menus: datas.subMenu.webtoon.menuNames,
    }).getHtml();
};

const renderHome = () => {
    const category = new Category({ categories: datas.homeData.category });
    const slideBanner = new SlideBanner();
    let html = "";
    html += category.getHtml();
    html += slideBanner.getHtml();

    const renderJSONData = (path) => {
        getJSON(path)
            .then((data) => {
                html += new GenreBest({
                    genre: "로맨스",
                    genreItem: data,
                }).getHtml();

                render(html);
            })
            .catch(render(html));
    };

    renderSubMenu();
    renderJSONData("genre/romanceTop");
    renderCarousel(datas.carouselImgs["Home"]);
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
};

export { render, renderHome, renderWeekday };
