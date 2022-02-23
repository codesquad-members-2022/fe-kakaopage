const WebtoonList = (webtoonData, header, title) => {
  const webtoonList = document.createElement('div');
  webtoonList.classList.add('mainbox', 'webtoon-box');
  if (header) webtoonList.classList.add(header);

  webtoonList.innerHTML = `
      ${createWebtoonHeader(title)}
    <ul class="webtoon__list">
     ${createWebtoonItem(webtoonData)}
    </ul>
  `;
  return webtoonList;
};

const createWebtoonHeader = title => {
  if (!title) return '';
  return `
      <div class="webtoon-box__header">
          <h3 class="webtoon-box__title">${title}</h3>
          <button class="webtoon-box__more"><a href="#">더보기 ></a></button>
      </div>
  `;
};

const createUpdatedBadge = updated => {
  if (!updated) return '';
  return `
  <span class="webtoon__updated-badge">
     <img
       src="https://static-page.kakao.com/static/common/icon_up.svg?51cfaf512283ca0e1eaca53414e35a3f"
       alt="updated badge"/>
   </span>
  `;
};

const createWebtoonItem = webtoonData => {
  let item = '';
  webtoonData.forEach(w => {
    item += `
    <li class="webtoon__item">
    <img class="webtoon__image" src="${w.url}" alt="" />
    <div class="webtoon__discription-box">
      <div class="webtoon__title-box">
        ${createUpdatedBadge(w.updated)}
        <p class="webtoon__title">${w.title}</p>
      </div>
      <p class="webtoon__summary">${w.summary}</p>
      <div class="webtoon__info">
        <div class="webtoon__view-box">
          <img
            class="webtoon__view-img"
            src="https://static-page.kakao.com/static/common/icon_read_count.png?817b1f83aa0dd8de232a68ac82efd871"
            alt="read icon"
          />
          <span class="webtoon__view">${w.view}</span>
        </div>
        <div class="webtoon__separator"></div>
        <span class="webtoon__author">${w.author}</span>
      </div>
    </div>
  </li>
       `;
  });

  return item;
};

export { WebtoonList, createWebtoonItem };
