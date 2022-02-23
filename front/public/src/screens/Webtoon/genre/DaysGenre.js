import Component from "../../Component.js";
import MainBanner from "../../Components/MainBanner.js";
import FullButton from "../../Components/FullButton.js";
import { createExtendsRelation } from "../../../utils.js";

function DaysGenre(target) {
  Component.call(this, target);

  const mainBanner = new MainBanner(target, { genre: "days" });

  this.setState({
    contents: [mainBanner, new FullButton()],
  });

  this.template = function () {
    const { contents } = this.state;
    return `${contents?.reduce((tags, content) => {
      tags += content.template();
      return tags;
    }, "")}`;
  };
  this.render();
}

createExtendsRelation(DaysGenre, Component);

export default DaysGenre;
