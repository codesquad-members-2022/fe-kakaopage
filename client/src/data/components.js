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
import { store } from './store.js';

const PageComponent = {
  home: () => TempPage('Home'),
  webtoon: () => WebtoonPage(),
  novel: () => TempPage('Novel'),
  movie: () => TempPage('Movie'),
  broadcast: () => TempPage('Broadcast'),
  book: () => TempPage('Book'),
};

const SectionComponent = {
  action: () => [
    MainNav(),
    CategoryMenu(store.categories.action),
    GenreTop('액션무협'),
    AppDownloadLink(),
  ],
  bl: () => [
    MainNav(),
    CategoryMenu(store.categories.bl),
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
    CategoryMenu(store.categories.drama),
    GenreTop('드라마'),
    AppDownloadLink(),
  ],
  home: () => [
    MainNav(),
    MainBanner(),
    CategoryMenu(store.categories.home),
    SubBanner(),
    DailySeriesRanking(),
    AnticipatedWork(),
    ...['로맨스', '로판', '드라마', 'BL/GL', '소년', '액션무협']
      .map((genre) => GenreTop(genre)),
    DailyRanking(),
    RecommendEvent(),
    AppDownloadLink(),
  ],
  romance: () => [
    MainNav(),
    CategoryMenu(store.categories.romance),
    GenreTop('로맨스'),
    AppDownloadLink(),
  ],
  romanceFantasy: () => [
    MainNav(),
    CategoryMenu(store.categories.romanceFantasy),
    GenreTop('로판'),
    AppDownloadLink(),
  ],
  shonen: () => [
    MainNav(),
    CategoryMenu(store.categories.shonen),
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
  SectionComponent,
};
