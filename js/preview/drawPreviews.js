import createPreviewEl from './createPreviewEl.js';

const timerFunc = () => {
  const nextBtn = document.querySelector('.next-btn');
  nextBtn.click();
};

/**
 * previews:Arr
 * previews[마지막], previews[0], previews[1]를 넣는다.
 * if (previews.length === 1) 1개만 넣고 이벤트와 타이머는 달지 않음.
 */
const drawPreviews = ({ previews, timer, slider }) => {
  // 타이머 제거
  if (timer.exists()) timer.clearTimer();

  slider.initItemSet(previews);
  slider.initSlideList();
  if (previews.length === 1) return;

  // 타이머 등록
  timer.setTimer(timerFunc, 2);
};

export default drawPreviews;
