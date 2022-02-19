import { ContentsListItem } from '../index.js';

const ContentsList = (contentsList) => {
  return `<ul class="contents-list small">
            ${contentsList.length ? 
                contentsList.reduce((prev, cur) => prev += ContentsListItem(cur), '') :
                '<li class="guide-text">No Data</li>'}
          </ul>`
}

export default ContentsList;