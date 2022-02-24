import { webtoonData } from '../data/webtoon-data.js';
import { contents } from '../html-template.js';

export default function addHTML() {
  document.querySelector('.changed').innerHTML = `
  ${contents.makeImageSection(webtoonData.mainImage)}
  <section class="section dp-flex pd-10 mg-t-20">
  ${contents.makeDate(webtoonData.data)} 
  ${contents.makeWebtoonInfo(webtoonData.firstWebtoonInfo)}
  ${contents.makeWebtoonInfo(webtoonData.secondWebtoonInfo)}
  ${contents.makeWebtoonInfo(webtoonData.thirdWebtoonInfo)}
  ${contents.makeWebtoonInfo(webtoonData.fourthWebtoonInfo)}
  ${contents.makeWebtoonInfo(webtoonData.fifthWebtoonInfo)}
  </section>
  <section class="section dp-flex pd-5 mg-t-20">
  ${contents.makeTitle(webtoonData.hotPromotion)}
  ${contents.makeWebtoonInfo(webtoonData.firstPromotion)}
  ${contents.makeWebtoonInfo(webtoonData.secondPromotion)}
  ${contents.makeWebtoonInfo(webtoonData.thirdPromotion)}
  ${contents.makeWebtoonInfo(webtoonData.fourthPromotion)}
  ${contents.makeWebtoonInfo(webtoonData.fifthPromotion)}
  </section>`;
}
