import { blData } from '..//data/bl-data.js';
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
