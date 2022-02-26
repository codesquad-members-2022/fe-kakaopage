import { selectorAll } from '../../util/util.js';

const WEBTOONS_CONTAINER = '.webtoons-container';

const clearWebtoons = () => {
  const $$prevWebtoonsContainer = selectorAll(WEBTOONS_CONTAINER);

  if ($$prevWebtoonsContainer.length > 0) {
    $$prevWebtoonsContainer.forEach(($webtoonsContainer) => {
      $webtoonsContainer.parentElement.removeChild($webtoonsContainer);
    });
  }
};

export default clearWebtoons;
