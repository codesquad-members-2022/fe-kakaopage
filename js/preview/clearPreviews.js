import clearSlideBtn from './clearSlideBtn.js';

const clearPreviews = () => {
  const previewListEl = document.querySelector('.preview-list');
  if (!previewListEl) return;
  previewListEl.parentNode.removeChild(previewListEl);
  clearSlideBtn();
};

export default clearPreviews;
