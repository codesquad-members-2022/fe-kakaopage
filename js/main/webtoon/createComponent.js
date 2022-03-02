import {
  wideCover,
  bigCover,
  normalCover,
  smallCover,
} from './componentTemplete.js';

import { createElement, addClass, selector } from '../../util/util.js';

const coverTypeMap = {
  BIG: 'big',
  SMALL: 'small',
  WIDE: 'wide',
  NORMAL: 'normal',
};
const { BIG, SMALL, WIDE, NORMAL } = coverTypeMap;

const COMPONENT_CLASSNAME = 'webtoon-component';
const BIG_COMPONENT_CLASSNAME = 'big-component';
const HORIZONTAL_COMPONENT_CLASSNAME = 'horizontal-component';
const NORMAL_COMPONENT_CLASSNAME = 'normal-component';

const WEBTOON_COVER_SELECTOR = '.webtoon-cover';

const getComponentType = (coverType) => {
  if (coverType === BIG) return BIG_COMPONENT_CLASSNAME;
  if (coverType === SMALL || coverType === WIDE)
    return HORIZONTAL_COMPONENT_CLASSNAME;
  return NORMAL_COMPONENT_CLASSNAME;
};

const getComponentHTML = (coverType, webtoonData) => {
  if (coverType === BIG) return bigCover(webtoonData);
  if (coverType === NORMAL) return normalCover(webtoonData);
  if (coverType === WIDE) return wideCover(webtoonData);
  if (coverType === SMALL) return smallCover(webtoonData);
};

const createComponent = (coverType, webtoonData) => {
  const $article = createElement('article', COMPONENT_CLASSNAME);

  addClass(getComponentType(coverType), $article);
  const componentHTML = getComponentHTML(coverType, webtoonData);
  $article.innerHTML = componentHTML;
  const $cover = selector(WEBTOON_COVER_SELECTOR, $article);
  if ($cover) $cover.style.backgroundImage = `url(${webtoonData.coverSrc})`;

  return $article;
};

export default createComponent;
