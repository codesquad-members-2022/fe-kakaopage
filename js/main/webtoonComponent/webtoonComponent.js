import { wideCover, bigCover, normalCover, smallCover } from './cover.js';

const getComponentType = (coverType) => {
  if (coverType === 'big') return 'big-component';
  if (coverType === 'small' || coverType === 'wide')
    return 'horizontal-component';
  return '';
};

const getHTML = (coverType, webtoonData) => {
  if (coverType === 'big') return bigCover(webtoonData);
  if (coverType === 'normal') return normalCover(webtoonData);
  if (coverType === 'wide') return wideCover(webtoonData);
  if (coverType === 'small') return smallCover(webtoonData);
};

const webtoonComponent = (coverType, webtoonData) => {
  const article = document.createElement('article');

  article.className = `webtoon-component ${getComponentType(coverType)}`;
  const HTML = getHTML(coverType, webtoonData);
  article.innerHTML = HTML;
  const cover = article.querySelector('.webtoon-cover');
  if (cover) cover.style.backgroundImage = `url(${webtoonData.coverSrc})`;

  return article;
};

export default webtoonComponent;
