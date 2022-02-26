import { selectorAll } from '../../util/util.js';

const WEBTOONS_CONTAINER = '.main-contents';
const clearWebtoons = () => {
  const prevWebtoonContentsList = selectorAll(WEBTOONS_CONTAINER);

  if (prevWebtoonContentsList.length > 0) {
    prevWebtoonContentsList.forEach((contents) => {
      contents.parentElement.removeChild(contents);
    });
  }
};

export default clearWebtoons;
