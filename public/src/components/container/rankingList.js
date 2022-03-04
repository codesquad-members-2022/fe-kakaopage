export default function makeRankingList(data, tab) {
  const items = data[tab].reduce((acc, cur) => acc + makeRankingItem(cur), '');
  return `
    <ol class="ranking__list">
      ${items}
    </ol>
  `;
}

function makeRankingItem(data) {
  return `
    <li class="ranking__item">
      <span class="item__ranking">${data.rank}</span>
      <a href="#" class="item__img"><img src="${data.img_url}" alt="${data.img_alt}"></a>
      <div class="item__info">
        <h4 class="item__title">${data.title}</h4>
        <ul class="ranking__info">
          <li><i class="fas fa-user"></i></li>
          <li><span class="item__text">${data.viewer}</span></li>
          <li><div class="divider"></div></li>
          <li><span class="item__text">기다무웹툰</span></li>
          <li><div class="divider"></div></li>
          <li><span class="item__text">${data.author}</span></li>
        </ul>
        <p>월 연재</p>
      </div>
    </li>
    `
}