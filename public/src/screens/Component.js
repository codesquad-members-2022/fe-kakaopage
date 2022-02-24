function Component(target, state) {
  this.target = target;
  this.state = state || {};
  this.eventTypes = [];
}

Component.prototype.render = function () {
  this.target.innerHTML = this.template();
  this.removeEvent();
  this.setEvent();
};

Component.prototype.template = function () {
  return ``;
};

Component.prototype.removeEvent = function () {
  this.eventTypes.forEach(({ type, listener }) => {
    this.target.removeEventListener(type, listener);
  });
};

Component.prototype.addEvent = function (eventType, selector, callback) {
  const children = [...this.target.querySelectorAll(selector)];
  const isTarget = (target) =>
    children.includes(target) || target.closest(selector);

  const handleEventListener = (event) => {
    if (!isTarget(event.target)) return false;
    callback(event);
  };
  this.eventTypes.push({ type: eventType, listener: handleEventListener });
  this.target.addEventListener(eventType, handleEventListener);
};

Component.prototype.setEvent = function () {};

Component.prototype.setState = function (newState) {
  this.state = { ...this.state, ...newState };
  this.render();
};

export default Component;
