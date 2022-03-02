import createWebtoonComponent from '../webtoon/createComponent.js';
import { selector, createElement } from '../../util/util.js';

const WEBTOON_CONTAINER_CLASSNAME = 'webtoon-component-container';
const CONTAINER_CLASSNAME = 'contents-container';
const CONTENTS_CLASSNAME = 'contents-main';

const replaceDayContents = ({ webtoonArr, coverType }) => {
  const $contentsContainer = selector(`.${CONTAINER_CLASSNAME}`);
  const $contentsMain = selector(`.${CONTENTS_CLASSNAME}`, $contentsContainer);
  $contentsContainer.removeChild($contentsMain);

  const $dayContentsMain = createElement('div', CONTENTS_CLASSNAME);

  const $webtoonComponentContainer = createElement(
    'div',
    WEBTOON_CONTAINER_CLASSNAME
  );

  for (let i = 0; i < webtoonArr.length; i++) {
    const $webtoonComponent = createWebtoonComponent(coverType, webtoonArr[i]);
    $webtoonComponentContainer.appendChild($webtoonComponent);
  }
  $dayContentsMain.appendChild($webtoonComponentContainer);
  $contentsContainer.appendChild($dayContentsMain);
};

export default replaceDayContents;
