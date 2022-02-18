const clearTagList = () => {
  const main = document.querySelector('.page-main');
  const tagListContainer = document.querySelector('.tag-list__container');

  if (!tagListContainer) return;
  main.removeChild(tagListContainer.parentElement);
};

export default clearTagList;
