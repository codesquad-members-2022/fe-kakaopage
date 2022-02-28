import { renderNav } from '../component/nav.js'
import { renderSections, renderSectionWrapper } from '../component/section.js';
import { navClickEventHandler } from '../utils/eventHandler.js';
import { deleteInnerHTML } from '../utils/deleteInnerHTML.js';

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
        return html;
    })
    .then(html => {
        deleteInnerHTML('.article__weekdays');
        document.querySelector('.article__weekdays').innerHTML += renderSectionWrapper(html);
    })
;
}

export { renderWeekdays }