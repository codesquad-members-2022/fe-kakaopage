import { ImagePosterComponent } from "../component/ImagePosterComponent.js"
import { TopicComponent } from "../component/TopicComponent.js"

export const ColumnListContainer = (menuObj, contents) => {
    return /* html */`
        <div id="${menuObj.name}" class="columnList">
            ${TopicComponent(menuObj.title)}
            <div class="columnList__inner">
                ${contents.length ? contents.reduce((prev, cur) => prev += ImagePosterComponent('row', menuObj, cur), ''): ''}
            </div>
        </div>
    `
}