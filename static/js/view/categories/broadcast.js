import { renderer } from '../renderer.js';

const broadcast = {
  home: (DATA) => {
    renderer.noticeBox('"홈 - 방송" 탭은 준비 중 입니다.');
  },
  varietyshow: (DATA) => {
    renderer.noticeBox('"예능 - 방송" 탭은 준비 중 입니다.');
  },
  drama: (DATA) => {
    renderer.noticeBox('"드라마 - 방송" 탭은 준비 중 입니다.');
  },
  animation: (DATA) => {
    renderer.noticeBox('"애니메이션 - 방송" 탭은 준비 중 입니다.');
  },
  foreign: (DATA) => {
    renderer.noticeBox('"해외시리즈 - 방송" 탭은 준비 중 입니다.');
  },
  all: (DATA) => {
    renderer.noticeBox('"장르전체 - 방송" 탭은 준비 중 입니다.');
  },
};

export { broadcast };
