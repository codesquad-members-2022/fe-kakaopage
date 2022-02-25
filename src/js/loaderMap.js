import { loader } from './loader.js';

const loaderMap = {
  홈: loader.home,
  웹툰: {
    홈: loader.webtoonHome,
    요일연재: loader.webtoonWeeky,
    소년: loader.webtoonBoy,
    드라마: loader.webtoonDrama,
    로맨스: loader.webtoonRomance,
    로판: loader.webtoonRomanceFantasy,
    액션: loader.webtoonAction,
    BL: loader.webtoonBl,
  },
  웹소설: {
    홈: loader.webnovelHome,
    요일연재: loader.webnovelWeeky,
    판타지: loader.webnovelFantasy,
    로맨스: loader.webnovelRomance,
    로판: loader.webnovelRomanceFantasy,
    무협: loader.webnovelWuxia,
    판드: loader.webnovelFantasyDrama,
    BL: loader.webnovelBL,
  },
  영화: {
    홈: loader.movieHome,
    랭킹: loader.movieRanking,
    액션: loader.movieAction,
    애니메이션: loader.movieAnimation,
    장르전체: loader.movieAll,
  },
  방송: {},
  책: {},
};

export { loaderMap };
