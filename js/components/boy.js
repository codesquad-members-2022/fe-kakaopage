import { boyData } from '../data/boy-data.js';
import { contents } from '../html-template.js';

export default function addHTML() {
  document.querySelector('.changed').innerHTML = `
  ${contents.makeImageSection(boyData.mainImage)}
  ${contents.makeThreeMenu(boyData.threeMenu)}
  ${contents.makeAdvert(boyData.webtoonAdvert)}
  <section class="section dp-flex mg-t-20">
  ${contents.makeTitle(boyData.todayRcmnd)}
  ${contents.makeLongImageWebtoon(boyData.firstRcmnd)}
  ${contents.makeLongImageWebtoon(boyData.secondRcmnd)}
  ${contents.makeLongImageWebtoon(boyData.thirdRcmnd)}
  ${contents.makeLongImageWebtoon(boyData.fourthRcmnd)}
  </section>
  <section class="section dp-flex mg-t-20">
  ${contents.makeTitle(boyData.boyTOP)}
  ${contents.makeRanking(boyData.rank1st)}
  ${contents.makeRanking(boyData.rank2st)}
  ${contents.makeRanking(boyData.rank3st)}
  </section>;
  <section class="section dp-flex mg-t-20">
  ${contents.makeTitle(boyData.titleOriginal)}
  ${contents.makeLongImageWebtoon(boyData.firstOriginal)}
  ${contents.makeLongImageWebtoon(boyData.secondOriginal)}
  ${contents.makeLongImageWebtoon(boyData.thirdOriginal)}
  ${contents.makeLongImageWebtoon(boyData.fourthOriginal)}
  </section>
  <section class="section dp-flex mg-t-20">
  ${contents.makeTitle(boyData.todayGift)}
  ${contents.makeWebtoonInfo(boyData.firstGift)}
  ${contents.makeWebtoonInfo(boyData.secondGift)}
  ${contents.makeWebtoonInfo(boyData.thirdGift)}
  ${contents.makeWebtoonInfo(boyData.fourthGift)}
  </section>
  `;
}
