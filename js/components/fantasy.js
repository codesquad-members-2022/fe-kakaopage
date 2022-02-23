import { fantasyData } from '../data/fantasy-data.js';
import { makeImageSection } from '../function/contents.js';
import { makeThreeMenu } from '../function/contents.js';
import { makeTitle } from '../function/contents.js';
import { makeLongImageWebtoon } from '../function/contents.js';
import { makeAdvert } from '../function/contents.js';
import { makeRanking } from '../function/contents.js';

export default function addHTML() {
  document.querySelector('.changed').innerHTML = `
  ${makeImageSection(fantasyData[0])} 
  ${makeThreeMenu(fantasyData[1])}
  <section class="section dp-flex mg-t-20">
  ${makeTitle(fantasyData[2])}
  ${makeLongImageWebtoon(fantasyData[3])}
  ${makeLongImageWebtoon(fantasyData[4])}
  ${makeLongImageWebtoon(fantasyData[5])}
  ${makeLongImageWebtoon(fantasyData[6])}
  </section>
  ${makeAdvert(fantasyData[7])}
  <section class="section dp-flex mg-t-20">
  ${makeTitle(fantasyData[8])}
  ${makeRanking(fantasyData[9])}
  ${makeRanking(fantasyData[10])}
  ${makeRanking(fantasyData[11])}
  </section>;
  `;
}
