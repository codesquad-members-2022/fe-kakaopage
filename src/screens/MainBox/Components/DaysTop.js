import { createExtendsRelation } from "../../../utils.js";
import Component from "../../Component.js";

function DaysTop(infoObject) {
  Component.call(this, infoObject);
}

createExtendsRelation(DaysTop, Component);

DaysTop.prototype.template = function () {
  return ``;
  // const { days, koreaDay, daysList } = this.state;
  // return `
  //     <ul class="contents__daysNav">
  //     ${days
  //       .map(
  //         (day) =>
  //           `<li class='daysNav-item ${koreaDay === day ? " selected" : ""}'>
  //             ${day}
  //           </li>`
  //       )
  //       .join("")}
  //         </ul>
  //         <ul class="contentsCard">
  //           ${daysList?.template()}
  //         </ul>`;
};

export default DaysTop;
