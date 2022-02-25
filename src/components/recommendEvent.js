import { getHeaderTemplate } from "./section/workSection.js";
import { recommendEventData } from "../data/recommendEventData.js";
import { START_SLIDE_INDEX } from "../constant.js";
import { getRecommendEventControllerTemplate } from "./slide.js";

export const renderRecommendEvent = (genre) => {
    const eventData = recommendEventData[genre];
    const recommendEvent = document.createElement('section');
    recommendEvent.className = 'recommend-event-section';
    const headerTemplate = getHeaderTemplate('recommendEvent');
    const contentWrapperTemplate = getContentWrapperTemplate(eventData);
    recommendEvent.innerHTML = headerTemplate + contentWrapperTemplate;
    document.querySelector('.tab-contents').appendChild(recommendEvent);
}

const getContentWrapperTemplate = (eventData) => {
    const contentTemplate = getEventContentsTemplate(eventData);
    const controllerTemplate = getRecommendEventControllerTemplate('recommend-event', START_SLIDE_INDEX + 1, eventData.length);
    return `
        <div class='recommend-event-wrapper'>
            ${contentTemplate + controllerTemplate}
        </div>
    `
}

const getEventContentsTemplate = (eventData) => {
    return `
        <ul class='recommend-event__contents'>
            ${getRecommendEventSlideTemplate(eventData, START_SLIDE_INDEX)}
        </ul>
    `
}

const getRecommendEventSlideTemplate = (eventData, currIndex) => {
    const prevIndex = currIndex - 1 < 0 ? eventData.length - 1 : currIndex - 1;
    const nextIndex = currIndex + 1 >= eventData.length ? 0 : currIndex + 1;
    const indexSeries = [prevIndex, currIndex, nextIndex];
    const recommendEventSlideTemplate = indexSeries.map(index => getEventContentTemplate(eventData[index])).join('');
    return recommendEventSlideTemplate;
}

const getEventContentTemplate = (data) => {
    return `
        <li class='recommend-event__content'>
            <a href='#'>
                <div class='banner__img-wrapper'><img class='banner__img' src=${data.src}></img></div>
            </a>
        </li>
    `
}
