import clearTagList from './clearTagList.js';
import drawTagList from './drawTagList.js';

const setTagList = ({ categoryName, $main, $tagListContainer }) => {
  clearTagList($main, $tagListContainer);
  drawTagList(categoryName);
};

export default setTagList;
