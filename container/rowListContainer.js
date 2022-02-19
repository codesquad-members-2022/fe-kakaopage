import { TopicComponent } from "../component/TopicComponent.js";
import { ImagePosterComponent } from "../component/ImagePosterComponent.js";

export const RowListContainer = (obj, contents) => {
    return `<div class="rowList ${obj.name}">
                ${TopicComponent(obj.title)}
                <div class="rowList__inner">
                    ${contents.length ? contents.reduce((prev, cur) => prev += ImagePosterComponent(cur), '') : ''}
                </div>
            </div>`;
}