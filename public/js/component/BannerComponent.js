import { domUtil } from "../Util/util.js";

const getBannerHtml = (imgUrl) => {
  return /*html*/ `      
  <div class="recommand__image--container">
    <ul class="recommand__image--wrapper">
      <li class ='recommand__image--img'>
        <img src=${imgUrl[imgUrl.length - 1]} class="rec--cartoonImg" />
      </li>
      ${imgUrl.reduce((imgHTML, url) => {
        return (imgHTML += /*html*/ `
      <li class ='recommand__image--img'>
          <img src=${url} class="rec--cartoonImg" />
      </li>`);
      }, "")}
      <li class ='recommand__image--img'>
        <img src=${imgUrl[0]} class="rec--cartoonImg" />
      </li>
    </ul>

    <div class="recommand__image--controller">
      <span class="prev"></span>
      <span class="next"></span>
    </div>

    <div class="recommand__image--pageCount">1 / ${
      domUtil.$(".recommand__image--wrapper").childElementCount - 2
    }</div>
  </div>

  <div class="recommand__description">설명란</div>
`;
};

export { getBannerHtml };
