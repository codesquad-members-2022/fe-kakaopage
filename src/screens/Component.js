function Component({ $target, state, $props }) {
  this.$target = $target;
  this.$props = $props;
  this.state = state || {};
  this.eventTypes = [];
  this.setup();
  this.render();
  this.setEvent();
}

Component.prototype = {
  setup() {},
  mount() {},
  render() {
    this.$target.innerHTML = this.template();
    this.mount();
  },
  template() {
    return ``;
  },
  addEvent(eventType, selector, callback) {
    const children = [...this.$target.querySelectorAll(selector)];
    const isTarget = (target) =>
      children.includes(target) || target.closest(selector);

    const handleEventListener = (event) => {
      if (!isTarget(event.target)) return false;
      callback(event);
    };
    this.eventTypes.push({ type: eventType, listener: handleEventListener });
    this.$target.addEventListener(eventType, handleEventListener);
  },
  setEvent() {},
  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  },
};

export default Component;
