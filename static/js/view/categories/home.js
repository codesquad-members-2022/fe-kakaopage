import { renderer } from '../renderer.js';

const home = {
  home: (DATA) => {
    renderer.gridMenu(DATA.gridMenu);
    renderer.sectionBasic('기다리면 무료 웹툰', '3,460');
    renderer.sectionBasic('인기 웹툰', '126');
    renderer.sectionBasic('기다리면 무료 소설', '4,514');
  },
};

export { home };
