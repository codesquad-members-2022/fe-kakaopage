import { getHeaderTemplate } from "./section/workSection.js";
import { recommendEventData } from "../../server/data/recommendEventData.js";
import { START_SLIDE_INDEX } from "../constant.js";
import { getSlidesTemplate, getRecommendEventControllerTemplate, activateBtns, activateSlide } from "./slide.js";

export const renderRecommendEvent = (genre) => {
    const eventData = recommendEventData[genre];
    const recommendEvent = document.createElement('section');
    recommendEvent.className = 'recommend-event-section';
    recommendEvent.dataset.name = 'recommend-event';
    const headerTemplate = getHeaderTemplate('recommendEvent');
    const contentWrapperTemplate = getContentWrapperTemplate(eventData);
    recommendEvent.innerHTML = headerTemplate + contentWrapperTemplate;
    document.querySelector('.tab-contents').appendChild(recommendEvent);

    activateRecommendEvent(recommendEvent, eventData);
}

const getContentWrapperTemplate = (eventData) => {
    const contentTemplate = getEventContentsTemplate(eventData);
    const controllerTemplate = getRecommendEventControllerTemplate('recommend-event', START_SLIDE_INDEX + 1, eventData.length);
    return `
        <div class='recommend-event-wrapper slides'>
            ${contentTemplate + controllerTemplate}
        </div>
    `
}

const getEventContentsTemplate = (eventData) => {
    return `
        <ul class='recommend-event__contents'>
            ${getSlidesTemplate(eventData, START_SLIDE_INDEX, getEventContentTemplate)}
        </ul>
    `
}

const getEventContentTemplate = (data) => {
    return `
        <li class='recommend-event__content' data-index=${data.index}>
            <a>
                <div class='banner__img-wrapper'><img class='banner__img' src=${data.src}></img></div>
            </a>
        </li>
    `
}

const activateRecommendEvent = (bannerData) => {
    const recommendEvent = document.querySelector('.recommned-event-section')
    activateSlide(recommendEvent, bannerData, getRecommendEventSlideTemplate);
    activateBtns(recommendEvent);
}