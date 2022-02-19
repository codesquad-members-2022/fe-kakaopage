import { ImagePosterComponent } from "../component/ImagePosterComponent.js";

export const WeekListContainer = (obj, contents) => {
    return `<div class="weeks">
            ${contents.length ?
                contents.reduce((prev, cur) => prev += ImagePosterComponent(cur), '') : ''}
            </div>`;
}