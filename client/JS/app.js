import { getClassifiedData } from "./editData.js";
import { render } from "./render.js";

const dataAddress = "http://localhost:4000/data";
const init = () => {
  fetch(dataAddress)
    .then((res) => res.json())
    .then((json) => getClassifiedData(json))
    .then(() => render());
};

init();
