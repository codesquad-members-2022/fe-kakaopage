const pageHeaderCategoryList = document.querySelectorAll(
  '.page-header-category__container li'
);

let selectedIdx = 1;

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

pageHeaderCategoryList.forEach((node, idx, list) => {
  node.addEventListener('click', (event) => {
    event.preventDefault();
    const prevTarget = list[selectedIdx];
    const curTarget = event.target.closest('li');
    selectedIdx = idx;
    prevTarget.classList.remove('yellow-border');
    curTarget.classList.add('yellow-border');
    drawDummyPage(selectedIdx);
  });
});
