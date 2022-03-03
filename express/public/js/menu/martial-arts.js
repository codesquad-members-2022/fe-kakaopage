import { martialArtsData } from '../data/menu-data/martial-arts-data.js';
import { contents } from '../html-template.js';

export default function addHTML() {
  document.querySelector('.changed').innerHTML = `
  <section class="image_section mg-t-20 pos-rel">
    <div class="image_box">
      <ul class="image_container">
      </ul>
      <div class="back pos-abs">🔙</div>
      <div class="next pos-abs">🔜</div>
      <div class= "num_total pos-abs"></div>
    </div>
  </section>
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
