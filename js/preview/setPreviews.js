import drawPreviews from './drawPreviews.js';
import clearPreviews from './clearPreviews.js';

const setPreviews = (previews, timer) => {
  clearPreviews();
  drawPreviews(previews, timer);
};

export default setPreviews;
