import tagLists from '../json/tagLists.json' assert { type: 'json' };

// tagList object
// "tag": "message"
// "note": "message"

const createMainContainer = () => {
  const mainContainer = document.createElement('div');
  mainContainer.className = 'page-main__container';
  return mainContainer;
};

const createContainer = () => {
  const div = document.createElement('div');
  div.className = 'tag-list__container';
  return div;
};

const createUl = () => {
  const ul = document.createElement('ul');
  ul.className = 'tag-list';
  return ul;
};

const createLi = () => {
  return document.createElement('li');
};

const createTag = () => {
  const tag = document.createElement('span');
  tag.className = 'tag-list__tag';
  return tag;
};

const createNote = () => {
  const note = document.createElement('span');
  note.className = 'tag-list__note';
  return note;
};

const createTagList = (category) => {
  if (!tagLists.hasOwnProperty(category)) return;
  const tagList = tagLists[category];
  const container = createContainer();
  const ul = createUl();

  for (let i = 0; i < tagList.length; i++) {
    const li = createLi();
    const tag = createTag();
    tag.textContent = tagList[i].tag;
    li.appendChild(tag);

    if (tagList[i].hasOwnProperty('note')) {
      const note = createNote();
      note.textContent = tagList[i].note;
      li.appendChild(note);
    }
    ul.appendChild(li);
  }
  container.appendChild(ul);

  const mainContainer = createMainContainer();
  mainContainer.appendChild(container);

  document
    .querySelector('.preview')
    .parentElement.insertAdjacentElement('afterend', mainContainer);
};

export default createTagList;
