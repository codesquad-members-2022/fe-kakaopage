import {
  WebtoonPage,
  TempPage,
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
  home: () => TempPage('Home'),
  webtoon: () => WebtoonPage(),
  novel: () => TempPage('Novel'),
  movie: () => TempPage('Movie'),
  broadcast: () => TempPage('Broadcast'),
  book: () => TempPage('Book'),
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