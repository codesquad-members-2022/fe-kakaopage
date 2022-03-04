import { KAKAO_DATA_URL } from "../../../../../constants.js";
import { createExtendsRelation } from "../../../../../utils.js";
import ContentsBox from "../ContentsBox.js";
import carousel from "../../../../../modules/carousel.js";

function RecommendEvent(infoObject) {
  ContentsBox.call(this, infoObject);
}

createExtendsRelation(RecommendEvent, ContentsBox);

RecommendEvent.prototype.mount = function () {
  const {
    webtoons: { section_banner },
  } = this.state;

  const FIRST_ELEMENT = 0;
  const { list } = section_banner[FIRST_ELEMENT];

  const $bannerImgBox = this.$target.querySelector(".banner__imgBox");
  const $bannerElems = list.map(({ image, title }) => {
    const wtTpl = `<img src="${KAKAO_DATA_URL + image}" alt="${title}" />`;
    const div = document.createElement("div");
    div.innerHTML = wtTpl;
    return div;
  });
  const { $carousel } = carousel({
    elems: $bannerElems,
    elemWidth: 690,
    unit: "px",
    css: {
      elemCss: {
        objectFit: "cover",
        zIndex: "-1",
      },
      arrowBoxCss: {
        justifyContent: "unset",
        color: "#fff",
        bottom: "12px",
        left: "0px",
        opacity: 0.6,
        zIndex: 2,
      },
      arrowCss: {
        border: "none",
        margin: "0px 15px",
      },
      orderCss: {
        bottom: "20px",
        left: "40px",
        opacity: 0.6,
      },
    },
  });
  $bannerImgBox.appendChild($carousel);
};

RecommendEvent.prototype.setup = function () {
  this.state.contentBody = `<div class="banner__imgBox"></div>`;
};

export default RecommendEvent;
