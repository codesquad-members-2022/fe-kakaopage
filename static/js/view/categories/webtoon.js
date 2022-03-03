import { renderer } from '../renderer.js';

const webtoon = {
  home: (DATA) => {
    renderer.mainBanner(DATA.mainBanner);
    renderer.gridMenu(DATA.gridMenu);
    renderer.promotionBanner(DATA.promotionBanner);
    renderer.sectionBasic('요일 연재 TOP', '1,643');
  },
  weeky: (DATA) => {
    renderer.mainBanner(DATA.mainBanner);
  },
  boy: (DATA) => {
    renderer.mainBanner(DATA.mainBanner);
    renderer.gridMenu(DATA.gridMenu);
    renderer.sectionBasic('일간 소년 TOP');
  },
  drama: (DATA) => {
    renderer.mainBanner(DATA.mainBanner);
    renderer.gridMenu(DATA.gridMenu);
    renderer.sectionBasic('일간 드라마 TOP');
  },
  romance: (DATA) => {
    renderer.mainBanner(DATA.mainBanner);
    renderer.gridMenu(DATA.gridMenu);
    renderer.sectionBasic('일간 로맨스 TOP');
  },
  romanceFantasy: (DATA) => {
    renderer.mainBanner(DATA.mainBanner);
    renderer.gridMenu(DATA.gridMenu);
    renderer.sectionBasic('일간 로맨스판타지 TOP');
  },
  actionWuxia: (DATA) => {
    renderer.mainBanner(DATA.mainBanner);
    renderer.gridMenu(DATA.gridMenu);
    renderer.sectionBasic('일간 액션무협 TOP');
  },
  bl: (DATA) => {
    renderer.mainBanner(DATA.mainBanner);
    renderer.gridMenu(DATA.gridMenu);
    renderer.sectionBasic('일간 BL TOP');
  },
};

export { webtoon };
