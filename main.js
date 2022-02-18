import { createPageAction, createPageBL, createPageDaily, createPageDrama, createPageHome, createPageRofan, createPageRomance, createPageTeen, createPageWebtoon } from "./createPage.js";
import { addClickEventToElement, addToContents, pickFromArr, randomView } from "./util.js";

const main = () => {
    createPageHome();
    addClickEventToElement('#genre-home', createPageHome)
    addClickEventToElement('#genre-daily', createPageDaily)
    addClickEventToElement('#genre-webtoon', createPageWebtoon)
    addClickEventToElement('#genre-teen', createPageTeen)
    addClickEventToElement('#genre-drama', createPageDrama)
    addClickEventToElement('#genre-romance', createPageRomance)
    addClickEventToElement('#genre-rofan', createPageRofan)
    addClickEventToElement('#genre-action', createPageAction)
    addClickEventToElement('#genre-BL', createPageBL)
}

main();

// function selectedInit(className){
//     var li = document.getElementsByClassName(className)
//     for(let i = 0; i < li.length; i++){
//         li[i].classList.remove('selected')
//     }
// }

// var home = document.getElementById('genre-home')
// console.log(home)

// home.addEventListener('click', function(e){
//     selectedInit('genre-nav-li')
//     e.target.classList.add('selected')
// })

// var daily = document.getElementById('genre-daily')
// daily.addEventListener('click', function(e){
//     selectedInit('genre-nav-li')
//     e.target.classList.add('selected')
// })