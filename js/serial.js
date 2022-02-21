import { serialData } from './data/serial-data.js';
import { makeImageSection } from './contents.js';
import { makeTitle } from './contents.js';
import { makeDate } from './contents.js';
import { makeFiveWebtoon } from './contents.js';

export default function addHTML() {
  document.querySelector('.changed').innerHTML = `
  ${makeImageSection(serialData[0])}
  <section class="section dp-flex mg-t-20">
  ${makeTitle(serialData[1])}
  ${makeDate(serialData[2])}
  ${makeFiveWebtoon(serialData[3])}
  ${makeFiveWebtoon(serialData[4])}
  ${makeFiveWebtoon(serialData[5])}
  ${makeFiveWebtoon(serialData[6])}
  ${makeFiveWebtoon(serialData[7])}
  ${makeFiveWebtoon(serialData[8])}
  ${makeFiveWebtoon(serialData[9])} 
  ${makeFiveWebtoon(serialData[10])} 
  ${makeFiveWebtoon(serialData[11])}
  ${makeFiveWebtoon(serialData[12])}
  </section>
`;
}
