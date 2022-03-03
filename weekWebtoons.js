import { webtoonContents, week } from "./data/contents.js";
import { createLiListTemplate } from "./util/createTag.js";

const $weekTap = createLiListTemplate(week);

const htmlString2htmlElement = ({
  tag = "div",
  htmlString,
  className = "",
}) => {
  const $element = document.createElement(tag);
  $element.className = className;
  $element.innerHTML = htmlString;

  return $element;
};

const createTuesdayTapTemplate = ({ imageUrl, title, star, read }) => {
  const htmlString = `
    <div>
      <div class="toon__box">
        <img
          class="toon"
          src=${imageUrl}
          alt="toon"
        />
      </div>
      <img
        src="https://static-page.kakao.com/static/common/badge-thumbnail-star.svg?c4d2181b65253b0259cfa219fe4506ac"
      />
      <span>${star}</span>
      <img
        src="https://static-page.kakao.com/static/common/bmbadge_waitfree.svg?53cf25c84253dee8d32e66da7524dbaf"
      />
    </div>
    <h2 class="title">${title}</h2>
    <div header__container>
      <img
        class="read__icon"
        src="https://static-page.kakao.com/static/common/icon_read_count.png?817b1f83aa0dd8de232a68ac82efd871"
        alt="read count"
      />
      <span>${read}</span>
    </div>
  `;

  return htmlString2htmlElement({ htmlString });
};

const htmlStrings2htmlElementList = ({
  tag = "div",
  data,
  className = "",
  createChildElement,
}) => {
  const $element = document.createElement(tag);
  $element.className = className;

  data.map((data) =>
    $element.insertAdjacentElement("beforeend", createChildElement(data))
  );

  return $element;
};

const createToonList = ({ data }) => {
  const className = "main__toon__category toon__grid toons__box";

  const $toonList = htmlStrings2htmlElementList({
    data,
    className,
    createChildElement: createTuesdayTapTemplate,
  });

  return $toonList;
};

const targetQuerySelector = ({ target = document, className = "" }) => {
  return target.querySelector(`.${className}`);
};

const createWeekWebtoons = ({ data }) => {
  const className = "week__webtoons";
  const filterClass = "filter";
  const tag = "section";
  const navConatinerClassName =
    "main__navigation__menu main__week__menu interval";
  const filterClassName =
    "filter header__container main__toon__category container__space__between";

  const htmlString = `
      <nav>
        <ul class="${navConatinerClassName}">
          ${$weekTap}
        </ul>
      </nav>

      <section class="${filterClassName}">
        <div>
          <button>전체</button>
          <span>|</span>
          <button>웹툰</button>
          <span>|</span>
          <button><span>clock</span>웹툰</button>
        </div>

        <div>
          <span>전체 (180)</span>
          <span>▼</span>
        </div>
      </section>
  `;

  const $weekTapSeciton = htmlString2htmlElement({
    tag,
    htmlString,
    className,
  });

  const $filterSection = targetQuerySelector({
    target: $weekTapSeciton,
    className: filterClass,
  });

  const $toonList = createToonList({ data });
  $filterSection?.insertAdjacentElement("afterend", $toonList);

  return $weekTapSeciton;
};

const $weekWebtoons = createWeekWebtoons({ data: webtoonContents });

export default $weekWebtoons;
