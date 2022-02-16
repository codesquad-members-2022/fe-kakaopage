const pageMainCategory = document.querySelectorAll(
  '.page-main-category__container li'
);

let selectedIdx = 1;

pageMainCategory.forEach((li, idx, list) => {
  li.addEventListener('click', (event) => {
    const prevTarget = list[selectedIdx];
    const curTarget = event.target;
    selectedIdx = idx;
    prevTarget.classList.remove('color-black');
    curTarget.classList.add('color-black');
  });
});
