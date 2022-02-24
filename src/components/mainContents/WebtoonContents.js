import {
  AppDownloadLink,
  DailyRanking,
  MainNav,
} from '../index.js';
import { convertStringToHTML } from '../../utils.js';

const WebtoonContents = () => {

  const div = convertStringToHTML('<div class="main-contents"></div>');
  const components = [
    MainNav(),
    DailyRanking(),
    AppDownloadLink(),
  ];

  div.append(...components);

  return div;
};

export default WebtoonContents;