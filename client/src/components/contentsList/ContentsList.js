import { BannerItem, ContentsListItem } from '../index.js';

const ContentsList = (listType, contentsList) => {
  return `<ul class="contents-list ${listType}">
            ${contentsList.length ? 
                contentsList.reduce((prev, cur, idx) => {
                  return prev += listType === 'small' ?
                    ContentsListItem(cur) :
                    BannerItem(idx + 1, cur);
                }, '') :
                '<li class="guide-text">No Data</li>'}
          </ul>`
}

export default ContentsList;
