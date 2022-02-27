
import { select } from "./util.js";
import { contentsData } from "./webtoonData.js";

// 전역변수를 사용하지 않는 방법은 뭘까..?
let index;
let setTimer;
const startIndex = 1;
let transitionCheck = false;

export function initContents() {
    createContents();
    createCloneNode();
    listenEvent();
    autoSlide();
}

function listenEvent() {
    const $contents = select('.contents');
    const $viewer = select('.contents__viewer');
    index = startIndex;
    animateReset($viewer, index);
    $contents.addEventListener('click', (e) => handleClick(e.target, $viewer));
    $viewer.addEventListener('transitionend', (e) => {
        console.log(e.target);
        transitionCheck = false
    });
}

function handleClick(target, $viewer) {
    const $$contentsWrap = [...$viewer.children];
    const FirstNodeCloneIndex = $$contentsWrap.length - 1;
    const LastNodeCloneIndex = 0;
    const realLastIndex = $$contentsWrap.length -2;
    const realFirstIndex = 1;

    if(transitionCheck) return;

    if(target.className === 'contents__prevButton') {
        transitionCheck = true;
        if(index <= LastNodeCloneIndex) {
            index = realLastIndex
            animateReset($viewer, index)
        }
        index --;
        animateTranslateX($viewer);
    }
    else if(target.className === 'contents__nextButton') {
        transitionCheck = true;
        if(index >= FirstNodeCloneIndex) {
            index = realFirstIndex;
            animateReset($viewer, index)
        }
        index ++;
        animateTranslateX($viewer);
    }
}

function animateTranslateX(target)  {
    const width = target.clientWidth * -1;
    target.style.transform = `translateX(${index * width}px)`;
    target.style.transition = 'transform 0.4s ease-out';
}

function animateReset(target, index) {
    const width = target.clientWidth * -1;
    target.style.transition = 'none';
    target.style.transform = `translateX(${index * width}px)`;
}

function autoSlide() {
    const $viewer = select('.contents__viewer');
    const $$contentsWrap = [...$viewer.children];
    const FirstNodeCloneIndex = $$contentsWrap.length - 1;
    const realFirstIndex = 1;

    setTimer = setInterval(function() {
        if(transitionCheck) return;
        transitionCheck = true;
        if (index >= FirstNodeCloneIndex) {
            index = realFirstIndex
            animateReset($viewer, index)
        }
        index++
        animateTranslateX($viewer)
    }, 2500)
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


