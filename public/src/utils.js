import { HEROKU_SERVER_URL } from "./constants.js";

const createExtendsRelation = (Child, Parent) => {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
};

const updateNodeClasses = (target, className) => {
  [...target.parentNode.children].forEach((node) => {
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
      fetch(`${HEROKU_SERVER_URL}${dataName}`)
        .then((response) => response.json())
        .then((json) => resolve(json));
    } catch (error) {
      reject(error);
    }
  });
};

export { updateNodeClasses, getJson, formatUserCount, createExtendsRelation };
