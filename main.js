import { createPageAction, createPageBL, createPageDaily, createPageDrama, createPageHome, createPageRofan, createPageRomance, createPageTeen, createPageWebtoon } from "./createPage.js";
import { addClickEventToElement, addToContents, pickFromArr, randomView } from "./util.js";

const main = () => {
    createPageHome();
    addClickEventToElement('genre-home', createPageHome)
    addClickEventToElement('genre-daily', createPageDaily)
    addClickEventToElement('genre-webtoon', createPageWebtoon)
    addClickEventToElement('genre-teen', createPageTeen)
    addClickEventToElement('genre-drama', createPageDrama)
    addClickEventToElement('genre-romance', createPageRomance)
    addClickEventToElement('genre-rofan', createPageRofan)
    addClickEventToElement('genre-action', createPageAction)
    addClickEventToElement('genre-BL', createPageBL)
}

main();