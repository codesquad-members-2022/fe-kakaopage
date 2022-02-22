import {
  HomePage,
  WebtoonPage,
  NovelPage,
  MoviePage,
  BroadcastPage,
  BookPage,
  HomeContents,
  DailyContents,
  WebtoonContents,
  ShonenContents,
  DramaContents,
  RomanceContents,
  RomanceFantasyContents,
  ActionContents,
  BLContents,
} from '../components';

const PageComponent = {
  home: () => HomePage(),
  webtoon: () => WebtoonPage(),
  novel: () => NovelPage(),
  movie: () => MoviePage(),
  broadcast: () => BroadcastPage(),
  book: () => BookPage(),
};

const ContentsComponent = {
  home: () => HomeContents(),
  daily: () => DailyContents(),
  webtoon: () => WebtoonContents(),
  shonen: () => ShonenContents(),
  drama: () => DramaContents(),
  romance: () => RomanceContents(),
  romanceFantasy: () => RomanceFantasyContents(),
  action: () => ActionContents(),
  bl: () => BLContents(),
};

export {
  PageComponent,
  ContentsComponent,
};