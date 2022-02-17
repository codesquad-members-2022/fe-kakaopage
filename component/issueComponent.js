import { createEl } from "../js/utils.js";

export const issueComponent = (issues) => {
    const articleEl = createEl("article");
    const innerDivEl = createEl("div");
    articleEl.classList.add("issue");
    innerDivEl.classList.add("issue__inner");
    articleEl.appendChild(innerDivEl);
    for(let i = 0; i < issues.length; i++) {
        const divEl = createEl("div");
        const spanEl = createEl("span");
        divEl.classList.add("issue__box");
        spanEl.classList.add("issue__box_text");
        spanEl.textContent = issues[i];
        divEl.appendChild(spanEl);
        innerDivEl.appendChild(divEl);
    }
    return articleEl.outerHTML;
}