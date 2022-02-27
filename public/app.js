
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

bannerClickEventHandler();
function bannerClickEventHandler() {
    const leftButton = document.querySelector('#banner-left-icon');
    const rightButton = document.querySelector('#banner-right-icon');
    const slides = document.querySelectorAll('.aside__banner-slide');
    const slideLists = document.querySelector('.aside__banner-slide-list');
    const size = slides.length;
    const width =  document.querySelector('.aside__banner-slide').clientWidth;

    let transform = 0;
    const min = -((size-1) * width);
    leftButton.addEventListener(('click'), () => {
        transform -= width;
        if(transform < min) transform = 0;
        slideLists.style.transform = `translateX(${transform}px)`
    })

    rightButton.addEventListener(('click'), () => {
        transform += width;
        if(transform > 0) transform = min;
        slideLists.style.transform = `translateX(${transform}px)`
    })
}

// 버튼을 누를때만 동작하는 함수
// 수정해야함.

import { renderBase } from './component/base.js';
import { renderHome } from './pages/home.js';
import { renderWeekdays } from './pages/weekdays.js';
import { renderWebtoon } from './pages/webtoon.js';

