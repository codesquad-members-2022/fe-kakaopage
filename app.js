
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
                renderHome();
            }
        }
    })
})


function append(parentNodeClassName, child) {
    const parent = document.querySelector(`.${parentNodeClassName}`);
    parent.innerHTML += child;
    return parent;
}



import { renderBase, renderNav, renderArticle,  renderMidButton } from './common.js'
import { renderHome } from './home.js';
import { renderWeekdays_base, addWeekdays_ArticleSection } from './weekdays.js';
