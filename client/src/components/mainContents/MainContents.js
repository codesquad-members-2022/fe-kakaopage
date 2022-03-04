import { SectionComponent } from '../../data/components.js';
import { convertStringToHTML } from '../../utils.js';

const MainContents = (contentsType) => {

  const div = convertStringToHTML('<div class="main-contents"></div>');
  div.append(...SectionComponent[contentsType]());

  return div;
};

export default MainContents;
