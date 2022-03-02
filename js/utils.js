import { STRING } from "./constants.js";

export const getRandomNumber = ({ min, max }) => {
  return Math.floor(min + Math.random() * (max - min + 1));
};

export const getRandomString = ({ length }) => {
  return (
    "css-" +
    [...Array(length)]
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