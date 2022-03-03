import { home } from './categories/home.js';
import { webtoon } from './categories/webtoon.js';
import { webnovel } from './categories/webnovel.js';
import { movie } from './categories/movie.js';
import { broadcast } from './categories/broadcast.js';
import { book } from './categories/book.js';

const categoryLoader = {
  홈: home,

  웹툰: {
    홈: webtoon.home,
    요일연재: webtoon.weeky,
    소년: webtoon.boy,
    드라마: webtoon.drama,
    로맨스: webtoon.romance,
    로판: webtoon.romanceFantasy,
    액션무협: webtoon.actionWuxia,
    BL: webtoon.bl,
  },

  웹소설: {
    홈: webnovel.home,
    요일연재: webnovel.weeky,
    판타지: webnovel.fantasy,
    로맨스: webnovel.romance,
    로판: webnovel.romanceFantasy,
    무협: webnovel.wuxia,
    판드: webnovel.fantasyDrama,
    BL: webnovel.bl,
  },

  영화: {
    홈: movie.home,
    랭킹: movie.ranking,
    액션: movie.action,
    애니메이션: movie.animation,
    장르전체: movie.all,
  },

  방송: {
    홈: broadcast.home,
    예능: broadcast.varietyshow,
    드라마: broadcast.drama,
    애니메이션: broadcast.animation,
    해외시리즈: broadcast.foreign,
    장르전체: broadcast.all,
  },

  책: {
    홈: book.home,
    연재: book.series,
    베스트셀러: book.bestseller,
    랭킹: book.ranking,
    스릴러: book.thriller,
    자기계발: book.selfimprovement,
  },
};

export { categoryLoader };
