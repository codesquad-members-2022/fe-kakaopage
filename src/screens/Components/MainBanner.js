import { createExtendsRelation } from "../../utils.js";
import Component from "../Component.js";
import BannerImage from "./BannerImage.js";
import carousel from "../../carousel.js";

function MainBanner(target, state) {
  Component.call(this, target, state);
  if (this.state.interval) {
    clearInterval(interval);
  }
  const webtoons = JSON.parse(localStorage.getItem("webtoons")).filter(
    (wt) => wt.isMain[this.state.genre]
  );
  const banners = webtoons
    .map((webtoon) => new BannerImage("_", webtoon))
    .map((imageBox) => {
      const $imageBox = document.createElement("div");
      $imageBox.innerHTML = imageBox.template();
      return $imageBox;
    });
  const { $carousel, getInterval } = carousel(...banners);
  this.state.banners = $carousel;
  this.state.getInterval = getInterval;
  this.render();
}

createExtendsRelation(MainBanner, Component);

MainBanner.prototype.template = function () {
  const { banners } = this.state;
  return `
    <li class="mainBox main__mainBanner">
        ${banners?.outerHTML}
    </li>
    `;
};

MainBanner.prototype.render = function () {
  this.target.innerHTML = this.template();
  if (this.state.interval) {
    clearInterval(this.state.interval);
  }
  this.state = { ...this.state, interval: this.state.getInterval() };
  this.removeEvent();
  this.setEvent();
};

export default MainBanner;
