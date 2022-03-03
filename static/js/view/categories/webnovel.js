import { renderer } from '../renderer.js';

const webnovel = {
  home: (DATA) => {
    renderer.noticeBox('"홈 - 웹소설" 탭은 준비 중 입니다.');
  },
  weeky: (DATA) => {
    renderer.noticeBox('"요일연재 - 웹소설" 탭은 준비 중 입니다.');
  },
  fantasy: (DATA) => {
    renderer.noticeBox('"판타지 - 웹소설" 탭은 준비 중 입니다.');
  },
  romance: (DATA) => {
    renderer.noticeBox('"로맨스 - 웹소설" 탭은 준비 중 입니다.');
  },
  romanceFantasy: (DATA) => {
    renderer.noticeBox('"로판 - 웹소설" 탭은 준비 중 입니다.');
  },
  wuxia: (DATA) => {},
  fantasyDrama: (DATA) => {
    renderer.noticeBox('"무협 - 웹소설" 탭은 준비 중 입니다.');
  },
  bl: (DATA) => {
    renderer.noticeBox('"판드 - 웹소설" 탭은 준비 중 입니다.');
  },
};

export { webnovel };
