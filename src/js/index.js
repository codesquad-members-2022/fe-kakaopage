import { addTabFeature } from './eventHandler.js';
import { render } from './render.js';

const init = () => {
  render.otherPage('home');
  addTabFeature();
};

init();
