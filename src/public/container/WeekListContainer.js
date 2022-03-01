import { ImagePosterComponent } from "../component/ImagePosterComponent.js";

export const WeekListContainer = (obj, contents) => {
    return /* html */ `<div class="weeks">
            ${contents.length ?
                contents.reduce((prev, cur) => prev += ImagePosterComponent('col', obj, cur), '') : ''}
            </div>`;
}
