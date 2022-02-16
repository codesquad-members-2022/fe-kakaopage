const pageHeaderCategoryList = document.querySelectorAll(
  '.page-header-category__container li'
);

let selectedIdx = 1;

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
