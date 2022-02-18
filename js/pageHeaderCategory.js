const pageHeaderCategoryList = document.querySelectorAll(
  '.page-header-category__container li'
);

let curIdx = 1;

const setCurIdx = (idx) => {
  curIdx = idx;
};

const drawDummyPage = (curIdx) => {
  const mainPage = document.querySelector('.page-main');
  const dummyPage = document.querySelector('.dummy');
  if (curIdx === 1) {
    mainPage.classList.remove('display-none');
    dummyPage.classList.add('display-none');
    return;
  }
  mainPage.classList.add('display-none');
  dummyPage.classList.remove('display-none');
};

const offHighLight = (element) => {
  element.classList.toggle('yellow-border');
};
const onHighLight = (element) => {
  element.classList.toggle('yellow-border');
};

pageHeaderCategoryList.forEach((node, idx, list) => {
  node.addEventListener('click', (event) => {
    event.preventDefault();
    if (curIdx === idx) return;
    const prevTarget = list[curIdx];
    const curTarget = event.target.closest('li');
    setCurIdx(idx);

    offHighLight(prevTarget);
    onHighLight(curTarget);
    drawDummyPage(curIdx);
  });
});
