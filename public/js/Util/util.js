const domUtil = {
  createEl(el) {
    return document.createElement(el);
  },
  $(className) {
    return document.querySelector(className);
  },
  $All(className) {
    return document.querySelectorAll(className);
  },
  remove(dom) {
    if (this.$(dom)) {
      this.$All(dom).forEach((el) => el.remove());
    }
  },
  getDataAndRender(url, render) {
    fetch(url)
      .then((response) => response.json())
      .then(render);
  },
  eventsAdder(className, eventType, callBack) {
    domUtil.$(className).addEventListener(eventType, callBack);
  },
};

export { domUtil };
