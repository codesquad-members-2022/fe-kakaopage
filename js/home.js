import { homeData } from './data.js';
import { makeImageSection } from './contents.js';
import { makeMenu } from './contents.js';
import { makeAdvert } from './contents.js';
import { makeDate } from './contents.js';
import { makeTitle } from './contents.js';
import { addTag } from './contents.js';
import { makeTodayRanking } from './contents.js';
import { makeTodayWebtoon } from './contents.js';
import { makeNewThings } from './contents.js';
import { genreTop } from './contents.js';
import { makeRanking } from './contents.js';
import { makeEvent } from './contents.js';

export default function addHTML() {
  document.querySelector('.changed').innerHTML = `
  ${makeImageSection(homeData[0])}
  ${makeMenu(homeData[1])}
  ${makeAdvert(homeData[2])}
  <section class="today_top">
  ${makeDate(homeData[3])}
  ${makeTitle(homeData[4])}
  ${addTag(homeData[5])}
  ${makeTodayRanking(homeData[6])}
  ${makeTodayRanking(homeData[7])}
  ${makeTodayRanking(homeData[8])}
  ${makeTodayRanking(homeData[9])}
  ${makeTodayRanking(homeData[10])}
  ${makeTodayWebtoon(homeData[11])}
  ${makeTodayWebtoon(homeData[12])} 
  ${makeTodayWebtoon(homeData[13])} 
  ${makeTodayWebtoon(homeData[14])}
  ${makeTodayWebtoon(homeData[15])}
  </section>

  <section class="new_things">
  ${makeTitle(homeData[16])}
  ${makeNewThings(homeData[17])}
  ${makeNewThings(homeData[18])}
  </section>

  <section class="drama_section"> 
  ${makeTitle(homeData[19])}
  ${genreTop(homeData[20])}  
  ${genreTop(homeData[21])}  
  ${genreTop(homeData[22])}  
  ${genreTop(homeData[23])}  
  ${genreTop(homeData[24])}  
  </section>

  <section class="boy_section"> 
  ${makeTitle(homeData[25])}
  ${genreTop(homeData[26])}  
  ${genreTop(homeData[27])}  
  ${genreTop(homeData[28])}  
  ${genreTop(homeData[29])}  
  ${genreTop(homeData[30])}
  </section>

  <section class="ranking_section">
  ${makeTitle(homeData[31])}
  ${makeRanking(homeData[32])}
  ${makeRanking(homeData[33])}
  ${makeRanking(homeData[34])}
  </section>

  <section class="event">
  ${makeTitle(homeData[35])}
  ${makeEvent(homeData[36])}

  </section>
  `;
}
