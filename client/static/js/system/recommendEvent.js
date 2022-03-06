import { getHeaderTemplate } from "./workSection.js";
import { START_SLIDE_INDEX } from "../constant.js";
import { getSlidesTemplate, getRecommendEventControllerTemplate, activateBtns, activateSlide } from "../components/slide.js";

export const getRecommendEventTemplate = (recommendEventData) => {
    const headerTemplate = getHeaderTemplate('recommendEvent');
    const contentWrapperTemplate = getContentWrapperTemplate(recommendEventData);
    return `
        <section class='recommend-event-section' data-name='recommend-event'>
            ${headerTemplate}
            ${contentWrapperTemplate}
        </section>
    `
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
            ${getSlidesTemplate(eventData, START_SLIDE_INDEX, getEventContentTemplate, 'recommend-event')}
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

export const activateRecommendEvent = (bannerData) => {
    const recommendEvent = document.querySelector('.recommend-event-section');
    activateSlide(recommendEvent, bannerData, getEventContentTemplate);
    activateBtns(recommendEvent);
}