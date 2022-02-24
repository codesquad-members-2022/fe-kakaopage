import { martialArtsData } from '../data/martial-arts-data.js';
import { contents } from '../contents.js';

export default function addHTML() {
  document.querySelector('.changed').innerHTML = `
  ${contents.makeImageSection(martialArtsData.mainImage)} 
  ${contents.makeThreeMenu(martialArtsData.threeMenu)}
  <section class="section dp-flex mg-t-20">
  ${contents.makeTitle(martialArtsData.todayRcmnd)}
  ${contents.makeLongImageWebtoon(martialArtsData.firstRcmnd)}
  ${contents.makeLongImageWebtoon(martialArtsData.secondRcmnd)}
  ${contents.makeLongImageWebtoon(martialArtsData.thirdRcmnd)}
  ${contents.makeLongImageWebtoon(martialArtsData.fourthRcmnd)}
  </section>
  ${contents.makeAdvert(martialArtsData.webtoonAdvert)}
  <section class="section dp-flex mg-t-20">
  ${contents.makeTitle(martialArtsData.martialArtsTOP)}
  ${contents.makeRanking(martialArtsData.rank1st)} 
  ${contents.makeRanking(martialArtsData.rank2st)}
  ${contents.makeRanking(martialArtsData.rank3st)}
  </section>;
  `;
}
