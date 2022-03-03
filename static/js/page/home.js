import { $ } from "../utils/dom.js";
import * as datas from "../data/datas.js";
import { getJSON } from "../tools/getJSON.js";
import { render } from "../tools/renderer.js";

import { SubMenu, Category, SlideBanner, GenreBest } from "../views/views.js";
import { renderCarousel } from "./carousel.js";

const renderSubMenu = () => {
    $(".sub-menu").innerHTML = new SubMenu({
        menus: datas.subMenu.webtoon.menuNames,
    }).getHtml();
};

export const renderHome = () => {
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
