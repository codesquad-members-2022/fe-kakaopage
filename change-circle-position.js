import { $ } from './selector.js';
export const changeCirclePosition = (dayOfTheWeek) => {
  const circle = $(".circle");
  const newClassName = `circle main-content__nav__circile-${dayOfTheWeek}`;
  circle.className = newClassName;
  // console.log(dayOfTheWeek);
  // console.log(circle,circle.className);
}