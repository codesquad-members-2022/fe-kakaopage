import drawPreviews from './drawPreviews.js';
import clearPreviews from './clearPreviews.js';

const setPreviews = ({ previews, timer, slider }) => {
  clearPreviews();
  drawPreviews({ previews, timer, slider });
};

export default setPreviews;
