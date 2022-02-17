import Element from './Element.js';

export default class extends Element {
  constructor() {
    super();
  }
  async getElement(classname, children) {
    return `
    <a class="${classname}">
      ${children}
    </a>`;
  }
}
