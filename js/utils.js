import { CSS_NAME_LENGTH, STRING } from "./constants.js";

export const getRandomNumber = ({ min, max }) => {
  return Math.floor(min + Math.random() * (max - min + 1));
};

export const getRandomString = () => {
  return (
    "css-" +
    [...Array(CSS_NAME_LENGTH)]
      .map(() => {
        return STRING[getRandomNumber({ min: 0, max: 35 })];
      })
      .join("")
  );
};

export function $(selector) {
  return document.querySelector(selector);
}

export function draw({ to, el }) {
  $(to).innerHTML = el;
}

export function getTransformX(el) {
  const style = getComputedStyle(el).transform;
  if (style === "none") {
    return 0;
  }
  return +style.split(",")[4];
}
