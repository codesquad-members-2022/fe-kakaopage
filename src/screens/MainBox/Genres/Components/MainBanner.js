import { createExtendsRelation } from "../../../../utils.js";
import Component from "../../../Component.js";
import carousel from "../../../../modules/carousel.js";
import bannerImgBoxTpl from "./Templates/bannerImgBoxTpl.js";

function MainBanner(infoObject) {
  Component.call(this, infoObject);
}

createExtendsRelation(MainBanner, Component);

MainBanner.prototype.mount = function () {
  const { webtoons } = this.state;
  const $mainBanner = this.$target;
  const $bannerElems = webtoons.map((webtoon) => {
    const wtTpl = bannerImgBoxTpl(webtoon);
    const div = document.createElement("div");
    div.innerHTML = wtTpl;
    return div;
  });
  const { $carousel, getInterval } = carousel({
    elems: $bannerElems,
    elemWidth: 720,
    unit: "px",
    css: {
      orderCss: {
        bottom: "60px",
        right: "30px",
        fontSize: "20px",
      },
      arrowBoxCss: {
        top: "200px",
      },
      arrowCss: {
        backgroundColor: "rgba(0,0,0,0.2)",
        color: "#fff",
      },
    },
  });
  $mainBanner.appendChild($carousel);
  this.$props.setCarousel(getInterval);
};

export default MainBanner;
