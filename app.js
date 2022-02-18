
function renderBody() {
    const bodyEl = document.querySelector('body');
    bodyEl.innerHTML += renderBase();
}
renderBody();
const navListsEl = document.querySelectorAll('.nav__list');
const main = document.querySelector('main');

const listNmaesForHome = ['오늘 UP', '오늘 신작', '오리지널', '완결까지 정주행', '독립운동가 웹툰', '오늘랭킹'];

navListsEl.forEach((navList) => {
    navList.addEventListener(('click'), (e) => {
        if(!e.target.classList.contains('active')) {
            navListsEl.forEach((navList) => {
                navList.classList.remove('active');
            })
            main.innerHTML = '';
            e.target.classList.add('active');

            if(e.target.textContent === "요일") {
                main.innerHTML += renderWeekdays_base();
                addWeekdays_ArticleSection(10);
            } else if(e.target.textContent === "홈") {
                // main.innerHTML += renderHome_base();
                main.innerHTML += renderMidButton(listNmaesForHome);
                // console.log(renderMidButton(listNmaesForHome));
                // list에 들어가는 만큼, button을 출력함.
                main.innerHTML += renderArticle('article__weekdays-top', '요일연재 TOP')

                append('article__weekdays-top', renderHome_ArticelNav());
                append('article__weekdays-top', renderArticleHeader());
                append('article__weekdays-top', renderArticleSections(10))

                main.innerHTML += renderArticle('article__books5')
                append('article__books5', renderArticleHeader());
                append('article__books5', renderArticleSections(5));
                textConvertor('article__books5 h2', "로맨스 TOP");
                // 로맨스 top 부분
            }
        }
    })
})

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
//     .then(res => console.log(res))

import { renderBase, renderArticle, renderArticleSections, renderMidButton } from './common.js'
import { renderHome_base } from './home.js';
import { renderWeekdays_base, addWeekdays_ArticleSection } from './weekdays.js';
