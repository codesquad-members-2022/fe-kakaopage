import { sectionComponent } from '../../data';
import { convertStringToHTML } from '../../utils.js';

const MainContents = (type) => {

  const div = convertStringToHTML('<div class="main-contents"></div>');
  div.append(...sectionComponent[type]());

  return div;
};

export default MainContents;
