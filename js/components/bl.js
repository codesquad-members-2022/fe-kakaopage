import { blData } from '..//data/bl-data.js';
import { contents } from '../contents.js';

export default function addHTML() {
  document.querySelector('.changed').innerHTML = `
  ${contents.makeImageSection(blData.mainImage)}
  ${contents.makeMenu(blData.sixMenu)}
  <section class="section dp-flex mg-t-20">
  ${contents.makeTitle(blData.todayRcmnd)}
  ${contents.makeWebtoonInfo(blData.firstRcmnd)}
  ${contents.makeWebtoonInfo(blData.secondRcmnd)}
  </section>;
  <section class="section dp-flex mg-t-20">
  ${contents.makeTitle(blData.blTOP)}
  ${contents.makeRanking(blData.rank1st)}
  ${contents.makeRanking(blData.rank2st)}
  ${contents.makeRanking(blData.rank3st)}
  </contents.section>;
  ${contents.makeAdvert(blData.webtoonAdvert)}
  <section class="section dp-flex mg-t-20">
  ${contents.makeTitle(blData.twelveHoursFree)}
  ${contents.makeFiveWebtoon(blData.firstFree)}
  ${contents.makeFiveWebtoon(blData.secondFree)}
  ${contents.makeFiveWebtoon(blData.thirdFree)}
  ${contents.makeFiveWebtoon(blData.fourthFree)}
  ${contents.makeFiveWebtoon(blData.fifthFree)}
  </section>;
  `;
}
