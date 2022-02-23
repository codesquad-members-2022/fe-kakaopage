<<<<<<< HEAD
const weekdaysData = {
    nav: ['월', '화', '수', '목', '금', '토', '일', '완결'],
    parms: [ 'week?day=0', 'week?day=1', 'week?day=2', 'week?day=3', 'week?day=4', 'week?day=5', 'week?day=6', 'finished'],
    sectionNums : 15,
}

async function renderWeekdays() {
    const mainEL = document.querySelector('main');
    mainEL.innerHTML += renderWeekdaysBase();
    document.querySelector('.nav__weekdays-list').classList.add('active');
    await displayWeekLists(0, weekdaysData.sectionNums);
    navClickEventHandler('nav__weekdays-lists', weekdaysData.nav, displayWeekLists, weekdaysData.sectionNums);
}

function renderWeekdaysBase() {
    return renderNav('nav__weekdays', weekdaysData.nav)  + renderWeekdaysClasifyNav() + renderWeekdaysArticle();
}

function renderWeekdaysClasifyNav(total = 0) {
=======


function renderWeekdays_base() {
    return renderWeekdays_nav() + renderWeekdays_clasifyNav() + renderWeekdays_Article()
}

function renderWeekdays_nav() {
    return `    <nav class="nav__weekdays">
    <ul class="nav__weekdays-ul">
        <li class="nav__weekdays-list active">월</li>
        <li class="nav__weekdays-list">화</li>
        <li class="nav__weekdays-list">수</li>
        <li class="nav__weekdays-list">목</li>
        <li class="nav__weekdays-list">금</li>
        <li class="nav__weekdays-list">토</li>
        <li class="nav__weekdays-list">일</li>
        <li class="nav__weekdays-list">완결</li>
    </ul>
</nav>`
}

function renderWeekdays_clasifyNav() {
>>>>>>> 118ddf10b6a1812fc3b35c2cb9735f7c77a729bb
    return `<nav class="nav__clasify">
    <div class="nav__clasify-buttons-wrapper">
        <button class="nav__clasify-button">
            전체
        </button>
        <button class="nav__clasify-button">
            웹툰
        </button>
        <button class="nav__clasify-button">
            <i class="fas fa-solid fa-clock"></i>
            웹툰
        </button>
    </div>

    <div class="nav__clasfify-toggle-wrapper">
        <button class="nav__clasify-toggle">
<<<<<<< HEAD
            전체 (${(total)})
            <i class="fas fa-solid fa-arrow-down"></i>
        </button>
    </div>
</nav>`;
}

function renderWeekdaysArticle() {
    return `<article class="article__weekdays">
</article>`;
}

function displayWeekLists(index, sectionNums) {
    fetch(`https://korea-webtoon-api.herokuapp.com/kakao-page/${weekdaysData.parms[index]}`)
    .then(res => res.json())
    .then(json => {
        let html ='';
        for(let i=0; i<sectionNums; i++) {
            html += renderSections(json[i].title, json[i].img, json[i].url, i+1);
        }
    document.querySelector('.nav__clasify-toggle').innerHTML = `전체 (${json.length})   <i class="fas fa-solid fa-arrow-down"></i>`;
    document.querySelector('.article__weekdays').innerHTML = '';
    document.querySelector('.article__weekdays').innerHTML += renderSectionWrapper(html);
    });
}

export { renderWeekdays }
import { renderNav } from './component/nav.js'
import { renderSections, renderSectionWrapper } from './component/section.js';
import { navClickEventHandler } from './utils.js'
=======
            전체 (138)
            <i class="fas fa-solid fa-arrow-down"></i>
        </button>
    </div>
</nav>`
}

function renderWeekdays_Article() {
    return `<article class="article__weekdays">
    <div class="section__book-wrapper">
    </div>
</article>`
}

function addWeekdays_ArticleSection(num) {
    const sectionBookWrapperEl = document.querySelector('.section__book-wrapper');

    for(let i = 0; i < num; i++) {
        sectionBookWrapperEl.innerHTML += renderWeekdays_ArticleSection();
    }
}

function renderWeekdays_ArticleSection() {
    return `  <section class="section__book">
    <div class="section__book-image-wrapper">
        <img src="/useimages/환골탈태.png" alt="">
        <div class="section__book-image-infor">
            <span>1위</span>
            <i class="fas fa-solid fa-clock"></i>
        </div>
    </div>
    <div class="section__book-text-wrapper">
        <h4>어쩌고 저쩌고</h4>
        <span><i class="fas fa-user-alt"></i> 28.5만명</span>
    </div>
</section>`
}
// 나중에 무한스크롤해서 section 추가되는거 구현하면 필요한 부분

export {renderWeekdays_base, addWeekdays_ArticleSection}
>>>>>>> 118ddf10b6a1812fc3b35c2cb9735f7c77a729bb
