import Component from "../../Component.js";
import MainBanner from "../../Components/MainBanner.js";
import FullButton from "../../Components/FullButton.js";
import { createExtendsRelation } from "../../../utils.js";
import { getComponentsTemplate } from "../../../serviceUtils.js";

function DaysGenre(target) {
  Component.call(this, target);
  const mainBanner = new MainBanner(target, { genre: "days" });
  this.setState({
    contents: [mainBanner, new FullButton()],
  });
  this.render();
}

DaysGenre.prototype.template = function () {
  return getComponentsTemplate(this.state.contents);
};

createExtendsRelation(DaysGenre, Component);

export default DaysGenre;
