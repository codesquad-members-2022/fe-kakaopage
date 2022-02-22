import { createExtendsRelation } from "../../utils.js";
import Component from "../Component.js";

function DaysTop(target, state) {
  Component.call(this, target, state);

  const { days, koreaDay } = this.state;

  this.template = function () {
    return `
      <ul class="contents__daysNav">
      ${days
        .map(
          (day) =>
            `<li class='${koreaDay === day ? "selected" : ""}'>${day}</li>`
        )
        .join("")}
          </ul>
          <ul class="contentsCard">
            ${this.state.daysList?.template()}
          </ul>`;
  };
}

createExtendsRelation(DaysTop, Component);

export default DaysTop;
