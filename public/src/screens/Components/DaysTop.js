import { createExtendsRelation } from "../../utils.js";
import Component from "../Component.js";

function DaysTop(target, state) {
  Component.call(this, target, state);

  this.template = function () {
    const { days, koreaDay, daysList } = this.state;
    return `
      <ul class="contents__daysNav">
      ${days
        .map(
          (day) =>
            `<li class='daysNav-item ${koreaDay === day ? " selected" : ""}'>
              ${day}
            </li>`
        )
        .join("")}
          </ul>
          <ul class="contentsCard">
            ${daysList?.template()}
          </ul>`;
  };

  this.render();
}

createExtendsRelation(DaysTop, Component);

export default DaysTop;
