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
  return days.reduce((tags, day) => {
    tags += `
      <li class='daysNav-item ${selected === day ? " selected" : ""}'
        data-day="${day}">
          ${day}
      </li>`;
    return tags;
  }, "");
};

export default DaysList;
