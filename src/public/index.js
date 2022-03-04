import { navEvent } from "./events/navEvent.js";
import { footerEvent } from "./events/footerEvent.js";
import { handleCategoryMenu } from "./views/handleCategoryMenu.js";
import { handleCarousel } from "./views/handleCarousel.js";

const init = () => {
    // 처음에 로드될 메뉴
    handleCategoryMenu('요일연재');
    handleCarousel();
    // DOM이 다 그려지는 시점에 이벤트 리스너 달기

    navEvent.categoryClick();
    navEvent.weekClick();
    footerEvent.detailSlide();
}

init();