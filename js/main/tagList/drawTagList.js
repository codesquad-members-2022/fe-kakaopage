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

/* 마크업 구조
$mainContainer (div)
  $tagListContainer (div)
    $tagList (ul)
      $tagListItem (li)
        $tag (span)
        $note (span)
      $tagListItem (li)
        $tag (span)
        $note (span)
      ...
*/

const createMainContainer = () =>
  createElement('div', MAIN_CONTAINER_CLASSNAME);

const createTagListContainer = (category) => {
  const tagList = tagListsData[category];
  const $tagListContainer = createElement('div', TAG_LIST_CONTAINER_CLASSNAME);
  const $tagList = createTagList(tagList);
  $tagListContainer.appendChild($tagList);
  return $tagListContainer;
};

const createTagList = (tagList) => {
  const $tagList = createElement('ul', TAG_LIST_CLASSNAME);
  tagList.forEach(({ tag, note }) => {
    const $tagListItem = createTagListItem();
    const $tag = createTag(tag);
    $tagListItem.appendChild($tag);
    if (!note) {
      $tagList.appendChild($tagListItem);
      return;
    }
    const $note = createNote(note);
    $tagListItem.appendChild($note);
    $tagList.appendChild($tagListItem);
  });
  return $tagList;
};

const createTagListItem = () => createElement('li', TAG_LIST_ITEM_CLASSNAME);

const createTag = (tag) => {
  const $tag = createElement('span', TAG_CLASSNAME);
  $tag.textContent = tag;
  return $tag;
};

const createNote = (note) => {
  const $note = createElement('span', NOTE_CLASSNAME);
  $note.textContent = note;
  return $note;
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
