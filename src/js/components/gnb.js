const createGnb = () => {
  return `
  <div class="gnb__inner">
    <ul class="gnb__list">
      <li data-category="home" class="gnb__item">홈</li>
      <li data-category="toon" class="gnb__item">웹툰&#8729;<img src="static/icon/bmbadge_waitfree_black.svg" alt="" /></li>
      <li data-category="novel" class="gnb__item">웹소설&#8729;<img src="static/icon/bmbadge_waitfree_black.svg" alt="" /></li>
      <li data-category="movie" class="gnb__item  gnb__item--dot">영화</li>
      <li data-category="broadcast" class="gnb__item gnb__item--dot">방송</li>
      <li data-category="book" class="gnb__item  gnb__item--dot">책</li>
    </ul>
  </div>
  `;
};

export { createGnb };
