const weekdaysData = {
    nav: ['월', '화', '수', '목', '금', '토', '일', '완결'],
}

async function renderWeekdays() {
    const mainEL = document.querySelector('main');
    mainEL.innerHTML += renderWeekdaysBase();
    document.querySelector('.nav__weekdays-list').classList.add('active');
    await displayWeekLists(0, 15);

    const weekdaysListsEL = document.querySelector('.nav__weekdays-lists');
    weekdaysListsEL.addEventListener(('click'), ({target}) => {
        if(!target.classList.contains('active') ) {
            [...weekdaysListsEL.children].forEach((weekdaysList) => {
                weekdaysList.classList.remove('active');
            })
            // children은 HTMLCOLLECTION이라서, 배열 메서드를 사용할 수 없었음.
            target.classList.add('active');
            document.querySelector('.article__weekdays').innerHTML = '';
        }

        // console.log(target.textContent);
        if(target.textContent === '월') displayWeekLists(0, 15);
        if(target.textContent === '화') displayWeekLists(1, 15);
        if(target.textContent === '수') displayWeekLists(2, 15);
        if(target.textContent === '목') displayWeekLists(3, 15);
        if(target.textContent === '금') displayWeekLists(4, 15);
        if(target.textContent === '토') displayWeekLists(5, 15);
        if(target.textContent === '일') displayWeekLists(6, 15);
    })
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
</nav>`
}

function renderWeekdaysArticle() {
    return `<article class="article__weekdays">
</article>`
}

function displayWeekLists(day, sectionNums) {
    fetch(`https://korea-webtoon-api.herokuapp.com/kakao-page/week?day=${day}`)
    .then(res => res.json())
    .then(json => {
        let html ='';
        for(let i=0; i<sectionNums; i++) {
            html += renderSections(json[i].title, json[i].img, json[i].url, i+1)
        }
    document.querySelector('.nav__clasify-toggle').innerHTML = `전체 (${json.length})   <i class="fas fa-solid fa-arrow-down"></i>`;
    document.querySelector('.article__weekdays').innerHTML += renderSectionWrapper(html);
    });
}

export { renderWeekdays }
import { renderNav } from './component/nav.js'
import { renderSections, renderSectionWrapper } from './component/section.js';