const SNB = () => {
  const snbNav = document.createElement('nav');
  snbNav.classList.add('snb');
  snbNav.innerHTML = `
        <ul class="snb__list">
          <li class="snb__item selected">홈</li>
          <li class="snb__item">요일연재</li>
          <li class="snb__item">웹툰</li>
          <li class="snb__item">소년</li>
          <li class="snb__item">드라마</li>
          <li class="snb__item">로맨스</li>
          <li class="snb__item">로판</li>
          <li class="snb__item">액션무협</li>
          <li class="snb__item">BL</li>
        </ul>
    `;
  return snbNav;
};

export { SNB };
