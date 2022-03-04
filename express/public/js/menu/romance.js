import { romanceData } from '../data/menu-data/romance-data.js';
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
