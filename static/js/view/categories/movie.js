import { renderer } from '../renderer.js';

const movie = {
  home: (DATA) => {
    renderer.noticeBox('"홈 - 영화" 탭은 준비 중 입니다.');
  },
  ranking: (DATA) => {
    renderer.noticeBox('"랭킹 - 영화" 탭은 준비 중 입니다.');
  },
  action: (DATA) => {
    renderer.noticeBox('"액션 - 영화" 탭은 준비 중 입니다.');
  },
  animation: (DATA) => {
    renderer.noticeBox('"애니메이션 - 영화" 탭은 준비 중 입니다.');
  },
  all: (DATA) => {
    renderer.noticeBox('"장르전체 - 영화" 탭은 준비 중 입니다.');
  },
};

export { movie };
