import { renderMainChildDOM } from '../utils.js';

export const Webtoon = async () => {
  const subCategory = a;
  const carousel = `<div>Webtoon</div>`;
  const eventBox = `<div>Webtoon</div>`;
  const evenCarouel = `<div>Webtoon</div>`;
  const mainContent = `<div>Webtoon</div>`;
  return renderMainChildDOM({
    subCategory,
    carousel,
    eventBox,
    evenCarouel,
    mainContent,
  });
};

const a = `<ul class="c-category">
<li class="main__index c-category__index"><span>홈</span></li>
<li class="main__index c-category__index"><span>요일연재</span></li>
<li class="main__index c-category__index"><span>웹툰</span></li>
<li class="main__index c-category__index"><span>소년</span></li>
<li class="main__index c-category__index"><span>드라마</span></li>
<li class="main__index c-category__index"><span>로맨스</span></li>
<li class="main__index c-category__index"><span>로판</span></li>
<li class="main__index c-category__index"><span>액션무협</span></li>
<li class="main__index c-category__index"><span>BL</span></li>
</ul>`;
