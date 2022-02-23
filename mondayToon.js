import { mondayWebtoonContents } from "./data/contents.js";

const makeToonTemplate = (imageUrl, star, title, read) => {
  return `<div>
    <div>
      <div class="toon__box">
        <img class="toon" src=${imageUrl} alt="toon"/>
        </div>
        <img src="https://static-page.kakao.com/static/common/badge-thumbnail-star.svg?c4d2181b65253b0259cfa219fe4506ac"/>
        <span>${star}</span>
        <img src="https://static-page.kakao.com/static/common/bmbadge_waitfree.svg?53cf25c84253dee8d32e66da7524dbaf"/>
        </div>
        <h2 class="title">${title}</h2>
    <div header__container>
      <img class="read__icon" src="https://static-page.kakao.com/static/common/icon_read_count.png?817b1f83aa0dd8de232a68ac82efd871" alt="read count"/>
      <span>${read}</span>
    </div>
  </div>`;
};

const createdToonTemplate = mondayWebtoonContents.map(
  ({ imageUrl, star, title, read }) =>
    makeToonTemplate(imageUrl, star, title, read)
);

const $mondayToon = createdToonTemplate.join("");

export { $mondayToon };
