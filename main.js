import { createPageAction, createPageBL, createPageDaily, createPageDrama, createPageHome, createPageInit, createPageRofan, createPageRomance, createPageTeen, createPageWebtoon } from "./createPage.js";
import { addClickEventToElement, addSelectedTo, addToContents, pickFromArr, randomView } from "./util.js";

const main = () => {
    createPageInit()

}

main();

// function createInitPage () {
//     addSelectedTo('.genre-nav-li')
//     addSelectedTo('.head-nav-li')
//     createPageHome();
// }

// console.log(document.getElementById('genre-home'))
    // document.getElementById('#genre-home').classList.add('selected')