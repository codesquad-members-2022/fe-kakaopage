
import { select } from "./util.js";
import { contentsData } from "./webtoonData.js";

export function initContents() {
    createContents();
    createCloneNode();
    listenEvent();
}

function createContents() {
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

function createCloneNode() {
    const $contentsViewer = select('.contents__viewer')
    const $cloneFirstNode = $contentsViewer.firstElementChild.cloneNode(true);
    $cloneFirstNode.id = 'firstClone'
    const $cloneLastNode = $contentsViewer.lastElementChild.cloneNode(true);
    $cloneLastNode.id = 'lastClone'

    $contentsViewer.prepend($cloneLastNode);
    $contentsViewer.appendChild($cloneFirstNode)

}

function listenEvent() {
    const $contents = select('.contents');
    const $viewer = select('.contents__viewer')
    animateTranslateX($viewer)
    $contents.addEventListener('click', (e) => handleClick(e.target, $viewer));
    //autoSlide($viewer)
}

// 전역으로 해야만 가능..?
let index = 1

function handleClick(target, $viewer) {
    const $$contentsWrap = [...$viewer.children];
    const maxIndex = $$contentsWrap.length - 1 // first clone node index
    const minIndex = 0 // last clone node index
    const realLastIndex = $$contentsWrap.length -2;
    const realFirstIndex = 1;

    if(target.className === 'contents__prevButton') {
        if(index <= minIndex) {
            index = realLastIndex
            animateReset($viewer, index)
        }
        index --
        animateTranslateX($viewer)

    }
    else if(target.className === 'contents__nextButton') {
        if(index >= maxIndex) {
            index = realFirstIndex
            animateReset($viewer, index)
        }
        index ++
        animateTranslateX($viewer)

    }
}

function animateTranslateX(target)  {
    const width = target.clientWidth * -1;
    target.style.transform = `translateX(${index * width}px)`
    //target.style.transition = 'transform 2s ease-out'
    target.style.transitionProperty = `transform`
    target.style.transitionDuration = `2s`
}

function animateReset(target, index) {
    const width = target.clientWidth * -1;
    target.style.transition = 'none';
    target.style.transform = `translateX(${index * width}px)`
}

function autoSlide(target) {
    let count = 1;
    let setTimer = setInterval(function() {
        slideLeft(target)
        count += 1;
        if(count > 2) {
            clearTimer(setTimer)
        }
        }, 3000)
}

function clearTimer(timer) {
    clearInterval(timer)
}

function getContentsTemplate(object, index) {
    let template = ``;
    template += `<div class="contents__wrap">
                    <img class="contents__img" src=${object.src} alt=${object.title}>
                    <div class="contents__text">
                        <div class="text__name">${object.title}</div>
                        <div class="text__info">
                            <div class="text__event">이벤트</div>
                            <span class="text__info-style">웹툰</span>
                            <span class="text__info-style">|</span>
                            <span class="text__info-style">${object.views}만명</span>
                        </div>
                    </div>
                    <div class="contents__sentence">
                        ${object.desc}
                    </div>
                </div>`

    return template
}


