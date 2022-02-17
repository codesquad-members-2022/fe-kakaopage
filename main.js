import { createPageAction, createPageBL, createPageDaily, createPageDrama, createPageHome, createPageRofan, createPageRomance, createPageTeen, createPageWebtoon } from "./createPage.js";
import { createFormat0, createFormat10, createFormat11, createFormat12, createFormat1A, createFormat1B, createFormat2, createFormat3, createFormat4, createFormat5, createFormat6, createFormat7, createFormat8, createFormat9 } from "./format.js";
import { dummy } from "./sources.js";
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