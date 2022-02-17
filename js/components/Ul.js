import Element from './Element.js';

export default class extends Element {
  constructor() {
    super();
  }
  async getElement(classname, children_arr, childName) {
    return `
    <ul class="${classname}">
      ${children_arr.map(
        (children) =>
          `<li class="${childName}">
          <span>${children}</span>
        </li>`
      )}
    </ul>`;
  }
}
