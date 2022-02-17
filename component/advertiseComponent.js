import { createEl } from "../js/utils.js";

export const advertiseComponent = (images) => {
    const advertiseWrapper = createEl("article");
    const leftDiv = createEl("div");
    const centerDiv = createEl("div");
    const rightDiv = createEl("div");
    
    advertiseWrapper.classList.add('advertise');
    leftDiv.classList.add('advertise__left');
    centerDiv.classList.add('advertise__center');
    rightDiv.classList.add('advertise__right');

    advertiseWrapper.appendChild(leftDiv);
    advertiseWrapper.appendChild(centerDiv);
    advertiseWrapper.appendChild(rightDiv);

    return advertiseWrapper.outerHTML;
}