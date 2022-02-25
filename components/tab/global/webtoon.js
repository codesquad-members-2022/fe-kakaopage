import { createCategory } from "../../common/category/index.js";
import { LIST } from "../../../js/constants.js";
import { $ } from "../../../js/utils.js";
import { createTabWebtoonHome } from "../sub/webtoonHome.js";
import { SNBHandler } from "../../../js/handler.js";

const category = createCategory(LIST.CATEGORIES, "snb");

export const tabWebtoonHome = {
  render() {
    $(".container").innerHTML = category + $(".container").innerHTML;
    $(".contents").innerHTML = createTabWebtoonHome();
  },
  addEvent() {
    $(".snb").addEventListener("click", SNBHandler);
  },
};
