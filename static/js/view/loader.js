import { renderer } from './renderer.js';

const loader = {
  // 홈
  home() {
    renderer.preparing();
  },

  // 홈 - 웹툰
  webtoonHome(DATA) {
    renderer.mainBanner(DATA.mainBanner);
    renderer.gridMenu(DATA.gridMenu);
    renderer.promotionBanner(DATA.promotionBanner);
  },
  // 요일연재 - 웹툰
  webtoonWeeky(DATA) {
    renderer.mainBanner(DATA.mainBanner);
  },
  // 소년 - 웹툰
  webtoonBoy(DATA) {
    renderer.mainBanner(DATA.mainBanner);
    renderer.gridMenu(DATA.gridMenu);
  },
  // 드라마 - 웹툰
  webtoonDrama(DATA) {
    renderer.mainBanner(DATA.mainBanner);
    renderer.gridMenu(DATA.gridMenu);
  },
  // 로맨스 - 웹툰
  webtoonRomance(DATA) {
    renderer.mainBanner(DATA.mainBanner);
    renderer.gridMenu(DATA.gridMenu);
  },
  // 로판 - 웹툰
  webtoonRomanceFantasy(DATA) {
    renderer.mainBanner(DATA.mainBanner);
    renderer.gridMenu(DATA.gridMenu);
  },
  // 액션무협 - 웹툰
  webtoonActionWuxia(DATA) {
    renderer.mainBanner(DATA.mainBanner);
    renderer.gridMenu(DATA.gridMenu);
  },
  // BL - 웹툰
  webtoonBl(DATA) {
    renderer.mainBanner(DATA.mainBanner);
    renderer.gridMenu(DATA.gridMenu);
  },

  // 웹소설
  webnovelHome(DATA) {}, // 홈 - 웹소설
  webnovelWeeky(DATA) {}, // 요일연재 - 웹소설
  webnovelFantasy(DATA) {}, // 판타지 - 웹소설
  webnovelRomance(DATA) {}, // 로맨스 - 웹소설
  webnovelRomanceFantasy(DATA) {}, // 로판 - 웹소설
  webnovelWuxia(DATA) {}, // 무협 - 웹소설
  webnovelFantasyDrama(DATA) {}, // 판드 - 웹소설
  webnovelBL(DATA) {}, // BL - 웹소설

  // 영화
  movieHome(DATA) {}, // 홈 - 영화
  movieRanking(DATA) {}, // 랭킹 - 영화
  movieAction(DATA) {}, // 액션 - 영화
  movieAnimation(DATA) {}, // 애니메이션 - 영화
  movieAll(DATA) {}, // 장르전체 - 영화

  //방송
  broadcastHome(DATA) {}, // 홈 - 방송
  broadcastVarietyshow(DATA) {}, // 예능 - 방송
  broadcastDrama(DATA) {}, // 드라마 - 방송
  broadcastAnimation(DATA) {}, // 애니메이션 - 방송
  broadcastForeign(DATA) {}, // 해외시리즈 - 방송
  broadcastAll(DATA) {}, // 장르전체 - 방송

  // 책
  bookHome(DATA) {}, // 홈 - 책
  bookSeries(DATA) {}, // 연재 - 책
  bookBestseller(DATA) {}, // 베스트셀러 - 책
  bookRanking(DATA) {}, // 랭킹 - 책
  bookThriller(DATA) {}, // 스릴러 - 책
  bookSelfimprovement(DATA) {}, // 자기계발 - 책
};

export { loader };
