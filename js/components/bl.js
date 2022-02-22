import { blData } from '..//data/bl-data.js';
import { makeImageSection } from '../function/contents.js';
import { makeMenu } from '../function/contents.js';
import { makeTitle } from '../function/contents.js';
import { makeWebtoonInfo } from '../function/contents.js';
import { makeRanking } from '../function/contents.js';
import { makeAdvert } from '../function/contents.js';
import { makeFiveWebtoon } from '../function/contents.js';
export default function addHTML() {
  document.querySelector('.changed').innerHTML = `
  ${makeImageSection(blData[0])}
  ${makeMenu(blData[1])}
  <section class="section dp-flex mg-t-20">
    ${makeTitle(blData[2])}
    ${makeWebtoonInfo(blData[3])}
    ${makeWebtoonInfo(blData[4])}
    </section>;
    <section class="section dp-flex mg-t-20">
    ${makeTitle(blData[5])}
    ${makeRanking(blData[6])}
    ${makeRanking(blData[7])}
    ${makeRanking(blData[8])}
    </section>;
    ${makeAdvert(blData[9])}
    <section class="section dp-flex mg-t-20">
    ${makeTitle(blData[10])}
    ${makeFiveWebtoon(blData[11])}
    ${makeFiveWebtoon(blData[12])}
    ${makeFiveWebtoon(blData[13])}
    ${makeFiveWebtoon(blData[14])}
    ${makeFiveWebtoon(blData[15])}
    </section>;
    `;
}
