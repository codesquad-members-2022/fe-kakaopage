import createPreviewEl from './createPreviewEl.js';

const timerFunc = () => {
  const nextBtn = document.querySelector('.next-btn');
  nextBtn.click();
};

const drawPreviews = (previews, timer) => {
  console.log(previews);
  const previewListEl = document.querySelector('.preview-list');
  previews.forEach((preview) => {
    const previewEl = createPreviewEl(preview);
    previewListEl.appendChild(previewEl);
  });

  if (timer.exists()) timer.clearTimer();
  timer.setTimer(timerFunc, 2);
};

export default drawPreviews;
