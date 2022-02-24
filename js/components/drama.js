import { dramaData } from '../data/drama-data.js';
import { contents } from '../contents.js';
export default function addHTML() {
  document.querySelector('.changed').innerHTML = `
  ${contents.makeImageSection(dramaData.mainImage)}
  ${contents.makeThreeMenu(dramaData.threeMenu)}
  <section class="section dp-flex mg-t-20">
  ${contents.makeTitle(dramaData.todayRcmnd)}
  ${contents.makeLongImageWebtoon(dramaData.firstRcmnd)}
  ${contents.makeLongImageWebtoon(dramaData.secondRcmnd)}
  ${contents.makeLongImageWebtoon(dramaData.thirdRcmnd)}
  ${contents.makeLongImageWebtoon(dramaData.fourthRcmnd)}
  </section>
  <section class="section dp-flex mg-t-20">
  ${contents.makeTitle(dramaData.dramaTOP)}
  ${contents.makeRanking(dramaData.rank1st)}
  ${contents.makeRanking(dramaData.rank2st)}
  ${contents.makeRanking(dramaData.rank3st)}
  </section>;
  <section class="section dp-flex mg-t-20">
  ${contents.makeTitle(dramaData.nowUp)}
  ${contents.makeWebtoonInfo(dramaData.firstNowUp)}
  ${contents.makeWebtoonInfo(dramaData.secondNowUp)}
  ${contents.makeWebtoonInfo(dramaData.thirdNowUp)}
  ${contents.makeWebtoonInfo(dramaData.fourthNowUp)}
  </section>;
  `;
}
