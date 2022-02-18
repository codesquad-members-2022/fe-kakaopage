import { $mondayToon } from "./modayToon.js";

const element = document.querySelector(".main__week__menu");
const toonsBox = document.querySelector(".toons__box");

element.addEventListener("click", (event) => {
  console.log(event.target.className);
  const className = event.target.className;
  if (className === "day-월") {
    console.log("월요일");
    console.log(toonsBox.childNodes);
    toonsBox.innerHTML = $mondayToon;
  } else {
    toonsBox.parentNode.replaceChild(
      toonsBox,
      document.querySelector(".oldNode")
    );
  }
});
