import { martialArtsData } from '../data/martial-arts-data.js';
import { makeImageSection } from '../function/contents.js';
import { makeThreeMenu } from '../function/contents.js';
import { makeTitle } from '../function/contents.js';
import { makeLongImageWebtoon } from '../function/contents.js';
import { makeAdvert } from '../function/contents.js';
import { makeRanking } from '../function/contents.js';

export default function addHTML() {
  document.querySelector('.changed').innerHTML = `
  ${makeImageSection(martialArtsData[0])} 
  ${makeThreeMenu(martialArtsData[1])}
  <section class="section dp-flex mg-t-20">
  ${makeTitle(martialArtsData[2])}
  ${makeLongImageWebtoon(martialArtsData[3])}
  ${makeLongImageWebtoon(martialArtsData[4])}
  ${makeLongImageWebtoon(martialArtsData[5])}
  ${makeLongImageWebtoon(martialArtsData[6])}
  </section>
  ${makeAdvert(martialArtsData[7])}
  <section class="section dp-flex mg-t-20">
  ${makeTitle(martialArtsData[8])}
  ${makeRanking(martialArtsData[9])}
  ${makeRanking(martialArtsData[10])}
  ${makeRanking(martialArtsData[11])}
  </section>;
  `;
}
