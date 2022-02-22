const SNB = () => {
  const snbNav = document.createElement('nav');
  snbNav.classList.add('snb');
  snbNav.innerHTML = `
        <ul class="snb__list">
          <li class="snb__item selected" data-category="홈">홈</li>
          <li class="snb__item" data-category="요일연재">요일연재</li>
          <li class="snb__item" data-category="웹툰">웹툰</li>
          <li class="snb__item" data-category="소년">소년</li>
          <li class="snb__item" data-category="드라마">드라마</li>
          <li class="snb__item" data-category="로맨스">로맨스</li>
          <li class="snb__item" data-category="로판">로판</li>
          <li class="snb__item" data-category="액션무협">액션무협</li>
          <li class="snb__item" data-category="BL">BL</li>
        </ul>
    `;
  return snbNav;
};

export { SNB };
