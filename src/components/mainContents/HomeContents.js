import {
  AnticipatedWork,
  AppDownloadLink,
  CategoryMenu,
  DailyRanking,
  DailySeriesRanking,
  GenreTop,
  MainBanner,
  MainNav,
  RecommendEvent,
  SubBanner,
} from '../index.js';
import { Categories } from '../../data';
import { convertStringToHTML } from '../../utils.js';

const HomeContents = () => {

  const div = convertStringToHTML('<div class="main-contents"></div>');
  const components = [
    MainNav(),
    MainBanner(),
    CategoryMenu(Categories.home),
    SubBanner(),
    DailySeriesRanking(),
    AnticipatedWork(),
    GenreTop('로맨스'),
    GenreTop('로판'),
    GenreTop('드라마'),
    GenreTop('BL/GL'),
    GenreTop('소년'),
    GenreTop('액션무협'),
    DailyRanking(),
    RecommendEvent(),
    AppDownloadLink(),
  ];

  div.append(...components);

  return div;
};

export default HomeContents;