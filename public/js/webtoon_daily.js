
import { select, addClass, removeClass } from "./util.js";
//import { webtoonData } from "./webtoonData.js"

let webtoonData;

function createDailyDiv() {
    const dailyDiv = document.createElement('div');
    dailyDiv.className = "margin-center daily"
    dailyDiv.innerHTML = `<ul class="l-center daily__nav">
                          </ul>
                          <div class="l-inline daily__contents">
                          </div>`
    const $main = select('.main')
    $main.insertBefore(dailyDiv, null)
}

function createDailyNav() {

    createDailyDiv();

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
    // addOn 된 경우에는 실행되지 않아서 한번 선택된 tab 에서는 이벤트가 발생하지 않는다.
    if($daily__button.className === 'daily__button') {
        removeClass('daily__button-on')
        addClass($daily__button, 'daily__button-on')
        createDailyContent($daily__button)
    }
}

// on class 를 가진 노드가 1개이므로 굳이 순회하면서 찾을 필요가 없다.
// function removeOn(target) {
//     const $$daily__button = document.querySelectorAll(`.${target.className}`)
//     $$daily__button.forEach((node) => node.classList.remove('daily__button-on'))
// }

function createDailyContent(target) {
    const clickedDay = target.innerText;
    let template = getDailyTemplate(clickedDay);
    const $dailyContents = select('.daily__contents');
    template = template.repeat(5);
    $dailyContents.innerHTML = template;
}

function getDailyTemplate(day) {
    let template = '';
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
    const week = ['일', '월', '화', '수', '목', '금', '토'];
    const today = week[date.getDay()];
    const $$daily__button = document.querySelectorAll('.daily__button');
    $$daily__button.forEach((node) => {
        if(node.innerText === today) {
            addClass(node, 'daily__button-on');
            createDailyContent(node);
        }
    })
}

let count = 0;
export function initWebtoonDaily() {
    return fetch('http://localhost:3000/webtoon/webtoonData')
            .then(response => response.json()) //parser ?
            .then(data => {
                webtoonData = data;
                createDailyNav();
                createTodayContent();
                listenEvent();
            })
}
