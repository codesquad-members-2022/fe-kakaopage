import { createEl } from "../js/utils.js";

export const issueComponent = (issues) => {
    const wrapper = createEl("article");
    const inner = createEl("div");

    wrapper.classList.add("issue");
    inner.classList.add("issue__inner");

    wrapper.appendChild(inner);
    for(let i = 0; i < issues.length; i++) {
        const box = createEl("div");
        const text = createEl("span");
        
        box.classList.add("issue__box");
        text.classList.add("issue__box_text");

        text.textContent = issues[i];
        
        box.appendChild(text);
        inner.appendChild(box);
    }
    return wrapper.outerHTML;
}