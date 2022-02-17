export default class {
  constructor(id) {
    this.targetDOM = document.querySelector(`#${id}`);
  }

  setTitle(title) {
    this.title = title;
  }
  async getHtml() {
    return '';
  }
}
