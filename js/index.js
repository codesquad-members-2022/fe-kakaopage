import { footer } from "./footer.js";
import { category } from "./category.js"

const init = () => {
    // gnb listener
    category.menuClick();

    // footer listener
    footer.detailSlide();
}
init();