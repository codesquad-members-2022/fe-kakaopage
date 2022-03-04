import { SectionComponent } from '../../data/components.js';
import { convertStringToHTML } from '../../utils.js';

const MainContents = (type) => {

  const div = convertStringToHTML('<div class="main-contents"></div>');
  div.append(...SectionComponent[type]());

  return div;
};

export default MainContents;
