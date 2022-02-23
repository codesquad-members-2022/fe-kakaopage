import { BannerItem, ContentsListItem } from '../index.js';

const ContentsList = (list, contentsList) => {
  return `<ul class="contents-list ${list}">
            ${contentsList.length ? 
                contentsList.reduce((prev, cur) => {
                  return prev += list === 'small' ?
                    ContentsListItem(cur) :
                    BannerItem(cur);
                }, '') :
                '<li class="guide-text">No Data</li>'}
          </ul>`
}

export default ContentsList;