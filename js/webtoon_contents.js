
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
    $prevButton.addEventListener('click', (e) => handleClick(e.target));
    $nextButton.addEventListener('click', (e) => handleClick(e.target))
}

function handleClick(target) {
    if(target.className === 'contents__prevButton' ) {
        moveLeft(target);
    }
    else if(target.className === 'contents__nextButton') {
        moveRight(target);
    }
}

let location = 0;

function moveLeft(target) {
    //const $wrap = target.closest('div>div')
    const $viewer = select('.contents__viewer')
    location -= 647.7
    $viewer.style.transform = `translateX(${location}px)`
    $viewer.style.transitionProperty = `transform`
    $viewer.style.transitionDuration = `2s`

}

function moveRight(target) {
    const $viewer = select('.contents__viewer')
    location += 647.7
    $viewer.style.transform = `translateX(${location}px)`
    $viewer.style.transitionProperty = `transform`
    $viewer.style.transitionDuration = `2s`
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

// createElement 에 innerHTML 을 사용하기 위해서는 HTML 에 위치시켜야한다. (appendChild 등)

export function createCategory() {
    const $category = document.createElement('div');
    $category.className = 'category';
    $category.innerHTML = `<ul class="l-center category__menus"></ul>`

    const $main = select('.main')
    $main.appendChild($category)

    const $categoryMenus = select('.category__menus')
    const categoryMenus = ['오늘 UP', '오늘 신작', '오리지널', '완결까지 정주행', '독립운동가 웹툰', '오늘 랭킹']
    let template = ``;
    categoryMenus.forEach((menu) => template += `<li class="category__menu">${menu}</li>`)
    $categoryMenus.innerHTML = template;
}

