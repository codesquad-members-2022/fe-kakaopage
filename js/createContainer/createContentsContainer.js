const createContentsContainer = (title) => {
  const templete = `
  <div class="contents-header">
    <div class="contents-title big-font">${title}</div>
    <a href="#" class="contents-more">더보기 <img src="./data/contents/more.svg"></a>
  </div>
  <div class="contents-main"><div/>`;

  const div = document.createElement('div');
  div.className = 'contents-container';
  div.innerHTML = templete;
  return div;
};

export default createContentsContainer;
