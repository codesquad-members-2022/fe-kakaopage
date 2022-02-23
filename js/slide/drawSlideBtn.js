const createBtn = () => {
  const prevBtn = document.createElement('button');
  const nextBtn = document.createElement('button');
  prevBtn.className = 'prev-btn';
  nextBtn.className = 'next-btn';
  prevBtn.innerHTML = '<img src="./assets/static/prevBtn.svg"/>';
  nextBtn.innerHTML = '<img src="./assets/static/nextBtn.svg"/>';
  return [prevBtn, nextBtn];
};

const drawSlideBtn = () => {
  const previewContainerEl = document.querySelector('.preview-container');
  const [prevBtn, nextBtn] = createBtn();
  previewContainerEl.appendChild(prevBtn);
  previewContainerEl.appendChild(nextBtn);

  // prevBtn.addEventListener('click', () => {
  //   console.log('이전버튼눌림');
  // });
  // nextBtn.addEventListener('click', () => {
  //   console.log('다음버튼눌림');
  // });
};

export default drawSlideBtn;
