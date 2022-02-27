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

const getComponentsTemplate = (components) => {
  return components?.reduce((tags, component) => {
    tags += component.template();
    return tags;
  }, "");
};

const formatUserCount = (userCount) => {
  return (userCount / 10000).toFixed(1) + "만명";
};

const getJson = async (dataName) => {
  try {
    const response = await fetch(`${HEROKU_SERVER_URL}${dataName}`);
    return response.json();
  } catch (error) {
    console.error(error);
  }
};

const getJsons = (paths) => {
  return Promise.all(paths.map((path) => getJson(path)));
};

export {
  updateNodeClasses,
  getJson,
  formatUserCount,
  createExtendsRelation,
  getJsons,
  getComponentsTemplate,
};
