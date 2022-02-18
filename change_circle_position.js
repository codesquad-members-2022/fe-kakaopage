export const changeCirclePosition = (dayOfTheWeek) => {
  const circle = document.querySelector(".circle");
  const newClassName = `circle main-content__content__nav__circile-${dayOfTheWeek}`;
  circle.className = newClassName;
  console.log(dayOfTheWeek);
  console.log(circle,circle.className);
}