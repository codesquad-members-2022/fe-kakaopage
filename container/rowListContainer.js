import { createEl } from "../js/utils.js";
import { topicComponent } from "../component/topicComponent.js";
import { ImagePosterComponent } from "../component/ImagePosterComponent.js";

export const rowListContainer = (obj, contents) => {
    const wrapper = createEl("div");
    const innerWrapper = createEl("div");
    wrapper.classList.add("rowList", obj.name);
    innerWrapper.classList.add("rowList__inner");

    wrapper.appendChild(topicComponent(obj.title));

    for(let i = 0; i < contents.length; i++) {
        innerWrapper.appendChild(ImagePosterComponent(contents[i]));
    }
    wrapper.appendChild(innerWrapper);
    return wrapper.outerHTML;
}