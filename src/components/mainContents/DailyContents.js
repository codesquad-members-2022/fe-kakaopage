import {
  AppDownloadLink,
  MainBanner,
  MainNav,
  SubBanner,
} from '../index.js';
import { convertStringToHTML } from '../../utils.js';

const DailyContents = () => {

  const div = convertStringToHTML('<div class="main-contents"></div>');
  const components = [
    MainNav(),
    MainBanner(),
    SubBanner(),
    AppDownloadLink(),
  ];

  div.append(...components);

  return div;
};

export default DailyContents;