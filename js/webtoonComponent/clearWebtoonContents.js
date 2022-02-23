const clearWebtoonContents = () => {
  const prevWebtoonContentsList = document.querySelectorAll('.main-contents');

  if (prevWebtoonContentsList.length > 0) {
    prevWebtoonContentsList.forEach((contents) => {
      contents.parentElement.removeChild(contents);
    });
  }
};

export default clearWebtoonContents;
