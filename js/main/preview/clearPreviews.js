const clearPreviews = () => {
  const previewListEl = document.querySelector('.preview-list');
  const previewEls = document.querySelectorAll('.preview');
  if (previewEls.length < 1) return;
  previewEls.forEach((preview) => {
    previewListEl.removeChild(preview);
  });
};

export default clearPreviews;
