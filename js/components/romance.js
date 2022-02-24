import { romanceData } from '../data/romance-data.js';
import { contents } from '../contents.js';

export default function addHTML() {
  document.querySelector('.changed').innerHTML = `
  ${contents.makeImageSection(romanceData.mainImage)} 
  ${contents.makeThreeMenu(romanceData.threeMenu)}
  <section class="section dp-flex mg-t-20">
  ${contents.makeTitle(romanceData.todayRcmnd)}
  ${contents.makeLongImageWebtoon(romanceData.firstRcmnd)}
  ${contents.makeLongImageWebtoon(romanceData.secondRcmnd)}
  ${contents.makeLongImageWebtoon(romanceData.thirdRcmnd)}
  ${contents.makeLongImageWebtoon(romanceData.fourthRcmnd)}
  </section>
  ${contents.makeAdvert(romanceData.webtoonAdvert)}
  <section class="section dp-flex mg-t-20">
  ${contents.makeTitle(romanceData.romanceTOP)}
  ${contents.makeRanking(romanceData.rank1st)} 
  ${contents.makeRanking(romanceData.rank2st)}
  ${contents.makeRanking(romanceData.rank3st)}
  </section>;
  `;
}
