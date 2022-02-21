import { LOCAL_FETCH_URL } from "./constants.js";

const updateSelectedNode = (nodeList, target) => {
  [...nodeList.children].forEach((node) => {
    node.classList.remove("selected");
  });
  target.classList.add("selected");
};

const formatUserCount = (userCount) => {
  return (userCount / 10000).toFixed(1) + "만명";
};

const getJson = (dataName) => {
  return new Promise((resolve, reject) => {
    try {
      fetch(`${LOCAL_FETCH_URL}${dataName}.json`)
        .then((response) => response.json())
        .then((json) => resolve(json));
    } catch (error) {
      reject(error);
    }
  });
};

export { updateSelectedNode, getJson, formatUserCount };
