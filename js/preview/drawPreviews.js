import previewsArr from '../../json/preview.json' assert { type: 'json' };
import createPreviewEl from './createPreviewEl.js';
import drawSlideBtn from './drawSlideBtn.js';

const drawPreviews = (previews) => {
  const previewListEl = document.createElement('div');
  previewListEl.className = 'preview-list';
  previews.forEach((preview) => {
    const previewEl = createPreviewEl(preview);
    previewListEl.appendChild(previewEl);
  });

  const previewContainerEl = document.querySelector('.preview-container');
  previewContainerEl.appendChild(previewListEl);

  drawSlideBtn();
};

export default drawPreviews;
