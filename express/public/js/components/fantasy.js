import { fantasyData } from '../data/fantasy-data.js';
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
