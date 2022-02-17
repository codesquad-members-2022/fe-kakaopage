import { createEl } from "../js/utils.js";

export const topicComponent = (title) => {
    const topicWrapper = createEl("div");
    const titleElement = createEl("h1");
    const seeSpan = createEl("span");

    topicWrapper.classList.add("topic");
    titleElement.classList.add("topic__title");

    titleElement.textContent = title;
    seeSpan.textContent = "더보기";

    topicWrapper.appendChild(titleElement);
    topicWrapper.appendChild(seeSpan);

    return topicWrapper.outerHTML;
}