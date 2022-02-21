import { homeData } from './data.js';
import { makeImageSection } from './contents.js';
import { makeMenu } from './contents.js';
import { makeAdvert } from './contents.js';
import { makeTitle } from './contents.js';
import { makeDate } from './contents.js';
import { addTag } from './contents.js';
import { makeNewThings } from './contents.js';
import { makeFiveWebtoon } from './contents.js';
import { makeRanking } from './contents.js';
import { makeEvent } from './contents.js';

export default function addHTML() {
  document.querySelector('.changed').innerHTML = `
  ${makeImageSection(homeData[0])}
  ${makeMenu(homeData[1])}
  ${makeAdvert(homeData[2])}
  <section class="section dp-flex mg-t-20">
  ${makeTitle(homeData[3])}
  ${makeDate(homeData[4])}
  ${addTag(homeData[5])}
  ${makeFiveWebtoon(homeData[6])}
  ${makeFiveWebtoon(homeData[7])}
  ${makeFiveWebtoon(homeData[8])}
  ${makeFiveWebtoon(homeData[9])}
  ${makeFiveWebtoon(homeData[10])}
  ${makeFiveWebtoon(homeData[11])}
  ${makeFiveWebtoon(homeData[12])} 
  ${makeFiveWebtoon(homeData[13])} 
  ${makeFiveWebtoon(homeData[14])}
  ${makeFiveWebtoon(homeData[15])}
  </section>

  <section class="section dp-flex mg-t-20">
  ${makeTitle(homeData[16])}
  ${makeNewThings(homeData[17])}
  ${makeNewThings(homeData[18])}
  </section>

  <section class="section dp-flex mg-t-20"> 
  ${makeTitle(homeData[19])}
  ${makeFiveWebtoon(homeData[20])}  
  ${makeFiveWebtoon(homeData[21])}  
  ${makeFiveWebtoon(homeData[22])}  
  ${makeFiveWebtoon(homeData[23])}  
  ${makeFiveWebtoon(homeData[24])}  
  </section>

  <section class="section dp-flex mg-t-20"> 
  ${makeTitle(homeData[25])}
  ${makeFiveWebtoon(homeData[26])}  
  ${makeFiveWebtoon(homeData[27])}  
  ${makeFiveWebtoon(homeData[28])}  
  ${makeFiveWebtoon(homeData[29])}  
  ${makeFiveWebtoon(homeData[30])}
  </section>

  <section class="section dp-flex mg-t-20">
  ${makeTitle(homeData[31])}
  ${makeRanking(homeData[32])}
  ${makeRanking(homeData[33])}
  ${makeRanking(homeData[34])}
  </section>

  <section class="section dp-flex mg-t-20">
  ${makeTitle(homeData[35])}
  ${makeEvent(homeData[36])}
  </section>
  `;
}
