import tagListsData from '../../../json/tagLists.json' assert { type: 'json' };
import { createElement, selector } from '../../util/util.js';
// tagList object
// "tag": "message"
// "note": "message"

const MAIN_CONTAINER_CLASSNAME = 'page-main__container';
const TAG_LIST_CONTAINER_CLASSNAME = 'tag-list__container';
const TAG_LIST_CLASSNAME = 'tag-list';
const TAG_LIST_ITEM_CLASSNAME = 'tag-list__item';
const TAG_CLASSNAME = 'tag-list__tag';
const NOTE_CLASSNAME = 'tag-list__note';

const PREVIEW_LIST_SELECTOR = '.preview-list';

const createContainer = () =>
  createElement('div', TAG_LIST_CONTAINER_CLASSNAME);

const createMainContainer = () =>
  createElement('div', MAIN_CONTAINER_CLASSNAME);

const createUl = () =>
  createElement('ul', TAG_LIST_CLASSNAME);

const createLi = () =>
  createElement('li', TAG_LIST_ITEM_CLASSNAME);

const createTag = () =>
  createElement('span', TAG_CLASSNAME);

const createNote = () =>
  createElement('span', NOTE_CLASSNAME);

const createTagList = (tagList) => {
  const $ul = createUl();
  for (let i = 0; i < tagList.length; i++) {
    const $li = createLi();
    const $tag = createTag();
    $tag.textContent = tagList[i].tag;
    $li.appendChild($tag);

    if (tagList[i].hasOwnProperty('note')) {
      const $note = createNote();
      $note.textContent = tagList[i].note;
      $li.appendChild($note);
    }
    $ul.appendChild($li);
  }
  return $ul;
};

const createTagListContainer = (category) => {
  const tagList = tagListsData[category];
  const $tagListContainer = createContainer();
  const $tagList = createTagList(tagList);
  $tagListContainer.appendChild($tagList);
  return $tagListContainer;
};

const drawTagList = (category) => {
  if (!tagListsData.hasOwnProperty(category)) return;
  const $tagListContainer = createTagListContainer(category);
  const $mainContainer = createMainContainer();
  $mainContainer.appendChild($tagListContainer);
  const $previewList = selector(PREVIEW_LIST_SELECTOR);
  $previewList.parentElement.insertAdjacentElement('afterend', $mainContainer);
};

export default drawTagList;
