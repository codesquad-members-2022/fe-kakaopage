import { LOCAL_FETCH_URL, SERVER_FETCH_URL } from "./constants.js";

const updateNodeClasses = (nodeList, target, className) => {
  [...nodeList.children].forEach((node) => {
    node.classList.remove(className);
  });
  target.classList.add(className);
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

export { updateNodeClasses, getJson, formatUserCount };
