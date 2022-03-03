import * as datas from "/js/data/datas.js";
import { getJSON } from "/js/tools/getJSON.js";
import { render } from "/js/tools/renderer.js";

import { Category, SlideBanner, GenreBest } from "/js/views/views.js";
import { renderCarousel } from "/js/page/carousel/carousel.js";
import { renderSubMenu } from "/js/page/sub-menu/render.js";

export const renderHome = () => {
    const { homeData } = datas;
    const category = new Category({ categories: homeData.category });
    const slideBanner = new SlideBanner();
    let html = "";
    html += category.getHtml();
    html += slideBanner.getHtml();

    const getGenreBestHtml = (genreName, data) => {
        const genreBest = new GenreBest({ genre: genreName, genreItem: data });
        return genreBest.getHtml();
    };

    const renderJSONData = (path) => {
        getJSON(path)
            .then((data) => (html += getGenreBestHtml("로맨스", data)))
            .then((html) => render(html))
            .catch((err) => {
                console.error(err);
                render(html);
            });
    };

    renderSubMenu();
    renderJSONData("genre/romanceTop");
    renderCarousel(datas.carouselImgs["Home"]);
};
