import { TopicComponent } from "../component/TopicComponent.js";
import { ImagePosterComponent } from "../component/ImagePosterComponent.js";

export const RowListContainer = (menuObj, contents) => {
    return /* html */ `
        <div class="rowList ${menuObj.name}">
            ${TopicComponent(menuObj.title)}
            <div class="rowList__inner">
                ${contents.length ? contents.reduce((prev, cur) => prev += ImagePosterComponent('col', menuObj, cur), '') : ''}
            </div>
        </div>`;
}
