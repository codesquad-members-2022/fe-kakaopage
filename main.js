import { $mondayToon } from "./mondayToon.js";

const element = document.querySelector(".main__week__menu");
const toonsBox = document.querySelector(".toons__box");

element.addEventListener("click", (event) => {
  const className = event.target.className;
  if (className === "day-월") {
    console.log("월요일");
    console.log(toonsBox.childNodes);
    toonsBox.innerHTML = $mondayToon;
  }
});
