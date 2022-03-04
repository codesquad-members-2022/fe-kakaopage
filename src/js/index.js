import { addTabFeature } from './handler/eventHandler.js';
import { render } from './render/render.js';

const init = () => {
  render.otherPage('home');
  addTabFeature();
};

init();
