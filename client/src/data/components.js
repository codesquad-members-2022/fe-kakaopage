import {
  WebtoonPage,
  TempPage,
  MainNav,
  CategoryMenu,
  GenreTop,
  AppDownloadLink,
  MainBanner,
  SubBanner,
  DailySeriesRanking,
  AnticipatedWork,
  DailyRanking,
  RecommendEvent,
} from '../components';
import { Categories } from './index.js';

const PageComponent = {
  home: () => TempPage('Home'),
  webtoon: () => WebtoonPage(),
  novel: () => TempPage('Novel'),
  movie: () => TempPage('Movie'),
  broadcast: () => TempPage('Broadcast'),
  book: () => TempPage('Book'),
};

const sectionComponent = {
  action: () => [
    MainNav(),
    CategoryMenu(Categories.action),
    GenreTop('액션무협'),
    AppDownloadLink(),
  ],
  bl: () => [
    MainNav(),
    CategoryMenu(Categories.bl),
    GenreTop('BL/GL'),
    AppDownloadLink(),
  ],
  daily: () => [
    MainNav(),
    MainBanner(),
    SubBanner(),
    AppDownloadLink(),
  ],
  drama: () => [
    MainNav(),
    CategoryMenu(Categories.drama),
    GenreTop('드라마'),
    AppDownloadLink(),
  ],
  home: () => [
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
  ],
  romance: () => [
    MainNav(),
    CategoryMenu(Categories.romance),
    GenreTop('로맨스'),
    AppDownloadLink(),
  ],
  romanceFantasy: () => [
    MainNav(),
    CategoryMenu(Categories.romanceFantasy),
    GenreTop('로판'),
    AppDownloadLink(),
  ],
  shonen: () => [
    MainNav(),
    CategoryMenu(Categories.shonen),
    GenreTop('소년'),
    AppDownloadLink(),
  ],
  webtoon: () => [
    MainNav(),
    DailyRanking(),
    AppDownloadLink(),
  ],
};

export {
  PageComponent,
  sectionComponent,
};
