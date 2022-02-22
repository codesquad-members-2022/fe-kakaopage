import { SmallImgContainer } from '../index.js';
import { convertReader } from '../../utils.js';

const ContentsListItem = (content) => {
  return `<li class="list-item">
            <a href="#">
              ${SmallImgContainer(content)}
              <h4 class="title">${content.title}</h4>
              <span class="reader">${convertReader(content.readers)}</span>
            </a>
          </li>`;
};

export default ContentsListItem;