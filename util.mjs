const createImgTag = (classn, src, alt) => {
  const tag = document.createElement("img");
  if (classn.length > 0) {
    tag.classList.add(classn);
  }
  tag.src = src;
  tag.alt = alt;

  return tag;
};

export { createImgTag };
