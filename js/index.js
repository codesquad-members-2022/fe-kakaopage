import { footer } from "./footer.js";
import { $ } from "./utils.js";
import { category } from "./category.js"
import { main } from "./main.js";

const init = () => {
    // gnb listener
    category.menuClick();

    // footer listener
    footer.detailSlide();

    // 처음에 로드될 데이터.

    const carousel = $(".carousel");
    carousel.insertAdjacentHTML("afterend", main.addWeeksComponent("요일연재"));
}

init();