import { homeData } from '../data/home-data.js';
import { makeImageSection } from '../function/contents.js';
import { makeMenu } from '../function/contents.js';
import { makeAdvert } from '../function/contents.js';
import { makeTitle } from '../function/contents.js';
import { makeDate } from '../function/contents.js';
import { makeNewThings } from '../function/contents.js';
import { makeFiveWebtoon } from '../function/contents.js';
import { makeRanking } from '../function/contents.js';
import { makeEvent } from '../function/contents.js';

export default function addHTML() {
  document.querySelector('.changed').innerHTML = `
  ${makeImageSection(homeData[0])}
  ${makeMenu(homeData[1])}
  ${makeAdvert(homeData[2])}
  <section class="section dp-flex mg-t-20">
  ${makeTitle(homeData[3])}
  ${makeDate(homeData[4])}
  ${makeFiveWebtoon(homeData[5])}
  ${makeFiveWebtoon(homeData[6])}
  ${makeFiveWebtoon(homeData[7])}
  ${makeFiveWebtoon(homeData[8])}
  ${makeFiveWebtoon(homeData[9])}
  ${makeFiveWebtoon(homeData[10])}
  ${makeFiveWebtoon(homeData[11])} 
  ${makeFiveWebtoon(homeData[12])} 
  ${makeFiveWebtoon(homeData[13])}
  ${makeFiveWebtoon(homeData[14])}
  </section>
  <section class="section dp-flex mg-t-20">
  ${makeTitle(homeData[15])}
  ${makeNewThings(homeData[16])}
  ${makeNewThings(homeData[17])}
  </section>
  <section class="section dp-flex mg-t-20"> 
  ${makeTitle(homeData[18])}
  ${makeFiveWebtoon(homeData[19])}  
  ${makeFiveWebtoon(homeData[20])}  
  ${makeFiveWebtoon(homeData[21])}  
  ${makeFiveWebtoon(homeData[22])}  
  ${makeFiveWebtoon(homeData[23])}  
  </section>

  <section class="section dp-flex mg-t-20"> 
  ${makeTitle(homeData[24])}
  ${makeFiveWebtoon(homeData[25])}  
  ${makeFiveWebtoon(homeData[26])}  
  ${makeFiveWebtoon(homeData[27])}  
  ${makeFiveWebtoon(homeData[28])}  
  ${makeFiveWebtoon(homeData[29])}
  </section>

  <section class="section dp-flex mg-t-20">
  ${makeTitle(homeData[30])}
  ${makeRanking(homeData[31])}
  ${makeRanking(homeData[32])}
  ${makeRanking(homeData[33])}
  </section>

  <section class="section dp-flex mg-t-20">
  ${makeTitle(homeData[34])}
  ${makeEvent(homeData[35])}
  </section>
  `;
}
