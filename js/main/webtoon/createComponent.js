import {
  wideCover,
  bigCover,
  normalCover,
  smallCover,
} from './componentTemplete.js';

import { createElement, addClass } from '../../util/util.js';

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
const EMPTY_STRING = 'normal-component';

const getComponentType = (coverType) => {
  if (coverType === BIG) return BIG_COMPONENT_CLASSNAME;
  if (coverType === SMALL || coverType === WIDE)
    return HORIZONTAL_COMPONENT_CLASSNAME;
  return EMPTY_STRING;
};

const getComponentHTML = (coverType, webtoonData) => {
  if (coverType === BIG) return bigCover(webtoonData);
  if (coverType === NORMAL) return normalCover(webtoonData);
  if (coverType === WIDE) return wideCover(webtoonData);
  if (coverType === SMALL) return smallCover(webtoonData);
};

const component = (coverType, webtoonData) => {
  const $article = createElement('article', COMPONENT_CLASSNAME);

  addClass(getComponentType(coverType), $article);
  const HTML = getComponentHTML(coverType, webtoonData);
  $article.innerHTML = HTML;
  const cover = $article.querySelector('.webtoon-cover');
  if (cover) cover.style.backgroundImage = `url(${webtoonData.coverSrc})`;

  return $article;
};

export default component;
