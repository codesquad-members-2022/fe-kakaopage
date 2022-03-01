import { HEROKU_SERVER_URL, SERVER_FETCH_URL } from "./constants.js";

const createExtendsRelation = (Child, Parent) => {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
};

const getJson = async (dataName) => {
  try {
    const response = await fetch(
      `${DEPLOY ? HEROKU_SERVER_URL : SERVER_FETCH_URL}${dataName}`
    );
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
  createExtendsRelation,
  getJsons,
  getComponentsTemplate,
};
