import Anchor from './Anchor.js';
import Element from './Element.js';

export default class extends Element {
  constructor() {
    super();
  }
  async getElement(classname, children_arr, childName) {
    const anchor = new Anchor();
    // ${await anchor.getElement({PATH, NAME})}
    return `
    <ul class="${classname}">
      ${children_arr.map(
        ({ PATH, NAME }) =>
          `<li class="${childName}">
          <a href="./${PATH}">${NAME}</a>
        </li>`
      )}
    </ul>`;
  }
}
