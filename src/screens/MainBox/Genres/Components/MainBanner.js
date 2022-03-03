import { createExtendsRelation } from "../../../../utils.js";
import Component from "../../../Component.js";
import carousel from "../../../../modules/carousel.js";
import BannerImage from "./BannerImage.js";

function MainBanner(infoObject) {
  Component.call(this, infoObject);
}

createExtendsRelation(MainBanner, Component);

MainBanner.prototype.mount = function () {
  const $mainBanner = this.$target.querySelector("#wtMainBanner");
};
MainBanner.prototype.template = function () {
  return `
    <li id="wtMainBanner" class="mainBox main__mainBanner"></li>
    `;
};

export default MainBanner;
