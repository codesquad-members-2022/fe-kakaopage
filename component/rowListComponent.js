import { createEl } from "../js/utils.js";
import { topicComponent } from "./topicComponent.js";
import { ImagePosterComponent } from "./ImagePosterComponent.js";

export const rowListComponent = (obj, contents) => {
    const wrapper = createEl("div");
    wrapper.classList.add("rowList", obj.name);
    wrapper.insertAdjacentHTML('afterbegin', topicComponent(obj.title));
    wrapper.insertAdjacentHTML('beforeend', ImagePosterComponent(contents));
    return wrapper.outerHTML;
}