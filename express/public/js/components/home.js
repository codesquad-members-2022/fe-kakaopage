import { homeData } from '../data/menu-data/home-data.js';
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
  ${contents.makeMenu(homeData.sixMenu)}
  ${contents.makeAdvert(homeData.contestAdvert)}
  <section class="section dp-flex mg-t-20">
  ${contents.makeTitle(homeData.serialTOP)}
  ${contents.makeDate(homeData.data)}
  ${contents.makeFiveWebtoon(homeData.rank1st)}
  ${contents.makeFiveWebtoon(homeData.rank2st)}
  ${contents.makeFiveWebtoon(homeData.rank3st)}
  ${contents.makeFiveWebtoon(homeData.rank4st)}
  ${contents.makeFiveWebtoon(homeData.rank5st)}
  ${contents.makeFiveWebtoon(homeData.firstRcmnd)}
  ${contents.makeFiveWebtoon(homeData.secondRcmnd)} 
  ${contents.makeFiveWebtoon(homeData.thirdRcmnd)} 
  ${contents.makeFiveWebtoon(homeData.fourthRcmnd)}
  ${contents.makeFiveWebtoon(homeData.fifthRcmnd)}
  </section>
  <section class="section dp-flex mg-t-20">
  ${contents.makeTitle(homeData.newWorkTOP)}
  ${contents.makeNewThings(homeData.firstNewWork)}
  ${contents.makeNewThings(homeData.secondNewWork)}
  </section>
  <section class="section dp-flex mg-t-20"> 
  ${contents.makeTitle(homeData.romanceTOP)}
  ${contents.makeFiveWebtoon(homeData.firstRomance)}
  ${contents.makeFiveWebtoon(homeData.secondRomance)}
  ${contents.makeFiveWebtoon(homeData.thirdRomance)}
  ${contents.makeFiveWebtoon(homeData.fourthRomance)}
  ${contents.makeFiveWebtoon(homeData.fifthRomance)}
  </section>
  <section class="section dp-flex mg-t-20"> 
  ${contents.makeTitle(homeData.fantasyTOP)}
  ${contents.makeFiveWebtoon(homeData.firstFantasy)}
  ${contents.makeFiveWebtoon(homeData.secondFantasy)}
  ${contents.makeFiveWebtoon(homeData.thirdFantasy)}
  ${contents.makeFiveWebtoon(homeData.fourthFantasy)}
  ${contents.makeFiveWebtoon(homeData.fifthFantasy)}
  </section>
  <contents.section class="section dp-flex mg-t-20">
  ${contents.makeTitle(homeData.todayRanking)}
  ${contents.makeRanking(homeData.ranking1st)}
  ${contents.makeRanking(homeData.ranking2st)}
  ${contents.makeRanking(homeData.ranking3st)}
  </contents.section>
  <section class="section dp-flex mg-t-20">
  ${contents.makeTitle(homeData.event)}
  ${contents.makeEvent(homeData.eventUrl)}
  </section>
  `;
}
