import previewsArr from '../../json/preview.json' assert { type: 'json' };
import createPreviewEl from './createPreviewEl.js';
import drawSlideBtn from './drawSlideBtn.js';

const timerFunc = () => {
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  prevBtn.click();
  nextBtn.click();
};

const drawPreviews = (previews, timer) => {
  console.log(previews);
  const previewListEl = document.createElement('div');
  previewListEl.className = 'preview-list';
  previews.forEach((preview) => {
    const previewEl = createPreviewEl(preview);
    previewListEl.appendChild(previewEl);
  });

  const previewContainerEl = document.querySelector('.preview-container');
  previewContainerEl.appendChild(previewListEl);

  if (timer.exists()) timer.clearTimer();
  drawSlideBtn();
  timer.setTimer(timerFunc, 2);
};

export default drawPreviews;
