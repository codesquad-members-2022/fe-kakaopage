const globalNavigation = () => {
  return `
  <div class="gnb__inner">
    <ul class="gnb__list">
      <li data-tab="home" class="gnb__item">홈</li>
      <li data-tab="toon" class="gnb__item">웹툰&#8729;<img src="static/icon/bmbadge_waitfree_black.svg" alt="" /></li>
      <li data-tab="novel" class="gnb__item">웹소설&#8729;<img src="static/icon/bmbadge_waitfree_black.svg" alt="" /></li>
      <li data-tab="movie" class="gnb__item">영화</li>
      <li data-tab="broadcast" class="gnb__item gnb__item--dot">방송</li>
      <li data-tab="book" class="gnb__item">책</li>
    </ul>
  </div>
  `;
};

export { globalNavigation };
