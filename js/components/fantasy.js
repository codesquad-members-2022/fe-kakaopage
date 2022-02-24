import { fantasyData } from '../data/fantasy-data.js';
import { contents } from '../contents.js';

export default function addHTML() {
  document.querySelector('.changed').innerHTML = `
  ${contents.makeImageSection(fantasyData.mainImage)} 
  ${contents.makeThreeMenu(fantasyData.threeMenu)}
  <section class="section dp-flex mg-t-20">
  ${contents.makeTitle(fantasyData.todayRcmnd)}
  ${contents.makeLongImageWebtoon(fantasyData.firstRcmnd)}
  ${contents.makeLongImageWebtoon(fantasyData.secondRcmnd)}
  ${contents.makeLongImageWebtoon(fantasyData.thirdRcmnd)}
  ${contents.makeLongImageWebtoon(fantasyData.fourthRcmnd)}
  </section>
  ${contents.makeAdvert(fantasyData.webtoonAdvert)}
  <section class="section dp-flex mg-t-20">
  ${contents.makeTitle(fantasyData.fantasyTOP)}
  ${contents.makeRanking(fantasyData.rank1st)} 
  ${contents.makeRanking(fantasyData.rank2st)}
  ${contents.makeRanking(fantasyData.rank3st)}
  </section>;
  `;
}
