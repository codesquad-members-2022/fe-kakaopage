import { renderer } from '../../renderer.js';

const webtoon = {
  home: (DATA) => {
    renderer.mainBanner(DATA.mainBanner);
    renderer.gridMenu(DATA.gridMenu);
    renderer.promotionBanner(DATA.promotionBanner);
  },
  weeky: (DATA) => {
    renderer.mainBanner(DATA.mainBanner);
  },
  boy: (DATA) => {
    renderer.mainBanner(DATA.mainBanner);
    renderer.gridMenu(DATA.gridMenu);
  },
  drama: (DATA) => {
    renderer.mainBanner(DATA.mainBanner);
    renderer.gridMenu(DATA.gridMenu);
  },
  romance: (DATA) => {
    renderer.mainBanner(DATA.mainBanner);
    renderer.gridMenu(DATA.gridMenu);
  },
  romanceFantasy: (DATA) => {
    renderer.mainBanner(DATA.mainBanner);
    renderer.gridMenu(DATA.gridMenu);
  },
  actionWuxia: (DATA) => {
    renderer.mainBanner(DATA.mainBanner);
    renderer.gridMenu(DATA.gridMenu);
  },
  bl: (DATA) => {
    renderer.mainBanner(DATA.mainBanner);
    renderer.gridMenu(DATA.gridMenu);
  },
};

export { webtoon };
