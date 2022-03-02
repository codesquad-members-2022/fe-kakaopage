import { getClassifiedData } from "./editData.js";

const dataAddress = "http://localhost:4000/data";
const init = () => {
  fetch(dataAddress)
    .then((res) => res.json())
    .then((json) => getClassifiedData(json))
    .then(() => import("./render.js"))
    .then((module) => module["render"]());
};

init();
