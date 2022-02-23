const ThemeBox = () => {
  const themeBox = document.createElement('div');
  themeBox.classList.add('mainbox', 'main-theme-box');
  themeBox.innerHTML = `
    <ul class="theme__list">
    <li class="theme__item">
      오늘 UP<span class="theme__badge">204</span>
    </li>
    <li class="theme__item">
      오늘 신작<span class="theme__badge">4</span>
    </li>
    <li class="theme__item">
      오리지널<span class="theme__badge">2,330</span>
    </li>
    <li class="theme__item">완결까지 정주행</li>
    <li class="theme__item">독립운동가 웹툰</li>
    <li class="theme__item">
      오늘 랭킹<span class="theme__badge">1위</span>
    </li>
  </ul>
    `;

  return themeBox;
};

export { ThemeBox };
