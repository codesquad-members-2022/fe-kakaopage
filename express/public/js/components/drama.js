import { dramaData } from '../data/menu-data.js/drama-data';
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
