import { footer } from "./footer.js";
import { nav } from "./nav.js"
import { handleCategoryMenu } from "./handleCategoryMenu.js";

const init = () => {
    // 처음에 로드될 메뉴
    handleCategoryMenu('1');
    // DOM이 다 그려지는 시점에 이벤트 리스너 달기
    // gnb listener
    nav.categoryClick();
    nav.weekClick();

    // footer listener
    footer.detailSlide();
}

init();