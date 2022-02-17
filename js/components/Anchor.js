import Element from './Element.js';

export default class extends Element {
  constructor() {
    super();
  }
  async getElement(classname, children, path) {
    return `
    <a href="/${path}" class="${classname}">
      ${children}
    </a>`;
  }
}
