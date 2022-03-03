import * as datas from "/js/data/datas.js";
import { getJSON } from "/js/tools/getJSON.js";
import { render } from "/js/tools/renderer.js";

import { Category, SlideBanner, GenreBest } from "/js/views/views.js";
import { renderCarousel } from "/js/page/carousel/carousel.js";
import { renderSubMenu } from "/js/page/sub-menu/render.js";

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
