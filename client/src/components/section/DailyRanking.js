import { ContentsHeader, VerticalContentsList } from '../index.js';
import {store} from '../../data/store.js';
import { convertStringToHTML } from '../../js/util';

const DailyRanking = () => {

  const title = '일간 랭킹 TOP';
  const filteredWebtoons = () => store.webtoons
    .sort((a, b) => b.readers - a.readers)
    .slice(0, 3);

  return convertStringToHTML(
          `<section class="contents daily-ranking">
            ${ContentsHeader(title)}
            ${VerticalContentsList(filteredWebtoons())}
          </section>`);
};

export default DailyRanking;
