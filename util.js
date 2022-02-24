import { genreFunction, headerFunction } from "./render.js";
import { createContentForms } from "./loop.js";

export function pickFromArr (arr) {
    const length = arr.length;
    const pickNum = Math.floor(Math.random() * length);

    return arr[pickNum]
}

export function randomView () {
    return (Math.floor(Math.random() * 901) + 100) / 10
}

export function addToContents(input){
    const contents = document.getElementById('contents');

    contents.innerHTML += input;
}

export function initPage(){
    const contents = document.getElementById('contents');

    contents.innerHTML = '';
}

export function addClickEventToElement(elementName, func){
    const element = document.querySelector(elementName);

    element.addEventListener("click", func)
}

export function selectedInit(){
    // target.parentNode.childNodes.forEach(v => {
    //     if(v.tagName === "LI") v.classList.remove('selected')
    // })
    const selected = document.querySelector('.selected')
}

export function addSelected (e) {
    selectedInit()
    if (e.target.tagName === "LI") {
        e.target.classList.add('selected')
        resetFlexbox(e.target);
    }
}

export function combineFormats(arr){
    const res = arr.reduce( (pre, cur) => pre + cur )

    return res;
}

export function addSelectedToday(){
    const days = document.querySelectorAll('.day')
    const today = new Date().getDay()-1;

    days[today].classList.add('selected')
}

export function resetFlexbox(target){
    if(target.classList[0] === 'day'){
        const flexBox = document.getElementById('flex-box')
    
        flexBox.innerHTML = '';
        flexBox.innerHTML += `${createContentForms(10)}`;
    }
}

export function headNavEventHandler (e) {
    const header = e.target.dataset.header

    if (header) {
        headerFunction[header]();
    }
}

export function genreNavEventHandler (e) {
    const genre = e.target.dataset.genre;

    if (genre) {
        genreFunction[genre]()
    }
}