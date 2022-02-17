import { createEl } from "../js/utils.js";
import { topicComponent } from "../component/topicComponent.js";
import { ImagePosterComponent } from "../component/ImagePosterComponent.js";

export const rowListContainer = (obj, contents) => {
    const wrapper = createEl("div");
    wrapper.classList.add("rowList", obj.name);
    wrapper.insertAdjacentHTML('afterbegin', topicComponent(obj.title));
    wrapper.insertAdjacentHTML('beforeend', ImagePosterComponent(contents));
    return wrapper.outerHTML;
}