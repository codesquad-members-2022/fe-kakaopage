import { romanceData } from '../data/romance-data.js';
import { makeImageSection } from '../function/contents.js';
import { makeThreeMenu } from '../function/contents.js';
import { makeTitle } from '../function/contents.js';
import { makeLongImageWebtoon } from '../function/contents.js';
import { makeAdvert } from '../function/contents.js';
import { makeRanking } from '../function/contents.js';
export default function addHTML() {
  document.querySelector('.changed').innerHTML = `
  ${makeImageSection(romanceData[0])} 
  ${makeThreeMenu(romanceData[1])}
  <section class="section dp-flex mg-t-20">
  ${makeTitle(romanceData[2])}
  ${makeLongImageWebtoon(romanceData[3])}
  ${makeLongImageWebtoon(romanceData[4])}
  ${makeLongImageWebtoon(romanceData[5])}
  ${makeLongImageWebtoon(romanceData[6])}
  </section>
  ${makeAdvert(romanceData[7])}
  <section class="section dp-flex mg-t-20">
  ${makeTitle(romanceData[8])}
  ${makeRanking(romanceData[9])}
  ${makeRanking(romanceData[10])}
  ${makeRanking(romanceData[11])}
  </section>;
  `;
}
