import { ContentsHeader, VerticalContentsList } from '../index.js';
import { Webtoons } from '../../data';
import { convertStringToHTML } from '../../utils.js';

const DailyRanking = () => {

  const title = '일간 랭킹 TOP';
  const filteredWebtoons = () => {
    const sortedWebtoons = Webtoons.sort((a, b) => {
      return b.readers - a.readers;
    });
    return sortedWebtoons.slice(0, 3);
  };

  return convertStringToHTML(
          `<section class="contents daily-ranking">
            ${ContentsHeader(title)}
            ${VerticalContentsList(filteredWebtoons())}
          </section>`);
};

export default DailyRanking;