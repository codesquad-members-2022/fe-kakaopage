import { renderer } from '../renderer.js';

const book = {
  home: (DATA) => {
    renderer.noticeBox('"홈 - 책" 탭은 준비 중 입니다.');
  },
  series: (DATA) => {
    renderer.noticeBox('"연재 - 책" 탭은 준비 중 입니다.');
  },
  bestseller: (DATA) => {
    renderer.noticeBox('"베스트셀러 - 책" 탭은 준비 중 입니다.');
  },
  ranking: (DATA) => {
    renderer.noticeBox('"랭킹 - 책" 탭은 준비 중 입니다.');
  },
  thriller: (DATA) => {
    renderer.noticeBox('"스릴러 - 책" 탭은 준비 중 입니다.');
  },
  selfimprovement: (DATA) => {
    renderer.noticeBox('"자기계발 - 책" 탭은 준비 중 입니다.');
  },
};

export { book };
