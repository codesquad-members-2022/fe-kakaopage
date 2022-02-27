import { createContentForms } from "./loop.js";
import { genreFunction, headerFunction } from "./render.js";

export function selectedInit(target){
    target.parentNode.childNodes.forEach(el => {
        if(el.tagName === "LI") el.classList.remove('selected');
    })
}

export function addSelected (e) {
    selectedInit(e.target);
    if (e.target.tagName === "LI") {
        e.target.classList.add('selected');
        resetContentsbox(e.target);
    }
}

export function resetContentsbox(target){
    if(target.classList[0] === 'day'){
        const contentsBox = document.getElementById('contents-box');
    
        contentsBox.innerHTML = '';
        contentsBox.innerHTML += `${createContentForms(10)}`;
    }
}

export function headNavEventHandler (e) {
    const header = e.target.dataset.header;

    if (header) {
        headerFunction[header]();
    }
}

export function genreNavEventHandler (e) {
    const genre = e.target.dataset.genre;

    if (genre) {
        genreFunction[genre]();
    }
}
