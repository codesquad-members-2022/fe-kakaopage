import { selector } from '../util/util.js';

const LOADING_SPINNER_WRAPPER_CLASSNAME = 'loading-spinner-wrapper';
const clearLoadingSpinner = () => {
  const $wrapper = selector(`.${LOADING_SPINNER_WRAPPER_CLASSNAME}`);
  $wrapper.parentElement.removeChild($wrapper);
};

export default clearLoadingSpinner;
