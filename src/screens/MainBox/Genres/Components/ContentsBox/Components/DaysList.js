import { createExtendsRelation } from "../../../../../../utils.js";
import Component from "../../../../../Component.js";

function DaysList(infoObject) {
  Component.call(this, infoObject);
}
createExtendsRelation(DaysList, Component);

DaysList.prototype.setEvent = function () {
  const { updateDay } = this.$props;

  const handleAddEvent = ({ target }) => {
    const $eventTarget = target.closest(".daysNav-item");
    updateDay($eventTarget.dataset.day);
  };
  this.addEvent("click", ".daysNav-item", handleAddEvent);
};

DaysList.prototype.template = function () {
  const { days, selected } = this.state;
  const PROGRAM_SUNDAY = 0;
  const SERVICE_SUNDAY = 7;
  const SERVICE_FINISH = 12;

  return days.reduce((tags, day, index) => {
    const serviceDay =
      index === SERVICE_SUNDAY
        ? SERVICE_FINISH
        : index === PROGRAM_SUNDAY
        ? SERVICE_SUNDAY
        : index;

    tags += `
      <li class='daysNav-item ${+selected === serviceDay ? " selected" : ""}'
        data-day="${serviceDay}">
          ${day}
      </li>`;

    return tags;
  }, "");
};

export default DaysList;
