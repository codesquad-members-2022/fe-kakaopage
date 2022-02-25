import { createCategory } from "../../category/index.js";
import { CATEGORIES } from "../../../js/constants.js";
import { $ } from "../../../js/utils.js";
import { createTabWebtoonHome } from "../sub/webtoonHome.js";

const category = createCategory(CATEGORIES, "snb");

export const tabWebtoonHome = {
  render() {
    $(".container").innerHTML = category + $(".container").innerHTML;
    $(".contents").innerHTML = createTabWebtoonHome();
  },
};
