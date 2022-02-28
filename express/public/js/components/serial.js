import { serialData } from '../data/menu-data.js/serial-data.js';
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
  <section class="section dp-flex mg-t-20">
  ${contents.makeTitle(serialData.webtoonInfo)}
  ${contents.makeDate(serialData.date)}
  ${contents.makeFiveWebtoon(serialData.rank1st)}
  ${contents.makeFiveWebtoon(serialData.rank2st)}
  ${contents.makeFiveWebtoon(serialData.rank3st)}
  ${contents.makeFiveWebtoon(serialData.rank4st)}
  ${contents.makeFiveWebtoon(serialData.rank5st)}
  ${contents.makeFiveWebtoon(serialData.firstRcmnd)}
  ${contents.makeFiveWebtoon(serialData.secondRcmnd)}
  ${contents.makeFiveWebtoon(serialData.thirdRcmnd)}
  ${contents.makeFiveWebtoon(serialData.fourthRcmnd)}
  ${contents.makeFiveWebtoon(serialData.fifthRcmnd)}
  </section>
`;
}
