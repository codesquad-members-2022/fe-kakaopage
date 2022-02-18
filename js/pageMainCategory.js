import setPreview from './setPreview.js';
import drawTagListEl from './drawTagListEl.js';
import clearTagListEl from './clearTagListEl.js';
import drawWebtoonContents from './webtoonComponent/drawWebtoonContents.js';

const pageMainCategoryContainer = document.querySelector(
  '.page-main-category__container'
);

const pageMainCategory = document.querySelectorAll(
  '.page-main-category__container li'
);

let curIdx = 1;

const setCurIdx = (idx) => {
  curIdx = idx;
};

const offHighLight = (element) => {
  element.classList.toggle('color-black');
};

const onHighLight = (element) => {
  element.classList.toggle('color-black');
};

/* preview ~ tagList까지 (일부 메인 카테고리 탭 제외하고는 공통) */
pageMainCategory.forEach((li, idx, list) => {
  li.addEventListener('click', (event) => {
    if (curIdx === idx) return;
    const prevTarget = list[curIdx];
    const curTarget = event.target;
    const category = li.textContent;
    setCurIdx(idx);
    offHighLight(prevTarget);
    onHighLight(curTarget);

    setPreview(category);

    clearTagListEl();
    drawTagListEl(category);
  });
});

/* 웹툰 바로가기 컨텐츠 */
// const indexOf = (li) => [].indexOf.call(pageMainCategoryContainer.children, li);
pageMainCategoryContainer.addEventListener('click', (e) => {
  const prevWebtoonContentsList = document.querySelectorAll('.main-contents');

  if (prevWebtoonContentsList.length > 0) {
    prevWebtoonContentsList.forEach((contents) => {
      contents.parentElement.removeChild(contents);
    });
  }

  drawWebtoonContents({
    type: 'normal',
    contentsTitle: '요일 연재 TOP',
    webtoonArr: [
      {
        coverSrc: './data/cover/도굴왕.png',
        webtoonRanking: '1',
        webtoonScore: '9.7',
        webtoonTitle: '도굴왕',
        webtoonState: 'new',
        subscriberCount: 1310800,
      },
    ],
  });
});
