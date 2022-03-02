const $ = (cName) => {
  return document.querySelector(cName);
};

const weekMap = new Map([
  ["일", 6],
  ["월", 0],
  ["화", 1],
  ["수", 2],
  ["목", 3],
  ["금", 4],
  ["토", 5],
  ["완결", 7],
]);

function throttle(callback, limit = 100) {
  let waiting = false;
  return function () {
    if (!waiting) {
      callback.apply(this, arguments);
      waiting = true;
      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  };
}

export { $, throttle, weekMap };
