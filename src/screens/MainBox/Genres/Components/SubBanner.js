import { KAKAO_DATA_URL } from "../../../../constants.js";
import { createExtendsRelation } from "../../../../utils.js";
import Component from "../../../Component.js";
import carousel from "../../../../modules/carousel.js";

function SubBanner(infoObject) {
  Component.call(this, infoObject);
}

createExtendsRelation(SubBanner, Component);

SubBanner.prototype.mount = function () {
  const {
    webtoons: { section_text_banner },
  } = this.state;

  const FIRST_ELEMENT = 0;
  const { list } = section_text_banner[FIRST_ELEMENT];

  const $subBanner = this.$target;
  const $bannerElems = list.map(({ bg_img, title }) => {
    const wtTpl = `
    <img class="subImg" src=
    "${KAKAO_DATA_URL + bg_img}" alt="${title}" />`;
    const div = document.createElement("div");
    div.innerHTML = wtTpl;
    return div;
  });
  const { $carousel } = carousel({
    elems: $bannerElems,
    elemWidth: 720,
    unit: "px",
    css: {
      elemCss: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      arrowBoxCss: {
        position: "absolute",
        display: "flex",
        justifyContent: "space-between",
        top: "40px",
      },
    },
  });
  $subBanner.appendChild($carousel);
};

export default SubBanner;
