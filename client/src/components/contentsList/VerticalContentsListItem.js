import { VerticalImgContainer } from '../index.js';
import { convertReader, isNew } from '../../utils.js';

const VerticalContentsListItem = (rank, content) => {

  const writers = Object.values(content.writer).join(', ');
  const serialDates = content.serialDate.join(', ');

  return `<li class="list-item">
            <a href="#">
              <span class="rank">${rank}</span>
              ${VerticalImgContainer(content)}
              <div class="info-container">
                <h4>
                  ${isNew(content.serialDate) ? '<span class="badge new">N</span>' : ''}
                  ${content.ageLimit === '15' ? '<span class="badge fifteen">15</span>' : ''}
                  ${content.title}
                </h4>
                <div class="info-area">
                  <span class="reader">${convertReader(content.readers)}</span>
                  <span>${content.waitFree ? '기다무' : ''}웹툰</span>
                  <span>${content.genre}</span>
                  <span>${writers}</span>
                </div>
                <span>${serialDates} 연재</span>
              </div>
            </a>
          </li>`;
};

export default VerticalContentsListItem;