import webtoonComponent from '../webtoonComponent/webtoonComponent.js';

const replaceDayContents = ({ webtoonArr, coverType }) => {
  const contentsContainer = document.querySelector('.contents-container');
  const contentsMain = contentsContainer.querySelector('.contents-main');
  contentsContainer.removeChild(contentsMain);

  const dayContentsMain = document.createElement('div');
  dayContentsMain.className = 'contents-main';

  const webtoonComponentContainer = document.createElement('div');
  webtoonComponentContainer.className = 'webtoon-component-container';

  for (let i = 0; i < webtoonArr.length; i++) {
    const webtoonEl = webtoonComponent(coverType, webtoonArr[i]);
    webtoonComponentContainer.appendChild(webtoonEl);
  }
  dayContentsMain.appendChild(webtoonComponentContainer);
  contentsContainer.appendChild(dayContentsMain);
};

export default replaceDayContents;
