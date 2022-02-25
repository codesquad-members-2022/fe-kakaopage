import clearTagList from './clearTagList.js';
import drawTagList from './drawTagList.js';

const setTagList = ({category, $main, $tagListContainer}) => {
  clearTagList($main, $tagListContainer);
  drawTagList(category);
};

export default setTagList;
