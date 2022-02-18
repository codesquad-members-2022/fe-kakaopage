import { createEl } from "../js/utils.js";
import { ImagePosterComponent } from "../component/ImagePosterComponent.js";

export const weekListContainer = (obj, contents) => {
    const wrapper = createEl("div");
    wrapper.classList.add("weeks");
    for(let i = 0; i < contents.length; i++) {
        wrapper.appendChild(ImagePosterComponent(contents[i]));
    }
    return wrapper.outerHTML;
}