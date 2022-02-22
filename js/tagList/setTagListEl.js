import clearTagListEl from './clearTagListEl.js';
import drawTagListEl from './drawTagListEl.js';

const setTagListEl = (category) => {
  clearTagListEl();
  drawTagListEl(category);
};

export default setTagListEl;
