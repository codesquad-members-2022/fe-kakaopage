import { createExtendsRelation } from "../../../../utils.js";
import Component from "../../../Component.js";
import carousel from "../../../../modules/carousel.js";
import bannerImgBoxTpl from "./Templates/bannerImgBoxTpl.js";

function MainBanner(infoObject) {
  Component.call(this, infoObject);
  this.$props.clearCarousel();
}

createExtendsRelation(MainBanner, Component);

MainBanner.prototype.mount = function () {
  const { webtoons } = this.state;
  const $mainBanner = this.$target.querySelector("#wtMainBanner");
  const $bannerElems = webtoons.map((webtoon) => {
    const wtTpl = bannerImgBoxTpl(webtoon);
    const div = document.createElement("div");
    div.innerHTML = wtTpl;
    return div;
  });
  const { $carousel, getInterval } = carousel(...$bannerElems);
  $mainBanner.appendChild($carousel);
  this.$props.setCarousel(getInterval);
};

MainBanner.prototype.template = function () {
  return `
    <li id="wtMainBanner" class="mainBox main__mainBanner"></li>
    `;
};

export default MainBanner;
