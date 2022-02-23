const createGnb = () => {
  return `
  <div class="gnb__inner">
    <ul data-navtype="gnb" class="gnb__list">
      <li data-category="홈" class="gnb__item">홈</li>
      <li data-category="웹툰" class="gnb__item">웹툰&#8729;<img src="static/icon/bmbadge_waitfree_black.svg" /></li>
      <li data-category="웹소설" class="gnb__item">웹소설&#8729;<img src="static/icon/bmbadge_waitfree_black.svg" /></li>
      <li data-category="영화" class="gnb__item  gnb__item--dot">영화</li>
      <li data-category="방송" class="gnb__item gnb__item--dot">방송</li>
      <li data-category="책" class="gnb__item  gnb__item--dot">책</li>
    </ul>
  </div>
  `;
};

export { createGnb };
