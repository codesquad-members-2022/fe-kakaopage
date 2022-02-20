
function renderBody() {
    const bodyEl = document.querySelector('body');
    bodyEl.innerHTML += renderBase();
}
renderBody();

const navListsEl = document.querySelectorAll('.nav-list');
const main = document.querySelector('main');

// const listNmaesForHome = ['오늘 UP', '오늘 신작', '오리지널', '완결까지 정주행', '독립운동가 웹툰', '오늘랭킹'];

// const weeddaysData = ['월', '화', '수', '목', '금', '토', '일', '완결'];

navListsEl.forEach((navList) => {
    navList.addEventListener(('click'), ({target}) => {
        if(!target.classList.contains('active')) {
            navListsEl.forEach((navList) => {
                navList.classList.remove('active');
            })
            main.innerHTML = '';
            target.classList.add('active');

            if(target.textContent === "요일") {
                // main.innerHTML += renderWeekdays_base();
                // addWeekdays_ArticleSection(10);
            } else if(target.textContent === "홈") {
                main.innerHTML += renderHomeLayout();
                append('article__weekdays-top', renderNav('article__nav', homeData['articleNav']));
                append('article__weekdays-top', renderSection(10));
                append('article__books5', renderSection(5));
                append('article__ranking3', addArticleRankingLists());
            }
        }
    })
})


function addArticleRankingLists() {
    return `<ol class="article__ranking3-lists">
    <li class="article__ranking3-list" value="1">
        <span class="article__ranking3-num">1</span>
        <img src="./useimages/ranking3.jpg" alt="image">
        <div class="article__ranking-list-text-wrapper">
            <h3>이번 생은 가주가 되겠습니다</h3>
            <div class="article--raking-list-mid-text-wrapper">
                <span class="article__ranking-list-text"><i class="fas fa-user-alt"></i>122.7만명</span>
                <span class="article__ranking-list-text">기다무 웹툰</span>
                <span class="article__ranking-list-text">로판</span>
                <span class="article__ranking-list-text">앤트스튜디오, 김로아</span>
            </div>
            <span class="article__ranking-list-text">월연재</span>
        </div>
    </li>
    <li class="article__ranking3-list" value="2">
        <span class="article__ranking3-num">2</span>
        <img src="./useimages/ranking3.jpg" alt="image">
        <div class="article__ranking-list-text-wrapper">
            <h3>이번 생은 가주가 되겠습니다</h3>
            <div class="article--raking-list-mid-text-wrapper">
                <span class="article__ranking-list-text"><i class="fas fa-user-alt"></i>122.7만명</span>
                <span class="article__ranking-list-text">기다무 웹툰</span>
                <span class="article__ranking-list-text">로판</span>
                <span class="article__ranking-list-text">앤트스튜디오, 김로아</span>
            </div>
            <span class="article__ranking-list-text">월연재</span>
        </div>
    </li>
    <li class="article__ranking3-list" value="3">
        <span class="article__ranking3-num">3</span>
        <img src="./useimages/ranking3.jpg" alt="image">
        <div class="article__ranking-list-text-wrapper">
            <h3>이번 생은 가주가 되겠습니다</h3>
            <div class="article--raking-list-mid-text-wrapper">
                <span class="article__ranking-list-text"><i class="fas fa-user-alt"></i>122.7만명</span>
                <span class="article__ranking-list-text">기다무 웹툰</span>
                <span class="article__ranking-list-text">로판</span>
                <span class="article__ranking-list-text">앤트스튜디오, 김로아</span>
            </div>
            <span class="article__ranking-list-text">월연재</span>
        </div>
    </li>
</ol>`
}

function textConvertor(nodeClassname, newText) {
    const node = document.querySelector(`.${nodeClassname}`);
    node.textContent = newText;
}

function append(parentNodeClassName, child) {
    const parent = document.querySelector(`.${parentNodeClassName}`);
    parent.innerHTML += child;
    return parent;
}


// fetch('https://korea-webtoon-api.herokuapp.com/kakao-page/week')
//     .then(res => res.json())
//     .then(res => console.log(res[0]))


import { renderBase, renderNav, renderArticle, renderSection, renderMidButton } from './common.js'
import { renderHomeLayout, homeData } from './home.js';
import { renderWeekdays_base, addWeekdays_ArticleSection } from './weekdays.js';
