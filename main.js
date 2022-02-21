import { createPageAction, createPageBL, createPageDaily, createPageDrama, createPageHome, createPageInit, createPageRofan, createPageRomance, createPageTeen, createPageWebtoon } from "./createPage.js";
import { addClickEventToElement, addSelectedTo, addToContents, pickFromArr, randomView } from "./util.js";

const main = () => {
    createPageInit()
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

// function createInitPage () {
//     addSelectedTo('.genre-nav-li')
//     addSelectedTo('.head-nav-li')
//     createPageHome();
// }

