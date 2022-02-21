
import { webtoonData } from "./webtoonData.js"

function select(selector) {
    return document.querySelector(selector)
}

function createDailyNav() {
    const days = ['월', '화', '수', '목', '금', '토', '일', '전체']
    const $daily__nav = select('.daily__nav')
    let template = ``;
    days.forEach((day) => template += `<li><button type="button" class="daily__button">${day}</button></li>`)
    $daily__nav.innerHTML = template
}

// 이벤트 버블링 사용해보기.
function listenEvent() {
    const $daily__nav = select('.daily__nav')
    $daily__nav.addEventListener('click', (e) => (handleClick(e)));
}

function handleClick(e) {
    const $daily__button = e.target;
    // button box 클릭 시에만 실행하도록 범위 지정.
    if($daily__button.className === 'daily__button') {
        removeOn($daily__button)
        addOn($daily__button)
        createDailyContent($daily__button)
    }
}


// 기존에 on 은 모두 삭제하고 클릭된 노드만 on
function addOn(target) {
    target.className += ' daily__button-on' // 한칸 띄고 넣어야함.
}

function removeOn(target) {
    const $$daily__button = document.querySelectorAll(`.${target.className}`)
    $$daily__button.forEach((node) => node.classList.remove('daily__button-on'))
}

function createDailyContent(target) {
    const clickedDay = target.innerText;
    let template = getDailyTemplate(clickedDay)
    const $dailyContents = select('.daily__contents')
    template = template.repeat(5)
    $dailyContents.innerHTML = template
}

function getDailyTemplate(day) {
    let template = ''
    webtoonData.forEach(function(data) {
        if(day === '전체' || data.day.includes(day)) {
            if(data.rank < 6) {
                template +=
                    `<div class="daily__content">
                <div class="content__inner">
                    <img class="daily__img" src="${data.src}" alt="${data.title}">
                    <div class="daily__bar">${data.rank}위</div>
                </div>
                <div class="daily__title">${data.title}</div>
                <div class="daily__views">${data.views}만명</div>
            </div>`
            }
            else{
                template +=
                    `<div class="daily__content">
                <div class="content__inner">
                    <img class="daily__img" src="${data.src}" alt="${data.title}">
                    <div class="daily__bar">
                        <img src="./images/ico-thumbnail-star.svg" alt="별">
                        ${data.rating}
                    </div>
                </div>
                <div class="daily__title">${data.title}</div>
                <div class="daily__views">${data.views}만명</div>
            </div>`
            }

        }
    })
    return template;
}

function createTodayContent() {
    const date = new Date();
    const week = ['일', '월', '화', '수', '목', '금', '토']
    const today = week[date.getDay()];
    const $$daily__button = document.querySelectorAll('.daily__button')
    $$daily__button.forEach((node) => {
        if(node.innerText === today) {
            addOn(node);
            createDailyContent(node);
        }
    })
}

function initWebtoon() {
    createDailyNav()
    createTodayContent()
    listenEvent()
}

initWebtoon();