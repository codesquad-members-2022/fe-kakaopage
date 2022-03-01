import { footer } from "./footer.js";
import { nav } from "./nav.js"
import { handleCategoryMenu } from "./handleCategoryMenu.js";
import { handleCarousel } from "./handleCarousel.js";
import { getWebtoonData } from "./utils.js";

const init = () => {
    // 처음에 로드될 메뉴
    handleCategoryMenu('요일연재');
    handleCarousel();
    // DOM이 다 그려지는 시점에 이벤트 리스너 달기
    // gnb listener
    nav.categoryClick();
    nav.weekClick();

    // footer listener
    footer.detailSlide();
    // getWebtoonData('https://korea-webtoon-api.herokuapp.com/kakao-page/');
}

init();