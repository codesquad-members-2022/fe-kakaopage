import {dailyHeader} from "./dailyHeader/dailyHeader.js";
import {HomeHeader} from "./HomeHeader/HomeHeader.js";
import {comicItem} from "./comicsGrid/comicsGrid.js";
import {infographic} from "./infographic.js";
import {images} from "./images.js";
import {AdBanner} from "./AdBanner/AdBanner.js";
import {GrayCube} from "./GrayCube/GrayCube.js";

const main = document.querySelector('main.mainContent');
const nav = main.firstElementChild;
const section = nav.nextElementSibling;

const renderGrid = ()=>{
    const gridBox =document.querySelector('.comicsGrid');
    for(let i=0; i<20; i++){
        gridBox.insertAdjacentHTML('afterbegin', comicItem(images, infographic));
    }
}

let template=''
nav.addEventListener('click', (e) => {
    const li =e.target.closest('li');
    nav.querySelector('.selected').classList.remove('selected')
    li.classList.add('selected');
    if (!li.classList.contains('toon')) {
        if(template)return;
       template = section.innerHTML;
       section.innerHTML= "<span>This is Dummy Page</span>";
    } else {
        if(!template)return;
        section.innerHTML = template;
        template = "";
    }
})
const topBanner = section.querySelector('.TopBanner');

topBanner.addEventListener('click', (e)=>{
    const span = e.target.closest('span');
    topBanner.querySelector('.selected').classList.remove('selected');
    span.classList.add('selected');
    if(span.classList.contains('daily')){
        const dailyTab = topBanner.querySelector('.daily');
        const grid = document.querySelector('.comicsGrid');
        let prev = grid.previousElementSibling;
        while(prev){ //grid 이전의 노드를 삭제
            grid.parentNode.removeChild(prev);
            prev = grid.previousElementSibling;
        }
        let parentPrev = grid.parentElement.previousElementSibling
        while(parentPrev.className!=='catchphrase'){
            parentPrev.parentNode.removeChild(parentPrev);
            parentPrev = grid.parentElement.previousElementSibling;
        }
        grid.parentElement.insertAdjacentHTML('beforebegin',dailyHeader());
        grid.innerHTML= '';
        renderGrid();
    }

})
topBanner.querySelector('.home').addEventListener('click', (e)=>{
    const comicsBox = document.querySelector('.freeComics');
    const grid =comicsBox.querySelector('.comicsGrid')
    let prev = comicsBox.previousElementSibling;
    while(prev.className !== 'catchphrase') {
        prev.parentNode.removeChild(prev);
        prev= comicsBox.previousElementSibling;
    }
    comicsBox.insertAdjacentHTML('afterbegin', HomeHeader());
    comicsBox.insertAdjacentHTML('beforebegin', GrayCube());
    comicsBox.insertAdjacentHTML('beforebegin', AdBanner());
    grid.innerHTML ='';
    renderGrid();
})
renderGrid();


