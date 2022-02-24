import { createContentForms } from "./loop.js";
import { genreFunction, headerFunction } from "./render.js";

export function selectedInit(target){
    target.parentNode.childNodes.forEach(v => {
        if(v.tagName === "LI") v.classList.remove('selected')
    })
}

export function addSelected (e) {
    selectedInit(e.target)
    if (e.target.tagName === "LI") {
        e.target.classList.add('selected')
        resetFlexbox(e.target);
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

export function resetFlexbox(target){
    if(target.classList[0] === 'day'){
        const flexBox = document.getElementById('contents-box')
    
        flexBox.innerHTML = '';
        flexBox.innerHTML += `${createContentForms(10)}`;
    }
}
