import { createContentsSection } from "../components/contents-section.js";
import { createEventListnerGenreNav } from "../genre-nav.js";
import { webtoonMain } from "../index.js"
import romanceTopData from "../data/webtoon/home/romance-top.js";
import { createContentVerticalSmall } from "../components/content-vertical-small.js";
import { createHomeDayNav } from "../components/home-day-nav.js";
import { createEventSlide } from "../components/event-slide.js";
import { createBannerSection } from "../components/banner-section.js";

function renderWebtoonMain() {
    const mainContainer = document.querySelector('main .container');
    mainContainer.innerHTML = webtoonMain;
    mainContainer.appendChild(createBannerSection());
    const sectionDatas = [
        { id: 'day-top-section', header: '요일 연재 TOP <span class="number-of-contents">(1,624)</span>' },
        { id: 'new-work-top-section', header: '기대신작 TOP' },
        { id: 'romance-top-section', header: '로맨스 TOP' },
        { id: 'romance-fantasy-top-section', header: '로판 TOP' },
        { id: 'drama-top-section', header: '드라마 TOP' },
        { id: 'bl-gl-top-section', header: 'BL/GL TOP' },
        { id: 'boy-top-section', header: '소년 TOP' },
        { id: 'action-top-section', header: '액션무협 TOP' },
        { id: 'daily-ranking-section', header: '일간 랭킹' },
        { id: 'recommend-event-section', header: '추천 이벤트' },
    ];
    sectionDatas.forEach(sectionData => {
        mainContainer.appendChild(createContentsSection(sectionData));
    });
    mainContainer.querySelector('#day-top-section .contents-header').after(createHomeDayNav());
    // 로맨스 TOP
    const romanceTopWrapper = mainContainer.querySelector('#romance-top-section .contents-wrapper');
    romanceTopData.forEach(data => {
        romanceTopWrapper.appendChild(createContentVerticalSmall(data));
    });

    mainContainer.querySelector('#recommend-event-section .contents-wrapper').appendChild(createEventSlide());
    createEventListnerGenreNav();
}

export { renderWebtoonMain };