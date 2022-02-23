
function renderBody() {
    const bodyEl = document.querySelector('body');
    bodyEl.innerHTML += renderBase();
}
<<<<<<< HEAD
renderBody();

const navListsEl = document.querySelectorAll('.nav-list');
const main = document.querySelector('main');

navListsEl.forEach((navList) => {
    navList.addEventListener(('click'), ({target}) => {
        if(!target.classList.contains('active')) {
=======

renderBody();
const navListsEl = document.querySelectorAll('.nav__list');
const main = document.querySelector('main');

navListsEl.forEach((navList) => {
    navList.addEventListener(('click'), (e) => {
        if(!e.target.classList.contains('active')) {
>>>>>>> 118ddf10b6a1812fc3b35c2cb9735f7c77a729bb
            navListsEl.forEach((navList) => {
                navList.classList.remove('active');
            })
            main.innerHTML = '';
<<<<<<< HEAD
            target.classList.add('active');

            if(target.textContent === "요일") {
                renderWeekdays();
            } 
            if(target.textContent === "홈") {
                renderHome();
            }
            if(target.textContent === "웹툰") {
                renderWebtoon();
=======
            e.target.classList.add('active');

            if(e.target.textContent === "요일") {
                main.innerHTML += renderWeekdays_base();
                addWeekdays_ArticleSection(10);
            } else if(e.target.textContent === "홈") {
                main.innerHTML += renderHome_base();
                main.innerHTML += renderArticle('article__weekdays-top')
                append('article__weekdays-top', renderHome_ArticelNav());
                append('article__weekdays-top', renderArticleHeader());
                append('article__weekdays-top', renderArticleSections(10))

                main.innerHTML += renderArticle('article__books5')
                append('article__books5', renderArticleHeader());
                append('article__books5', renderArticleSections(5));
                textConvertor('article__books5 h2', "로맨스 TOP");
                // 로맨스 top 부분
>>>>>>> 118ddf10b6a1812fc3b35c2cb9735f7c77a729bb
            }
        }
    })
})

<<<<<<< HEAD

import { renderBase } from './component/base.js';
import { renderHome } from './home.js';
import { renderWeekdays } from './weekdays.js';
import { renderWebtoon } from './webtoon.js';
=======
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

import { renderBase, renderArticle, renderArticleHeader, renderArticleSections } from './common.js'
import { renderHome_base } from './home.js';
import { renderWeekdays_base, addWeekdays_ArticleSection } from './weekdays.js';
>>>>>>> 118ddf10b6a1812fc3b35c2cb9735f7c77a729bb
