import createComponent from './createComponent.js';
import { addClass, selector, createElement } from '../../util/util.js';

const PAGE_MAIN_CONTAINER_CLASSNAME = 'page-main__container';
const WEBTOONS_CONTAINER_CLASSNAME = 'webtoons-container';
const WEBTOON_CONTAINER_CLASSNAME = 'webtoon-component-container';

const BANNER_SELECTOR = '.banner';

const createWebtoonsContainer = () => {
  const $mainContainer = document.createElement('div');
  addClass(PAGE_MAIN_CONTAINER_CLASSNAME, $mainContainer);
  addClass(WEBTOONS_CONTAINER_CLASSNAME, $mainContainer);
  return $mainContainer;
};

const createContentsContainer = (title) => {
  const templete = /*html*/ `
  ${
    title
      ? /* html */ `
        <div class="contents-header">
          <div class="contents-title big-font">${title}</div>
          <a href="#" class="contents-more">더보기 
            <img src="./assets/data/contents/more.svg">
          </a>
        </div>`
      : ''
  }
  <div class="contents-main">
    <div class=${`${WEBTOON_CONTAINER_CLASSNAME}`}></div>
  <div/>`;

  const $contentsContainer = createElement('div', 'contents-container');
  $contentsContainer.innerHTML = templete;
  return $contentsContainer;
};

// type = "normalCover", "bigCover", "smallCover", "wideCover"
const drawWebtoons = ({ webtoonArr, coverType, contentsTitle }) => {
  const $container = createContentsContainer(contentsTitle);
  const $webtoonComponentContainer = selector(
    `.${WEBTOON_CONTAINER_CLASSNAME}`,
    $container
  );

  webtoonArr
    .map((webtoon) => createComponent(coverType, webtoon))
    .forEach(($webtoon) => $webtoonComponentContainer.appendChild($webtoon));

  const $mainContainer = createWebtoonsContainer();
  $mainContainer.appendChild($container);

  const $banner = selector(BANNER_SELECTOR);
  $banner
    .closest(`.${PAGE_MAIN_CONTAINER_CLASSNAME}`)
    .insertAdjacentElement('beforebegin', $mainContainer);
};

export default drawWebtoons;
