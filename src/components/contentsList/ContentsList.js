import { ContentsListItem } from '../index.js';

const ContentsList = (contentsList) => {
  return `<ul class="contents-list small">
            ${contentsList.reduce((prev, cur) => prev += ContentsListItem(cur), '')}
          </ul>`
}

export default ContentsList;