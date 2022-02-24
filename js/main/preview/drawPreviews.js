import createPreviewEl from './createPreviewEl.js';

/**
 * previews:Arr
 * previews[마지막], previews[0], previews[1]를 넣는다.
 * if (previews.length === 1) 1개만 넣고 이벤트와 타이머는 달지 않음.
 */
const drawPreviews = ({ previews, slider }) => {
  // 타이머 제거
  slider.clearTimer();

  slider.initItemSet(previews);
  slider.initSlideList();
  if (previews.length === 1) return;

  // 타이머 등록
  slider.setTimer(3.5);
};

export default drawPreviews;
