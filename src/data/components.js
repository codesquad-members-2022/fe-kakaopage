import { HomePage, WebtoonPage, NovelPage, MoviePage, BroadcastPage, BookPage } from '../components';

const PageComponent = {
  home: () => HomePage(),
  webtoon: () => WebtoonPage(),
  novel: () => NovelPage(),
  movie: () => MoviePage(),
  broadcast: () => BroadcastPage(),
  book: () => BookPage(),
};

export {
  PageComponent,
}