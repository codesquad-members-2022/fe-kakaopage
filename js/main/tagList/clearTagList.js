const clearTagList = ($main, $tagListContainer) => {
  if (!$tagListContainer) return;
  $main.removeChild($tagListContainer.parentElement);
};

export default clearTagList;
