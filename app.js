
function renderBody() {
    const bodyEl = document.querySelector('body');
    bodyEl.innerHTML += renderBase();
}
renderBody();

const navListsEl = document.querySelectorAll('.nav-list');
const main = document.querySelector('main');

navListsEl.forEach((navList) => {
    navList.addEventListener(('click'), ({target}) => {
        if(!target.classList.contains('active')) {
            navListsEl.forEach((navList) => {
                navList.classList.remove('active');
            })
            main.innerHTML = '';
            target.classList.add('active');

            if(target.textContent === "요일") {
                renderWeekdays();
            } 
            if(target.textContent === "홈") {
                renderHome();
            }

            if(target.textContent === "웹툰") {
                renderWebtoon();
            }
        }
    })
})


import { renderBase } from './component/base.js';
import { renderHome } from './home.js';
import { renderWeekdays } from './weekdays.js';
import { renderWebtoon } from './webtoon.js';
