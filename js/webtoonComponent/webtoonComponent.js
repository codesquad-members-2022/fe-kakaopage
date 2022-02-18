const webtoonComponent = (webtoonData) => {
  const article = document.createElement('article');
  const under6th = webtoonData.webtoonRanking < 6;
  const HTML = `
  <article class="webtoon-component">
    <div class="webtoon-cover relative">
      <div class="webtoon-label">
        <div class="webtoon-label-row">
          <div class="webtoon-ranking">${
            under6th ? webtoonData.webtoonRanking + '위' : ''
          }</div>
          ${
            under6th
              ? ''
              : `<img class="webtoon-score-img" src="./svg/star.svg" alt="">`
          }
          ${
            under6th
              ? ''
              : `<div class="webtoon-score">${webtoonData.webtoonScore}</div>`
          }
        </div>
        <div class="webtoon-label-row">
          <img src="./data/state/${
            webtoonData.waitfree ? 'waitfree' : 'free'
          }.svg">
        </div>
      </div>
    </div>
    <div class="webtoon-info">
      <div class="webtoon-title">${webtoonData.webtoonTitle}</div>
      <div class="webtoon-etc">
        <img class="webtoon-state" src="./data/contents/${
          webtoonData.webtoonState
        }.svg" alt="">
        <img class="webtoon-subs" src="./data/contents/subscriber.png" alt="">
        <span class="webtoon-subs-count">${
          (webtoonData.subscriberCount / 10000).toFixed(0) + '만명'
        }</span>
      </div>
    </div>
  </article>
`;
  article.innerHTML = HTML;
  article.querySelector(
    '.webtoon-cover'
  ).style.backgroundImage = `url(${webtoonData.coverSrc})`;
  return article;
};

export default webtoonComponent;
