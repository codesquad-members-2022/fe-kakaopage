import { footer } from "./footer.js";
import { $ } from "./utils.js";
import { category } from "./category.js"
import { ContentListInfos } from "./ContentListInfos.js";

const init = () => {
    // gnb listener
    category.menuClick();

    // footer listener
    footer.detailSlide();

    // 처음에 로드될 데이터.

    const carousel = $(".carousel");
    carousel.insertAdjacentHTML("afterend", ContentListInfos.addWeeksComponent(2));
}

init();