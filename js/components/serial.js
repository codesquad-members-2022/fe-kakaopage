import { serialData } from '../data/serial-data.js';
import { contents } from '../html-template.js';

export default function addHTML() {
  document.querySelector('.changed').innerHTML = `
  ${contents.makeImageSection(serialData.mainImage)}
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
