export const wideCover = (webtoonData) => {
  const { title, state, subscriberCount, badge, summary, tags } = webtoonData;
  let tagElements = '';
  tags.forEach(
    (tag) => (tagElements += `<span class="webtoon-tag">${tag}</span>`)
  );

  return `<div class="webtoon-cover wide-cover">
  ${
    !badge
      ? ''
      : `<img class="webtoon-badge" src="./assets/data/contents/${badge}.png" alt="" />`
  }</div>

  <div class="webtoon-info">
    <div class="webtoon-title">
      <img
        class="webtoon-state"
        src="./assets/data/contents/${state}.svg"
        alt=""
      />${title}
    </div>
    <div class="webtoon-summary small-font">${summary}</div>
    <div class="webtoon-etc">
      <img class="webtoon-subs" src="./assets/data/contents/subscriber.png" alt="" />
      <span class="webtoon-subs-count"
        >${(subscriberCount / 10000).toFixed(0) + '만명'}</span
      >
      ${tagElements}
    </div>
  </div>
`;
};
export const bigCover = (webtoonData) => {
  const { title, badge, state, subscriberCount } = webtoonData;

  return `
  <div class="webtoon-cover">
    ${
      !badge
        ? ''
        : `<img class="webtoon-badge" src="./assets/data/contents/${badge}.png" />`
    }
  </div>
  
  <div class="webtoon-info">
    <div class="webtoon-title">
      <img
        class="webtoon-state"
        src="./assets/data/contents/${state}.svg"
        alt=""
      />${title}
    </div>

    <div class="webtoon-etc">
      <img class="webtoon-subs" src="./assets/data/contents/subscriber.png" />
      <span class="webtoon-subs-count">${
        (subscriberCount / 10000).toFixed(0) + '만명'
      }</span>
    </div>
  </div>
  `;
};
export const normalCover = (webtoonData) => {
  const { title, ranking, score, state, subscriberCount } = webtoonData;
  const under6th = ranking < 6;
  return `
  <div class="webtoon-cover relative">
    <div class="webtoon-label">
      <div class="webtoon-label-row">
        ${
          under6th
            ? `<div class="webtoon-ranking">${ranking}위</div>`
            : `<img class="webtoon-score-img" src="./assets/data/contents/star.svg" alt="" />
            <div class="webtoon-score">${score}</div>
            `
        }        
      </div>
      <div class="webtoon-label-row">
        <img src="./assets/data/state/waitfree.svg" />
      </div>
    </div>
  </div>
  <div class="webtoon-info">
    <div class="webtoon-title">${title}</div>
    <div class="webtoon-etc">
      <img class="webtoon-state" src="./assets/data/contents/${state}.svg" alt="" />
      <img class="webtoon-subs" src="./assets/data/contents/subscriber.png" alt="" />
      <span class="webtoon-subs-count">${
        (subscriberCount / 10000).toFixed(0) + '만명'
      }</span>
    </div>
  </div>
  `;
};
export const smallCover = (webtoonData) => {
  const { ranking, state, title, subscriberCount, tags, days } = webtoonData;
  let tagElements = '';
  tags.forEach(
    (tag) => (tagElements += `<span class="webtoon-tag">${tag}</span>`)
  );
  return ` 
  <div class="webtoon-ranking-number">${ranking}</div>
  <div class="webtoon-cover small-cover">
    <img
      class="webtoon-badge"
      src="./assets/data/contents/waitfree-badge.png"
      alt=""
    />
  </div>
  <div class="webtoon-info">
    <div class="webtoon-title">
      <img
        class="webtoon-state"
        src="./assets/data/contents/${state}.svg"
        alt=""
      />${title}
    </div>
    <div class="webtoon-etc">
      <img class="webtoon-subs" src="./assets/data/contents/subscriber.png" alt="" />
      <span class="webtoon-subs-count">${
        (subscriberCount / 10000).toFixed(0) + '만명'
      }</span>
      ${tagElements}
    </div>
    <div class="webtoon-day">${days.join(', ')} 연재</div>
  </div>`;
};
