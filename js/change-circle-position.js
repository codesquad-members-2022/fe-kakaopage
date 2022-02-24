import { $ } from "./selector.js";
export const changeCirclePosition = (dayOfTheWeek) => {
  const circle = $(".circle");
  const newClassName = `circle webtoon-weekly-content__nav__circile-${dayOfTheWeek}`;
  circle.className = newClassName;
};
