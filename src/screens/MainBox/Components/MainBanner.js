import { createExtendsRelation } from "../../../utils.js";
import Component from "../../Component.js";
import BannerImage from "./BannerImage.js";
import carousel from "../../../modules/carousel.js";

function MainBanner(infoObject) {
  Component.call(this, infoObject);
}

createExtendsRelation(MainBanner, Component);

MainBanner.prototype.template = function () {
  return `
    <li class="mainBox main__mainBanner">
        
    </li>
    `;
};

export default MainBanner;
