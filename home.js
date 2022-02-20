
const homeData = {
    'midButton' : ['오늘 UP', '오늘 신작', '오리지널', '완결가지 정주행', '독립운동가 웹툰', '오늘 랭킹'],
    'articleName' : ['요일연재 TOP', '로맨스 TOP', '일일랭킹 TOP'],
    'articleNav' : ['월', '화', '수', '목', '금', '토', '일', '완결'],
}


// 공통적으로 사용되는 부분
function renderHomeLayout() {
    let home = '';
    home += renderMidButton(homeData['midButton']);
    home += renderArticle('article__weekdays-top', '요일연재 TOP');
    home += renderArticle('article__books5', '로맨스 TOP');
    home += renderArticle('article__ranking3', '일일랭킹 TOP');
    home += renderPtomotionBanner();

    return home;
}

function renderPtomotionBanner() {
    return ` <aside class="aside__recommend-banner">
    <header class="article__header">
        <div class="article__header-wrapper">
            <div class="article__header-text-wrapper">
                <h2>추천 이벤트</h2>
            </div>
            <button class="article__header-button">더보기 ></button>
        </div>
    </header>
    <div class="aside__reommend-banner-image-wrapper">
        <img src="./useimages/왕실교사 하이네 경품.png" alt="image">
    </div>
</aside>`
}

export { renderHomeLayout, homeData };
import { renderMidButton, renderNav , renderArticle, renderSection} from './common.js'
import {append} from './utils.js'