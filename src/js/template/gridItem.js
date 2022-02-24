const GRID = {
  ITEM_BOTTOM: {
    WAIT: `<img class="w-16" src="https://static-page.kakao.com/static/common/bmbadge_waitfree.svg?53cf25c84253dee8d32e66da7524dbaf" alt="기다리면 무료" />`,
    WEBTOON: `<div class="third-text-color font-14">웹툰</div>`,
  },
  INFO: {
    NEW: `<img class="h-11 mg-r-2" src="https://static-page.kakao.com/static/common/icon_new.svg?4ae84a0f972e30119fb6fcfbb2f59bf9" alt="새 작품" />`,
    UP: `<img class="h-11 mg-r-2" src="https://static-page.kakao.com/static/common/icon_up.svg?51cfaf512283ca0e1eaca53414e35a3f" alt="업데이트" />`,
  },
};

export const gridItem = toon => {
  const { title, img, score, reader } = toon;

  return `
  <div class="grid__item">
    <div class="border-round">
      <div class="flex">
        <img class="grid__thumnail" src="${img}" alt="썸네일" />
      </div>
      <div class="grid__item__bottom">
        <div class="flex items-center_justify-center">
          <img class="w-16" src="/fe-kakaopage/src/img/badge-thumbnail-star.svg" alt="별점" />
          <span class="mg-l-5 pd-t-2">${score.toFixed(1)}</span>
        </div>
        ${toon.additional.wait === true ? GRID.ITEM_BOTTOM.WAIT : GRID.ITEM_BOTTOM.WEBTOON}
      </div>
    </div>
    <div class="txt-lh-1_5 mg-t-10">
      <div class="font-16 main-text-color txt-ellipsis">${title}</div>
      <div class="flex items-center">
        ${infoBadge(toon)}   
        <img class="w-11" src="https://static-page.kakao.com/static/common/icon_read_count.png?817b1f83aa0dd8de232a68ac82efd871" alt="구독자" />
        <span class="mg-l-5 pd-t-2 font-14 third-text-color">${reader}만명</span>
      </div>
    </div>
  </div>
  `;
};

const infoBadge = toon => {
  let result = '';

  if (toon.additional.new) {
    result += GRID.INFO.NEW;
  }

  if (toon.additional.up) {
    result += GRID.INFO.UP;
  }

  return result;
};
