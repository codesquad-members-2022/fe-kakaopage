import { renderBase } from './component/base.js';
import { renderHome } from './pages/home.js';
import { renderWeekdays } from './pages/weekdays.js';
import { renderWebtoon } from './pages/webtoon.js';
import { setUpSlide, slideEventHandler } from './utils/slider.js';

function renderBody() {
    const bodyEl = document.querySelector('body');
    bodyEl.innerHTML += renderBase();
}

renderBody();
setUpSlide();
slideEventHandler();


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
