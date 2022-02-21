import { dramaData } from './data/drama-data.js';
import { makeImageSection } from './contents.js';
import { makeThreeMenu } from './contents.js';
import { makeTitle } from './contents.js';
import { makeLongImageWebtoon } from './contents.js';
import { makeRanking } from './contents.js';
import { makeWebtoonInfo } from './contents.js';
export default function addHTML() {
  document.querySelector('.changed').innerHTML = `
  ${makeImageSection(dramaData[0])}
  ${makeThreeMenu(dramaData[1])}
  <section class="section dp-flex mg-t-20">
  ${makeTitle(dramaData[2])}
  ${makeLongImageWebtoon(dramaData[3])}
  ${makeLongImageWebtoon(dramaData[4])}
  ${makeLongImageWebtoon(dramaData[5])}
  ${makeLongImageWebtoon(dramaData[6])}
  </section>
  <section class="section dp-flex mg-t-20">
  ${makeTitle(dramaData[7])}
  ${makeRanking(dramaData[8])}
  ${makeRanking(dramaData[9])}
  ${makeRanking(dramaData[10])}
  </section>;
  <section class="section dp-flex mg-t-20">
  ${makeTitle(dramaData[11])}
  ${makeWebtoonInfo(dramaData[12])}
  ${makeWebtoonInfo(dramaData[13])}
  ${makeWebtoonInfo(dramaData[14])}
  ${makeWebtoonInfo(dramaData[15])}
  </section>;
  `;
}
