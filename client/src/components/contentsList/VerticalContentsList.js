import { VerticalContentsListItem } from '../index.js';

const VerticalContentsList = (contentsList) => {
  return `<ol class="contents-list vertical">
            ${contentsList.reduce((prev, cur, idx) => prev += VerticalContentsListItem(idx + 1, cur), '')}
          </ol>`;
};

export default VerticalContentsList;