import Element from './Element.js';

export default class extends Element {
  constructor() {
    super();
  }
  async getElement(classname, children) {
    return `
    <div class="${classname}">
      ${children}
    </div>`;
  }
}
