import { webtoonData } from './data.js';
import { makeImageSection } from './contents.js';
import { makeDate } from './contents.js';
import { makeWebtoonInfo } from './contents.js';
import { makeTitle } from './contents.js';

export default function addHTML() {
  document.querySelector('.changed').innerHTML = `
  ${makeImageSection(webtoonData[0])}
  
  <section class="section dp-flex pd-10 mg-t-20">
  ${makeDate(webtoonData[1])} 
  ${makeWebtoonInfo(webtoonData[2])}
  ${makeWebtoonInfo(webtoonData[3])}
  ${makeWebtoonInfo(webtoonData[4])}
  ${makeWebtoonInfo(webtoonData[5])}
  ${makeWebtoonInfo(webtoonData[6])}
  </section>
  <section class="section dp-flex pd-5 mg-t-20">
  ${makeTitle(webtoonData[7])}
  ${makeWebtoonInfo(webtoonData[8])}
  ${makeWebtoonInfo(webtoonData[9])}
  ${makeWebtoonInfo(webtoonData[10])}
  ${makeWebtoonInfo(webtoonData[11])}
  ${makeWebtoonInfo(webtoonData[12])}
  </section>`;
}
