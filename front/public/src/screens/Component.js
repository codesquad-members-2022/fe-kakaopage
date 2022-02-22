function Component(target) {
  this.target = target;
  this.state = {};
}

Component.prototype.render = function () {
  this.target.innerHTML = this.template();
  this.setEvent();
};

Component.prototype.template = function () {
  return ``;
};

Component.prototype.addEvent = function (eventType, selector, callback) {
  const children = [...this.target.querySelectorAll(selector)];

  const isTarget = (target) =>
    children.includes(target) || target.closest(selector);
  this.target.addEventListener(eventType, (event) => {
    if (!isTarget(event.target)) return false;
    callback(event);
  });
};

Component.prototype.setEvent = function () {};

Component.prototype.setState = function (newState) {
  this.state = { ...this.state, ...newState };
  this.render();
};

export default Component;
