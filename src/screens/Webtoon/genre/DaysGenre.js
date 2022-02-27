import Component from "../../Component.js";
import MainBanner from "../../Components/MainBanner.js";
import FullButton from "../../Components/FullButton.js";
import {
  createExtendsRelation,
  getComponentsTemplate,
} from "../../../utils.js";

function DaysGenre(target) {
  Component.call(this, target);

  const mainBanner = new MainBanner(target, { genre: "days" });

  this.setState({
    contents: [mainBanner, new FullButton()],
  });

  this.template = function () {
    return getComponentsTemplate(this.state.contents);
  };
  this.render();
}

createExtendsRelation(DaysGenre, Component);

export default DaysGenre;
