
import { select } from "./util.js";
import { contentsData } from "./webtoonData.js";

export function initContents() {
    createContents();
    listenEvent();
}

export function createContents() {
    const $contents = document.createElement('div');
    $contents.className = 'contents';
    $contents.innerHTML = `<div class="contents__viewer"></div>
                            <button type="button" class="contents__prevButton"></button>
                            <button type="button" class="contents__nextButton"></button>`

    const $main = select('.main')
    $main.appendChild($contents)

    const $contentsViewer = select('.contents__viewer')
    contentsData.forEach((content) => $contentsViewer.innerHTML += getContentsTemplate(content))
}

function listenEvent() {
    const $prevButton = select('.contents__prevButton');
    const $nextButton = select('.contents__nextButton');
    const $viewer = select('.contents__viewer')

    $prevButton.addEventListener('click', (e) => handleClick(e.target, $viewer));
    $nextButton.addEventListener('click', (e) => handleClick(e.target, $viewer));
    autoSlide($viewer)
}

// 전역으로 해야만 가능..?
let current = 0;
const imageWidth = 647.7

function handleClick(target, $viewer) {
    if(target.className === 'contents__prevButton' ) {
        slideLeft($viewer);
    }
    else if(target.className === 'contents__nextButton') {
        slideRight($viewer);
    }
}

function slideLeft(target) {
    current -= imageWidth
    animateTranslateX(target, current)
}

function slideRight(target) {
    current += imageWidth
    animateTranslateX(target, current)
}

function animateTranslateX(target, distance) {
    target.style.transform = `translateX(${distance}px)`
    target.style.transitionProperty = `transform`
    target.style.transitionDuration = `2s`
}

function autoSlide(target) {
    let count = 1;
    let setTimer = setInterval(function() {
        console.log(count)
        slideLeft(target)
        count += 1;
        if(count > 2) {
            return clearTimer(setTimer)
        }
        }, 3000)
}

function clearTimer(timer) {
    clearInterval(timer)
}

function getContentsTemplate(object) {
    let template = ``;
    template += `<div class="contents__wrap">
                    <img class="contents__img" src=${object.src} alt=${object.title}>
                    <div class="contents__text">
                        <div class="text__name">${object.title}</div>
                        <div class="text__info">
                            <div class="text__event">이벤트</div>
                            <span class="text__info-style">웹툰</span>
                            <span class="text__info-style">|</span>
                            <span class="text__info-style">${object.views}</span>
                        </div>
                    </div>
                    <div class="contents__sentence">
                        ${object.desc}
                    </div>
                </div>`

    return template
}


