import webtoonComponent from './webtoonComponent.js';

const createMainContainer = () => {
  const mainContainer = document.createElement('div');
  mainContainer.className = 'page-main__container main-contents';
  return mainContainer;
};

const createContentsContainer = (title) => {
  const templete = `
  ${
    title
      ? `<div class="contents-header">
    <div class="contents-title big-font">${title}</div>
    <a href="#" class="contents-more">더보기 <img src="./data/contents/more.svg"></a>`
      : ''
  }
  </div>
  <div class="contents-main">
    <div class="webtoon-component-container"></div>
  <div/>`;

  const div = document.createElement('div');
  div.className = 'contents-container';
  div.innerHTML = templete;
  return div;
};

// type = "normalCover", "bigCover", "smallCover", "wideCover"
const drawWebtoonContents = (type, { webtoonArr, contentsTitle }) => {
  const container = createContentsContainer(contentsTitle);
  const webtoonComponentContainer = container.querySelector(
    '.webtoon-component-container'
  );
  for (let i = 0; i < webtoonArr.length; i++) {
    const webtoonEl = webtoonComponent(webtoonArr[i]);
    webtoonComponentContainer.appendChild(webtoonEl);
  }
  const mainContainer = createMainContainer();
  mainContainer.appendChild(container);

  const banner = document.querySelector('.banner');
  banner
    .closest('.page-main__container')
    .insertAdjacentElement('beforebegin', mainContainer);
};

export default drawWebtoonContents;
