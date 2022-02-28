import { createElement, selector } from '../util/util.js';

const LOADING_SPINNER_WRAPPER_CLASSNAME = 'loading-spinner-wrapper';
const SPINNER_CLASSNAME = 'lds-ring';
const BANNER_CLASSNAME = 'banner';

const drawLoadingSpinner = () => {
  const $wrapper = createElement('div', LOADING_SPINNER_WRAPPER_CLASSNAME);
  const $loadingSpinner = createElement('div', SPINNER_CLASSNAME);
  $loadingSpinner.innerHTML = `<div></div><div></div><div></div><div></div>`;
  $wrapper.appendChild($loadingSpinner);

  const $bannerParent = selector(`.${BANNER_CLASSNAME}`).parentElement;
  $bannerParent.insertAdjacentElement('beforeBegin', $wrapper);
};

export default drawLoadingSpinner;
